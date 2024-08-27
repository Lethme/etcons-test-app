<template>
    <h1 style="margin-bottom: 1em; text-align: center; padding: .5em">{{ route.meta.routeTitle ?? route.name }}</h1>
    <h4 v-if="time">Значение переменной директивы v-model: {{ timeFormatted }}</h4>
    <h4 v-else>Время не выбрано</h4>
    <input-time v-model="time" />
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed, ref} from "vue";
import moment from "moment";

const route = useRoute();

const time = ref<Date | undefined>(new Date());
const timeFormatted = computed(() => {
    if (time.value) {
        return moment(time.value).format("HH:mm");
    }
    
    return undefined;
});
</script>

<style lang="less">

</style>
