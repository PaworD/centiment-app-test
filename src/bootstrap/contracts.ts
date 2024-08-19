import {RouteRecordRaw} from "vue-router";

export interface IModule {
    name: string
    boot (): void
    routes: RouteRecordRaw[]
}


export type AnyObject = { [key: string]: any }
