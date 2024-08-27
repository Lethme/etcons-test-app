<template>
    <div :class="inputTimeWrapperClass">
        <DatePicker
            :modelValue="props.modelValue"
            @update:modelValue="emit('update:modelValue', $event)"
            time-only
            hour-format="24"
            show-button-bar
            show-icon
            placeholder="Select Time"
        />
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import DatePicker from "primevue/datepicker";

interface PropsType {
    modelValue?: Date;
}

const inputTimeWrapperClass = computed(() => ({
    "input-time-wrapper": true,
}));

const props = withDefaults(defineProps<PropsType>(), {
    modelValue: undefined,
});

const emit = defineEmits(['update:modelValue']);
</script>

<style scoped lang="less">
.input-time-wrapper {
    display: flex;
    justify-content: center;
    
    max-width: 400px;
    width: 100%;
    
    .p-datepicker {
        width: 100%;
        
        @media (max-width: 960px) {
            width: 90%;
        }
    }
}
</style>