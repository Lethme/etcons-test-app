<template>
    <h1 style="margin-bottom: 1em; text-align: center; padding: .5em">{{ route.meta.routeTitleFull ?? route.meta.routeTitle ?? route.name }}</h1>
    <input-multiselect
        v-model="selectedCities"
        :options="cities"
        option-label="name"
        placeholder="Select Cities"
        :max-selected-labels="3"
    />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";
const route = useRoute();

interface City {
    name: string;
    code: string;
}

const selectedCities = ref<Array<City>>([]);
const cities = ref<Array<City>>([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<style lang="less">

</style>
