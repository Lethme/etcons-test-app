import type {App, Plugin} from "vue";
import * as PrimevueComponents from "@/plugins/primevue-components/components";

/**
 * This plugin is used to make primevue components globally available without explicit imports
 * @deprecated since unplugin-vue-components resolver has been released
 */
export const usePrimevueComponentPlugin = (): Plugin => {
    const install = (app: App, ...options: any[]) => {
        for (const [name, component] of Object.entries(PrimevueComponents)) {
            app.component(name, component);
        }
    }

    return { install };
}