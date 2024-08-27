<template>
    <h1 style="margin-bottom: 1em; text-align: center; padding: .5em">{{ route.meta.routeTitle ?? route.name }}</h1>
    <div class="split-wrapper">
        <div class="left-wrapper">
            <log-datatable v-model:data="mockApiData" />
        </div>
        <div class="right-wrapper">
            <Textarea v-model="mockApiData" auto-resize :rows="28" style="min-width: 500px" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();

const mockApiData = ref("[13:36:53] Расчетное время: 9 мин[13:36:58] Открыть клапан откачки К1[13:36:58] Включить вакуумный насос[13:36:58] Закрыть клапан К5[13:36:58] Закрыть клапан дистилляции К2[13:36:58] Ожидание: 8 с[13:37:06] Заливка 2.2мл. в испаритель[13:37:06] Заданно 26.50602409638554 шагов[13:37:09] Заливка перекиси завершена[13:37:09] Открыть клапан дистилляции К2[13:42:09] Включить нагрев испарителя[13:42:09] Закрыть клапан дистилляции К2[13:42:09] конечное давление1.0960040758227925 торр[13:42:09] Выпаривание через К2[13:42:09] Выпаривание длилось5 мин[13:42:09] Откачка до 1 торр[13:42:15] Закрыть клапан откачки К1[13:43:09] Открыть клапан откачки К1[13:43:14] Аппаратное смещение 0 денсит. = -0.313683180809021[13:43:14] Закрыть клапан дистилляции К2");
</script>

<style lang="less">
.split-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
    
    @media (max-width: 960px) {
        flex-direction: column;
    }
}
</style>
