import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.scss'
// import { router } from "./router"

import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import Doc from './views/Doc.vue'
// @ts-ignore
import SwitchDemo from "./components/SwitchDemo.vue"
// @ts-ignore
import ButtonDemo from "./components/ButtonDemo.vue"
// @ts-ignore
import TabsDemo from "./components/TabsDemo.vue"
// @ts-ignore
import DocDemo from "./components/DocDemo.vue"
// @ts-ignore
import DialogDemo from "./components/DialogDemo.vue"

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes:[
        {
            path: '/',
            component: Home //访问根路径，使用Mele组件
        }, {
            path:'/doc',
            component: Doc, //路径为/a时，使用Mele2组件
            children: [
                { path: "", component: DocDemo },
                { path: "switch", component: SwitchDemo },
                { path: "button", component: ButtonDemo },
                { path: "tabs", component: TabsDemo },
                { path: "dialog", component: DialogDemo },
            ],
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
