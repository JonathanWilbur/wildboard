import Vue from "vue";
import Vuex, { Store } from "vuex";
import { getStoreBuilder } from "vuex-typex";
import store from "./root";
import Pane from "../classes/Pane";

export interface PaneStore {
    panes : Pane[];
}

const panesModuleBuilder = store.module("panes", {
    panes: []
});

const allPanesGetter = panesModuleBuilder.read(
    state => state.panes,
    "allPanesGetter");

const paneAdder = (state : PaneStore, payload: { title : string, widgetType : string }) => {
    state.panes.push(new Pane(payload.title, payload.widgetType));
};

const panes = {

    get all() : Pane[] {
        return allPanesGetter();
    },

    add: panesModuleBuilder.commit(paneAdder)

};
export default panes;