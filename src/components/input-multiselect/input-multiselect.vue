<template>
    <div class="input-multiselect-wrapper">
        <MultiSelect
            :model-value="props.modelValue"
            @update:modelValue="emit('update:modelValue', $event)"
            :options="props.options"
            :optionLabel="props.optionLabel"
            filter
            :placeholder="props.placeholder"
            :maxSelectedLabels="props.maxSelectedLabels"
        >
            <template #dropdownicon>
                <Button
                    v-if="props.modelValue && props.modelValue.length > 0"
                    @click="resetMultiselectClick"
                    icon="pi pi-times"
                    severity="danger"
                    text
                    aria-label="Reset"
                />
            </template>
        </MultiSelect>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

interface PropsType<TOption extends Record<string, any> = Record<string, any>> {
    options: Array<TOption>;
    modelValue: Array<TOption>;
    optionLabel?: keyof TOption;
    placeholder?: string;
    maxSelectedLabels?: number;
}

const props = withDefaults(defineProps<PropsType>(), {
    options: [] as any,
    modelValue: [] as any,
});

const emit = defineEmits(["update:modelValue"]);

const multiSelectWrapperClass = computed(() => ({
    "input-multiselect-wrapper": true,
}));

const resetMultiselectClick = (event: Event) => {
    event.stopPropagation();
    
    emit('update:modelValue', []);
}
</script>

<style scoped lang="less">
.input-multiselect-wrapper {
    display: flex;
    justify-content: center;
    
    max-width: 400px;
    width: 100%;
    
    .p-multiselect {
        width: 100%;
        
        @media (max-width: 960px) {
            width: 90%;
        }
    }
}
</style>