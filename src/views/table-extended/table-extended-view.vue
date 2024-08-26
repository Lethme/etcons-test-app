<template>
    <h1>{{ route.meta.routeTitle ?? route.name }}</h1>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="less">

</style>
