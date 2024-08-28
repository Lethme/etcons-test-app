<template>
    <div class="home-view-picture">
        <img src="/logo.svg" />
    </div>
    <div class="home-view-intro">
        <h1 class="home-view-title">FrontEnd developer (Vue.js)</h1>
        <h2 class="home-view-subtitle">
            ООО ЭтКонс&nbsp;-
            <a
                class="external-link"
                href="https://docs.google.com/document/d/1SbkhKTOizJp6UUUoWAa51i9zLFJ1n2Cue--Eu3Zl1I0/edit"
                target="_blank"
            >Тестовое задание</a>
        </h2>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.home-view-intro {
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    margin-top: 2em;
}

.home-view-title {
    font-size: 3rem;
    text-align: center;
    
    @media (max-width: 960px) {
        font-size: 2rem;
    }
}

.home-view-subtitle,
.home-view-suptitle {
    font-size: 2rem;
    font-weight: 200;

    a {
        font-weight: 200;
    }
    
    text-align: center;
    
    @media (max-width: 960px) {
        font-size: 1.5rem;
    }
}

.home-view-picture {
    max-width: 150px;
    min-width: 150px;
    aspect-ratio: 1 / 1;
    
    img {
        width: 100%;
    }
    
    @media (max-width: 960px) {
        min-width: 100px;
    }
}
</style>
