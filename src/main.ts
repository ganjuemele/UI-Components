import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
// @ts-ignore
import Mele from './components/Mele.vue'
// @ts-ignore
import Mele2 from './components/Mele2.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes:[
        {
            path: '/', component: Mele //访问根路径，使用Mele组件
        }, {
            path:'/a', component: Mele2 //路径为/a时，使用Mele2组件
        }
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
