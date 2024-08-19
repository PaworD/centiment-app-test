import { routes } from './config/routes.ts'
import {IModule} from "../../bootstrap/contracts.ts";
export const BooksModule: IModule = {
    name: 'Books',
    boot() {
        console.log('Books Module booted!')
    },
    routes
}
