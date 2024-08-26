<template>
    <div class="container-view">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.container-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 100%;
}
</style>