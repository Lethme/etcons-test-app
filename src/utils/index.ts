import { useEnv } from "@/utils/env";
import { useConfig } from "@/utils/config";
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
import { wait } from "@/utils/wait";
import { isValidUrl } from "@/utils/is-valid-url";
import { fetchPageTitle } from "@/utils/fetch-page-title";

export {
    useEnv,
    useConfig,
    debounce,
    throttle,
    wait,
    isValidUrl,
    fetchPageTitle,
}

export const useUtils = () => {
    return {
        useEnv,
        useConfig,
        debounce,
        throttle,
        wait,
        isValidUrl,
        fetchPageTitle,
    }
}