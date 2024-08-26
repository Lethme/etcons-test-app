import {useRoute, useRouter} from "vue-router";
import {computed} from "vue";

export const useBreadcrumbs = () => {
    const route = useRoute();
    const router = useRouter();

    const getBreadcrumbsRaw = () => {
        const matched = route.matched;
        return matched.filter(record => record.path != "/").map((record) => {
            return {
                name: record.meta.breadcrumb ?? record.name,
                path: record.path,
                routeName: record.name,
                preserveForDefaultRoute: !!record.meta.preserveBreadcrumbForDefaultRoute,
                defaultRoute: !!record.meta.defaultRoute,
            };
        });
    }

    const breadcrumbs = computed(() => {
        const bc = getBreadcrumbsRaw();

        for (let i = bc.length - 1; i >= 0; i--) {
            const record = bc[i];
            const parent = bc[i - 1];

            if (parent && parent.preserveForDefaultRoute && record.defaultRoute) {
                parent.name = undefined;
            }
        }

        return bc.filter(record => record.name);
    });

    return {
        route,
        router,
        breadcrumbs,
    }
}