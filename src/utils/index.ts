import { useEnv, Environment } from "@/utils/env";
import { useConfig } from "@/utils/config";
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
import { mapObject } from "@/utils/map-object";
import { wait } from "@/utils/wait";
import { castClassRecord } from "@/utils/cast-class-record";
import { compareDates } from "@/utils/compare-dates";
import { isValidUrl } from "@/utils/is-valid-url";
import { fetchPageTitle } from "@/utils/fetch-page-title";

export {
    Environment,
    useEnv,
    useConfig,
    debounce,
    throttle,
    mapObject,
    wait,
    castClassRecord,
    compareDates,
    isValidUrl,
    fetchPageTitle,
}

export const useUtils = () => {
    return {
        useEnv,
        useConfig,
        debounce,
        throttle,
        mapObject,
        wait,
        castClassRecord,
        compareDates,
        isValidUrl,
        fetchPageTitle,
    }
}