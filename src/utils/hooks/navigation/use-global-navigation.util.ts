import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";

export const useGlobalNavigation = () => {
    const route = useRoute();
    const router = useRouter();

    const routes = computed(() => {
        return router.getRoutes().filter(record => !!record.meta.useInGlobalNavigation);
    });

    return {
        route,
        router,
        routes,
    }
}