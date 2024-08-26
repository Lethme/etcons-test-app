import type {RouteRecordRaw} from "vue-router";
import HomeView from "@/views/home/home-view.vue";

export const routes: ReadonlyArray<RouteRecordRaw> = [{
    path: '/',
    name: '',
    component: HomeView,
    meta: {
        useInGlobalNavigation: true,
        routeIconClass: 'pi-home',
    },
}, {
    path: '/link',
    name: 'link',
    component: () => import("@/views/link/link-view.vue"),
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Поле Link",
    },
}, {
    path: '/select',
    name: 'select',
    component: () => import("@/views/select/select-view.vue"),
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Сброс значений в Select",
    },
}, {
    path: '/time',
    name: 'time',
    component: () => import("@/views/time/time-view.vue"),
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "DateTime picker",
    },
}, {
    path: '/table',
    name: 'table',
    component: () => import("@/views/table/table-view.vue"),
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Многострочный текст в ячейке",
    },
}, {
    path: '/table-extended',
    name: 'table-extended',
    component: () => import("@/views/table-extended/table-extended-view.vue"),
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Таблица с поиском",
    },
}] as const;