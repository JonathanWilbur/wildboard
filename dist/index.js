import Vue from "vue";
import store from "./stores/root";
import App from "./components/App.vue";
var vueRoot = new Vue({
    el: "#app-container",
    store: store.vuexStore(),
    template: "<App />",
    components: {
        App: App
    }
});
//# sourceMappingURL=index.js.map