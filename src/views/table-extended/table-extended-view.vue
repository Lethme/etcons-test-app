<template>
    <h1 style="margin-bottom: 1em; text-align: center; padding: .5em">{{ route.meta.routeTitle ?? route.name }}</h1>
    <datatable-extended
        :value="data"
        :columns="columns"
        v-model:selected-columns="selectedColumns"
        :data-key="(item) => item.code"
    />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";
import type {Column} from "@/components/datatable-extended/datatable-extended.vue";

const route = useRoute();

enum CategoryType {
    Accessories = "Accessories",
    Fitness = "Fitness",
    Clothing = "Clothing",
    Electronics = "Electronics",
}

const columns = ref<Array<Column>>([
    { field: 'code', header: 'Code', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
    { field: 'quantity', header: 'Quantity', sortable: true },
]);

const selectedColumns = ref<Array<Column>>([]);

const data = ref([
    { code: "f230fh0g3", name: "Bamboo Watch", category: CategoryType.Accessories, quantity: 24 },
    { code: "nvklal433", name: "Black Watch", category: CategoryType.Accessories, quantity: 61 },
    { code: "zz21cz3c1", name: "Blue Band", category: CategoryType.Fitness, quantity: 2 },
    { code: "244wgerg2", name: "Blue T-Shirt", category: CategoryType.Clothing, quantity: 25 },
    { code: "h456wer53", name: "Bracelet", category: CategoryType.Accessories, quantity: 73 },
    { code: "x9d2fgh7k", name: "Brown Purse", category: CategoryType.Accessories, quantity: 15 },
    { code: "l3p9tuv6r", name: "Chakra Bracelet", category: CategoryType.Accessories, quantity: 100 },
    { code: "n7m3bcd9x", name: "Galaxy Earrings", category: CategoryType.Accessories, quantity: 57 },
    { code: "a5v4nmk8t", name: "Game Controller", category: CategoryType.Electronics, quantity: 22 },
    { code: "k4n9bgt1v", name: "Gaming Set", category: CategoryType.Electronics, quantity: 4 },
]);
</script>

<style lang="less">

</style>
