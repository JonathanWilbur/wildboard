import Vue from "vue";
import Vuex, { Store } from "vuex";
import { getStoreBuilder } from "vuex-typex";
import { Notification } from "../classes/Notification";
import store from "./root";

export interface UserInterfaceStore {
    modals : {
        addDataStore : {
            open : boolean;
        },
        addPane : {
            open : boolean;
        }
    };
    notifications : Notification[];
    editing : boolean;
}

const userInterfaceModuleBuilder = store.module("ui", {
    modals: {
        addDataStore: {
            open: false
        },
        addPane: {
            open: false
        }
    },
    notifications: [],
    editing: true
});

/**
 * Modals
 */

// The Add Data Source modal
const addDataSourceModalOpenGetter = userInterfaceModuleBuilder.read(
    state => state.modals.addDataStore.open,
    "addDataSourceModalOpen");

const openAddDataSourceModal = (state : UserInterfaceStore) => { state.modals.addDataStore.open = true; };
const closeAddDataSourceModal = (state : UserInterfaceStore) => { state.modals.addDataStore.open = false; };

// The Add Pane Modal
const addPaneModalOpenGetter = userInterfaceModuleBuilder.read(
    state => state.modals.addPane.open,
    "addPaneModalOpenGetter");

const openAddPaneModal = (state : UserInterfaceStore) => { state.modals.addPane.open = true; };
const closeAddPaneModal = (state : UserInterfaceStore) => { state.modals.addPane.open = false; };

export const modals = {

    addDataSource: {
        get isOpen() : boolean {
            return addDataSourceModalOpenGetter();
        },
        open: userInterfaceModuleBuilder.commit(openAddDataSourceModal),
        close: userInterfaceModuleBuilder.commit(closeAddDataSourceModal)
    },
    addPane: {
        get isOpen() : boolean {
            return addPaneModalOpenGetter();
        },
        open: userInterfaceModuleBuilder.commit(openAddPaneModal),
        close: userInterfaceModuleBuilder.commit(closeAddPaneModal)
    }

};

/**
 * UI
 */

const editingGetter = userInterfaceModuleBuilder.read(
    state => state.editing,
    "editingGetter");

const editingEnabler = (state : UserInterfaceStore) => { state.editing = true; };
const editingDisabler = (state : UserInterfaceStore) => { state.editing = false; };
const editingToggler = (state : UserInterfaceStore) => { state.editing = !state.editing; };

const ui = {
    modals: modals,
    // notifications: [],
    get editing () : boolean { return editingGetter(); },
    enableEditing () : void { userInterfaceModuleBuilder.commit(editingEnabler); },
    disableEditing () : void { userInterfaceModuleBuilder.commit(editingDisabler); },
    toggleEditing () : void { userInterfaceModuleBuilder.commit(editingToggler); }

};
export default ui;