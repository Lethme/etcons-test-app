import {computed, reactive, ref, type UnwrapNestedRefs, watch} from "vue";

export interface FormOptions<T extends Record<string, any>> {
    onSubmit?: (data: UnwrapNestedRefs<T>, event: SubmitEvent) => void;
}

export const useForm = <T extends Record<string, any>>(formData: T, options?: FormOptions<T>) => {
    const data = reactive<T>(formData);
    const reference = ref<HTMLFormElement | null>(null);
    const filled = computed(() => Object.entries(data).every(([_, value]) => value || typeof value === "boolean"));

    if (options) {
        watch(() => reference.value, (formRef) => {
            if (formRef) {
                if (options.onSubmit) {
                    formRef?.addEventListener("submit", async (event) => {
                        event.preventDefault();
                        await options.onSubmit?.call(null, data, event);
                    });
                }
            }
        });
    }

    return {
        data,
        reference,
        filled,
    }
}