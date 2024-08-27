import "vue-router";

declare module "vue-router" {
    interface RouteMeta {
        useInGlobalNavigation?: boolean;
        routeTitle?: string;
        routeTitleFull?: string;
        routeIconClass?: string;
        [key: string]: any;
    }
}