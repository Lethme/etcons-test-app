import { useBreadcrumbs } from "@/utils/hooks/breadcrumbs";
import { useForm } from "@/utils/hooks/forms";
import { useGlobalNavigation } from "@/utils/hooks/navigation";

export {
    useBreadcrumbs,
    useForm,
    useGlobalNavigation,
}

export const useUtilsHooks = () => {
    return {
        useBreadcrumbs,
        useForm,
        useGlobalNavigation,
    }
}