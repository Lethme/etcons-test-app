<template>
    <div class="container-fixed">
        <Menubar :model="menuItems">
            <template #item="{ item, props }">
                <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                    <a v-ripple :href="href" v-bind="props.action" @click="navigate" :class="{ 'no-gap': item.noGap, active: route.name === item.name }">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action" :class="{ 'no-gap': item.noGap, active: route.name === item.name }">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </template>
        </Menubar>
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
import {useGlobalNavigation} from "@/utils/hooks";
import {computed} from "vue";

import type {MenuItem} from "primevue/menuitem";

const { routes, route } = useGlobalNavigation();

const menuItems = computed<Array<MenuItem>>(() => {
    return routes.value.map(route => ({
        label: route.meta.routeTitle ?? route.name,
        icon: route.meta.routeIconClass ? `pi ${route.meta.routeIconClass}` : undefined,
        route: route.path,
        name: route.name,
        noGap: !(route.meta.routeIconClass && route.meta.routeTitle),
    }) as MenuItem);
});
</script>

<style scoped>
.container-fixed {
    display: flex;
    justify-content: center;
    
    position: fixed;
    top: 1em;
    
    width: 100%;
    
    .p-menubar {
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .05);
        
        @media (max-width: 960px) {
            width: 90%;
        }
        
        .p-menubar-item-link {
            &.no-gap {
                gap: 0;
            }
            
            &.active {
                color: var(--p-primary-500);
            }
        }
    }
}

.container-footer footer {
    display: flex;
    flex-direction: row;
    
    padding: 1em;
}
</style>
