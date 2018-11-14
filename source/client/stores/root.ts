import Vue from "vue";
import Vuex, { Store } from "vuex";
import { getStoreBuilder } from "vuex-typex";
import data, { DataStore } from "./data";
import ui, { UserInterfaceStore } from "./ui";

export interface RootStore {
    data : DataStore;
    ui : UserInterfaceStore;
}

Vue.use(Vuex)
const store = getStoreBuilder<RootStore>();
export default store;