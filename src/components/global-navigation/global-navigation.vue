<template>
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
</template>

<script setup lang="ts">
import {useGlobalNavigation} from "@/utils/hooks";
import {computed} from "vue";

import type {MenuItem} from "primevue/menuitem";

const { routes, route } = useGlobalNavigation();

const menuItems = computed<Array<MenuItem>>(() => {
    return routes.value.map(route => ({
        label: route.meta.routeTitle ?? route.meta.routeTitleFull ?? route.name,
        icon: route.meta.routeIconClass ? `pi ${route.meta.routeIconClass}` : undefined,
        route: route.path,
        name: route.name,
        noGap: !(route.meta.routeIconClass && route.meta.routeTitle),
    }) as MenuItem);
});
</script>

<style scoped lang="less">
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
</style>