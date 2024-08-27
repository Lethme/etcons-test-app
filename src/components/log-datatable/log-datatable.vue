<template>
    <div class="log-datatable-wrapper">
        <DataTable :value="logEntriesFormatted" :data-key="(item) => item">
            <Column header="Log">
                <template #body="{ data }">
                    <div
                        v-html="data"
                        class="log-data-wrapper"
                    />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import {computed} from "vue";

interface PropsType {
    data?: string;
}

const props = defineProps<PropsType>();

const emit = defineEmits(["update:data"]);

const logParseRegexGlobal = /\[(\d{2}:\d{2}:\d{2})\] ([^\[]+)/g;
const logParseRegex = /\[(\d{2}:\d{2}:\d{2})\] ([^\[]+)/;

const logEntries = computed(() => {
    if (props.data) {
        const entries = props.data.match(logParseRegexGlobal);
        
        if (entries) {
            return entries.map(entry => {
                const match = entry.match(logParseRegex);
                
                if (match) {
                    return {
                        time: match[1],
                        record: match[2],
                    }
                }
                
                return null;
            }).filter(record => record !== null);
        }
    }
    
    return [];
});

const logEntriesFormatted = computed(() => {
    return [
        logEntries.value
            .map(entry => `<p>[${entry.time}] ${entry.record}</p>`)
            .join('')
    ];
});
</script>

<style scoped lang="less">
.log-datatable-wrapper {
    display: flex;
    justify-content: center;
    
    max-width: 900px;
    width: 100%;
    
    .p-datatable {
        min-width: 500px;
        width: 100%;
        
        @media (max-width: 960px) {
            width: 90%;
        }
    }
}
</style>