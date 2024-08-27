<template>
    <div class="datatable-extended-wrapper">
        <DataTable
            :value="props.value"
            :data-key="props.dataKey"
            sort-mode="multiple"
            :removable-sort="true"
            :global-filter-fields="globalFilterFields"
            v-model:filters="filters"
        >
            <template #header>
                <container class="datatable-extended-header">
                    <container class="datatable-extended-search-wrapper">
                        <input-group>
                            <Button icon="pi pi-sliders-v" severity="success" aria-label="Filter" @click="filterSearchMultiselectClick" style="position: relative">
                                <MultiSelect
                                    ref="filterSearchMultiselectRef"
                                    class="datatable-extended-filter-columns-select"
                                    placeholder="Поля Таблицы"
                                    :options="columnsToRender"
                                    :option-label="(column) => column.header"
                                    v-model="columnsToSearch"
                                />
                                <i class="pi pi-sliders-v"></i>
                            </Button>
                            <input-text
                                placeholder="Поиск..."
                                :model-value="shadowFilterSearchInputModel"
                                @keypress.enter="filterSearchInputTextModelUpdate"
                                @input="shadowFilterSearchInputModel = ($event.target as HTMLInputElement)?.value"
                            />
                            <Button
                                v-if="shadowFilterSearchInputModel"
                                icon="pi pi-times"
                                severity="danger"
                                aria-label="Reset"
                                @click="clearFilterSearchInputTextModel"
                            />
                            <Button label="Search" severity="primary" @click="filterSearchInputTextModelUpdate" />
                        </input-group>
                    </container>
                    <container class="datatable-extended-columns-filter-wrapper">
                        <input-multiselect
                            placeholder="Поля Таблицы"
                            :options="props.columns"
                            :option-label="(column) => column.header"
                            :model-value="props.selectedColumns"
                            @update:model-value="emit('update:selectedColumns', $event)"
                        />
                    </container>
                </container>
            </template>
            
            <template #empty>
                <p>Данные не найдены</p>
            </template>
            
            <Column v-for="col of columnsToRender" :key="col.field" :field="col.field" :header="col.header" :sortable="!!col.sortable" />
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import MultiSelect from "primevue/multiselect";
import { FilterMatchMode } from "@primevue/core/api";
import InputText from "primevue/inputtext";

export interface Column {
    field: string;
    header: string;
    sortable?: boolean;
}

interface PropsType {
    value: Array<any>;
    dataKey: any | ((item: any) => any);
    columns: Array<Column>;
    selectedColumns: Array<Column>;
}

const props = defineProps<PropsType>();

const emit = defineEmits([
    'update:selectedColumns',
]);

const filterSearchMultiselectRef = ref<InstanceType<typeof MultiSelect> | null>(null);
const columnsToRender = computed(() => props.selectedColumns.length > 0 ? props.selectedColumns : props.columns);
const columnsToSearch = ref<Array<Column>>([]);

const filterSearchMultiselectClick = (event: Event) => {
    filterSearchMultiselectRef.value?.show();
}

const shadowFilterSearchInputModel = ref("");

const filters = reactive({
    global: { value: shadowFilterSearchInputModel.value, matchMode: FilterMatchMode.CONTAINS },
});

const globalFilterFields = computed(() => {
    const columns = columnsToSearch.value.length > 0 ? columnsToSearch.value : columnsToRender.value;
    const actualSearchColumns = columns.filter(cs => columnsToRender.value.some(cr => cr.field === cs.field));
    
    return actualSearchColumns.map(column => column.field);
});

const filterSearchInputTextModelUpdate = () => {
    filters.global.value = shadowFilterSearchInputModel.value;
}

const clearFilterSearchInputTextModel = async () => {
    shadowFilterSearchInputModel.value = "";
}
</script>

<style scoped lang="less">
.datatable-extended-wrapper {
    display: flex;
    justify-content: center;
    
    max-width: 1200px;
    width: 100%;
    
    .p-datatable {
        width: 100%;
        
        @media (max-width: 960px) {
            width: 90%;
        }
    }
    
    .datatable-extended-header {
        flex-direction: row;
        gap: 1em;
        
        .datatable-extended-search-wrapper {
            width: 80%;
            
            .p-button {
                position: relative;
                overflow: hidden;
                
                .p-multiselect {
                    position: absolute;
                    top: 0;
                    left: 0;
                    opacity: 0;
                }
            }
        }
        
        .datatable-extended-columns-filter-wrapper {
            width: 20%;
        }
    }
}
</style>