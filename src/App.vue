<template>
    <div class="container-fixed">
        <global-navigation />
    </div>
    <container style="flex-grow: 1">
        <router-view/>
    </container>
    <container class="container-footer">
        <Footer />
    </container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container-fixed {
    display: flex;
    justify-content: center;
    
    position: fixed;
    top: 1em;
    z-index: 10000;
    
    width: 100%;
}
</style>
