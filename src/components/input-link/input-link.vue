<template>
    <div :class="linkWrapperClass">
        <div :class="inputWrapperClass">
            <input-text
                ref="inputRef"
                :model-value="props.modelValue"
                @change="modelValueChanged"
                @keypress.enter="modelValueChanged"
                @blur="modelValueChanged"
                placeholder="https://"
                :invalid="modelValueInvalid"
            />
            <a
                class="external-link"
                v-if="!modelValueEditMode && !modelValueInvalid && !!pageTitle"
                :href="props.modelValue"
                target="_blank"
                v-tooltip.top="!modelValueInvalid && pageTitle === 'External Link' ? props.modelValue : pageTitle"
            >
                {{ pageTitle }}
            </a>
        </div>
        <Button @click="modelValueEditClick" v-if="showEditButton" icon="pi pi-pencil" />
    </div>
</template>

<script setup lang="ts">
import {useUtils} from "@/utils";
import {computed, onMounted, ref} from "vue";
import InputText from "primevue/inputtext";

interface PropsType {
    modelValue: string;
}

const props = withDefaults(defineProps<PropsType>(), {
    modelValue: "",
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref<InstanceType<typeof InputText> | null>(null);
const pageTitle = ref<string | undefined>("");
const modelValueEditMode = ref(false);

const { fetchPageTitle, isValidUrl } = useUtils();

const modelValueChanged = async (event: Event) => {
    const el = event.target as HTMLInputElement;
    emit('update:modelValue', el.value);
    
    const title = await fetchPageTitle(el.value);
    
    if (!!el.value && isValidUrl(el.value)) {
        pageTitle.value = title || "External Link";
    }
    
    modelValueEditMode.value = false;
}

const modelValueEditClick = (event: Event) => {
    modelValueEditMode.value = true;
    inputRef.value?.$el.focus();
}

const linkWrapperClass = computed(() => ({
    "input-link-wrapper": true,
    "show-edit-btn": showEditButton.value,
}));

const inputWrapperClass = computed(() => ({
    "input-wrapper": true,
    "edit-mode": modelValueEditMode.value,
}));

const modelValueInvalid = computed(() => {
    return !!props.modelValue && !isValidUrl(props.modelValue);
});

const showEditButton = computed(() => {
    return !modelValueEditMode.value && props.modelValue && isValidUrl(props.modelValue) && pageTitle.value;
});

onMounted(async () => {
    if (props.modelValue && !modelValueInvalid.value) {
        const title = await fetchPageTitle(props.modelValue);
        
        pageTitle.value = title || "External Link";
        modelValueEditMode.value = false;
    }
});
</script>

<style scoped lang="less">
.input-link-wrapper {
    display: flex;
    justify-content: center;
    
    max-width: 400px;
    width: 100%;
    
    .input-wrapper {
        position: relative;
        
        width: 100%;
        overflow: hidden;
        
        input {
            width: 100%;
            
            @media (max-width: 960px) {
                width: 90%;
            }
        }
        
        &.edit-mode {
            .p-inputtext {
                border-radius: var(--p-inputtext-border-radius);
            }
        }
        
        a {
            position: absolute;
            top: 0;
            left: 0;
            line-height: normal;
            
            width: 100%;
            
            z-index: 100;
            
            text-wrap: nowrap;
            
            border-radius:
                var(--p-inputtext-border-radius)
                0
                0
                var(--p-inputtext-border-radius);
            
            font-family: inherit;
            font-size: 1rem;
            background: var(--p-inputtext-background);
            padding: var(--p-inputtext-padding-y) var(--p-inputtext-padding-x);
            border: 1px solid var(--p-inputtext-border-color);
            transition: background var(--p-inputtext-transition-duration),
                        color var(--p-inputtext-transition-duration),
                        border-color var(--p-inputtext-transition-duration),
                        outline-color var(--p-inputtext-transition-duration),
                        box-shadow var(--p-inputtext-transition-duration);
            outline-color: transparent;
            box-shadow: var(--p-inputtext-shadow);
        }
    }
    
    &.show-edit-btn {
        .p-inputtext {
            border-radius:
                var(--p-inputtext-border-radius)
                0
                0
                var(--p-inputtext-border-radius);
        }
        
        .p-button {
            border-radius:
                0
                var(--p-button-border-radius)
                var(--p-button-border-radius)
                0;
        }
    }
}
</style>