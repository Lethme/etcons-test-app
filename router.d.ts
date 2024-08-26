import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        useInGlobalNavigation?: boolean;
        routeTitle?: string;
        routeIconClass?: string;
        [key: string]: any;
    }
}