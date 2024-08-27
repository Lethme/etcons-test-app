<template>
    <h1 style="margin-bottom: 1em">{{ route.meta.routeTitle ?? route.name }}</h1>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<style lang="less">

</style>
