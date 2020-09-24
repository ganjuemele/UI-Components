"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
// @ts-ignore
var App_vue_1 = require("./App.vue");
require("./index.scss");
var router_1 = require("./router");
var app = vue_1.createApp(App_vue_1.default);
app.use(router_1.router);
app.mount('#app');
