import {defineAsyncComponent} from "vue";
import {RouteRecordRaw} from "vue-router";

export enum RouteName {
    List = 'list'
}
export const routes = [
    {
        path: '/',
        component: defineAsyncComponent(() => import('../views/BooksList.vue')),
    },
    {
        path: '/book/:id',
        component: defineAsyncComponent(() => import('../views/BookView.vue')),
        name: 'SingleBook'
    }
] as RouteRecordRaw[]
