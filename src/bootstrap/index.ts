import { RouteRecordRaw } from 'vue-router'
import {IModule} from "./contracts.ts";

export interface BootedApp {
    routes: Readonly<RouteRecordRaw[]>
}

/**
 * **Bootstrapper**
 *
 * Responsible for booting the application with required configuration and setup.
 */
export class Bootstrapper {
    private readonly _modules: IModule[]

    constructor (modules: IModule[]) {
        this._modules = modules
    }

    public boot (): BootedApp {
        let app: BootedApp = {
            routes: []
        }

        for (const module of this._modules) {
            const { routes, boot } = module

            app.routes = [
                ...app.routes,
                ...routes
            ]

            boot()
        }

        return app
    }
}

export const createBootstrapperApp = async (modules: IModule[]): Promise<BootedApp> => {
    return new Promise<BootedApp>(resolve => {
        try {
            const bootstrapper = new Bootstrapper(modules)
            const bootedApp = bootstrapper.boot()

            resolve(bootedApp)
        } catch (e) {
            throw new Error(`Application boot is failed!, Stack: [${e}]`)
        }
    })
}
