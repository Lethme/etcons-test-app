import {definePreset} from "@primevue/themes";
import Aura from "@primevue/themes/aura";
import { useConfig } from "@/utils/config";

const config = useConfig();

export const EtConsTestAppAuraPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: `{${config.PRIMARY_COLOR_SCHEME}.50}`,
            100: `{${config.PRIMARY_COLOR_SCHEME}.100}`,
            200: `{${config.PRIMARY_COLOR_SCHEME}.200}`,
            300: `{${config.PRIMARY_COLOR_SCHEME}.300}`,
            400: `{${config.PRIMARY_COLOR_SCHEME}.400}`,
            500: `{${config.PRIMARY_COLOR_SCHEME}.500}`,
            600: `{${config.PRIMARY_COLOR_SCHEME}.600}`,
            700: `{${config.PRIMARY_COLOR_SCHEME}.700}`,
            800: `{${config.PRIMARY_COLOR_SCHEME}.800}`,
            900: `{${config.PRIMARY_COLOR_SCHEME}.900}`,
            950: `{${config.PRIMARY_COLOR_SCHEME}.950}`,
        },
    },
});