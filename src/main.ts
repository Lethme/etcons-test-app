import "./assets/main.less"
import 'primeicons/primeicons.css'

import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue";
import router from "./router";

import prime from "primevue/config";
import primeLocale from "primelocale/ru.json";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import BadgeDirective from 'primevue/badgedirective';
import TooltipDirective from "primevue/tooltip";
import Ripple from 'primevue/ripple';

import {usePlugins} from "@/plugins";
import {useThemePresets} from "@/themes/presets";

import './extensions';

const app = createApp(App);
const pinia = createPinia();
const plugins = usePlugins();
const themePresets = useThemePresets();

app.use(pinia);
app.use(router);
app.use(prime, {
    ripple: true,
    locale: primeLocale.ru,
    theme: {
        preset: themePresets.EtConsTestAppAuraPreset,
        options: {
            darkModeSelector: 'light',
        },
    },
});
app.use(ToastService);
app.use(ConfirmationService);

app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('tooltip', TooltipDirective);

app.use(plugins);

app.mount('#app');
