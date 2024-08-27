<template>
    <div class="container-fixed">
        <global-navigation />
    </div>
    <container style="flex-grow: 1">
        <router-view/>
    </container>
    <container class="container-footer">
        <footer>
            <h4>
                <a class="external-link" href="https://volgograd.hh.ru/resume/24c3cea3ff08fad4860039ed1f4457504a384f" target="_blank">
                    Юрий Руссу
                </a>
            </h4>
            <divider layout="vertical" />
            <h4>
                <a class="external-link" href="https://volgograd.hh.ru/vacancy/106009523" target="_blank">
                    Head Hunter
                </a>
            </h4>
            <divider layout="vertical" />
            <h4>
                <a class="external-link" href="https://github.com/Lethme/etcons-test-app" target="_blank">
                    GitHub
                </a>
            </h4>
        </footer>
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

.container-footer footer {
    display: flex;
    flex-direction: row;
    
    padding: 1em;
}
</style>
