// Importing necessary types and plugins
import type { App, Plugin } from "vue";
import { usePrimevueComponentPlugin } from "@/plugins/primevue-components";

// Definition of available plugins
const plugins = {
    primevue_components: usePrimevueComponentPlugin,
} as const;

// Define types for plugins and plugin keys
type PluginsType = typeof plugins;
type PluginsKey<TPlugins extends PluginsType> = TPlugins extends Readonly<Record<string, Plugin>> ? keyof TPlugins : never;
type PluginOptions<TValue> = Partial<Record<PluginsKey<PluginsType>, TValue>>;

// Function for dynamically installing plugins based on options
export const usePlugins = (
    // Array of plugin keys to install (optional)
    pl: Array<PluginsKey<PluginsType>> = [],
    // Options object specifying which plugins to use and their configurations (optional)
    options: PluginOptions<Array<any>> = {}
): Plugin<PluginOptions<Array<any> | boolean>[]> => {
    // Function for installing plugins into the provided Vue application instance
    const installPlugins = (app: App, keys: Array<PluginsKey<PluginsType>>, options: PluginOptions<Array<any> | boolean>, forceUse: boolean = false) => {
        // Iterating over the provided plugin keys
        for (const key of keys) {
            // Determine if the plugin should be used based on options and forceUse flag
            const use =
                forceUse ||
                (typeof options[key as PluginsKey<PluginsType>] === "boolean" && options[key as PluginsKey<PluginsType>] === true) ||
                Array.isArray(options[key as PluginsKey<PluginsType>]);

            // Retrieve the plugin function
            const plugin = plugins[key as PluginsKey<PluginsType>].call(this);
            // Extract plugin options from the options object if the plugin is to be used
            const pluginOptions = use && Array.isArray(options[key as PluginsKey<PluginsType>]) ? options[key as PluginsKey<PluginsType>] as Array<any> : [];

            // Check if the plugin has an install method and if it should be used, then install it
            if (plugin && plugin.install && use) {
                plugin.install(app, ...pluginOptions);
            }
        }
    }

    // Main install function to be exposed
    const install = (app: App, op?: PluginOptions<Array<any> | boolean>) => {
        // If options are provided, install plugins based on those options
        if (op) {
            installPlugins(app, Object.keys(op) as Array<PluginsKey<PluginsType>>, op);
        } else {
            // Otherwise, install plugins based on default keys and options
            installPlugins(app, pl, options, true);
        }
    }

    // Return an object with the install method as Vue plugin
    return { install };
}