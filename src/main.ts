import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createBootstrapperApp} from "./bootstrap";
import {createRouter, createWebHistory} from "vue-router";
import {modules} from "./bootstrap/modules.ts";

createBootstrapperApp(modules).then(({ routes }) => {
    const router = createRouter({
        history: createWebHistory(),
        routes: routes,
    })

    const app = createApp(App)

    app.use(router)
    app.mount('#app')
}).catch((e) => console.log(e))
