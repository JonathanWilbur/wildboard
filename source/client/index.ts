import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import store from "./stores/root";
import App from "./components/App.vue";

let vueRoot = new Vue({
    el: "#app-container",
    store: store.vuexStore(),
    template: `<App />`,
    components: {
        App
    }
});