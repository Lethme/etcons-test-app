import type {RouteRecordRaw} from "vue-router";
import HomeView from "@/views/home/home-view.vue";
import LinkView from "@/views/link/link-view.vue";
import SelectView from "@/views/select/select-view.vue";
import TimeView from "@/views/time/time-view.vue";
import TableView from "@/views/table/table-view.vue";
import TableExtendedView from "@/views/table-extended/table-extended-view.vue";

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
    component: LinkView,
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Поле Link",
    },
}, {
    path: '/select',
    name: 'select',
    component: SelectView,
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Сброс значений в Select",
    },
}, {
    path: '/time',
    name: 'time',
    component: TimeView,
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "DateTime picker",
    },
}, {
    path: '/table',
    name: 'table',
    component: TableView,
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Многострочный текст в ячейке",
    },
}, {
    path: '/table-extended',
    name: 'table-extended',
    component: TableExtendedView,
    meta: {
        useInGlobalNavigation: true,
        routeTitle: "Таблица с поиском",
        routeTitleFull: "Таблица с поиском (расширенное задание)",
    },
}] as const;