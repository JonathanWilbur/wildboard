import store from "./root";
var userInterfaceModuleBuilder = store.module("ui", {
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
var addDataSourceModalOpenGetter = userInterfaceModuleBuilder.read(function (state) { return state.modals.addDataStore.open; }, "addDataSourceModalOpen");
var openAddDataSourceModal = function (state) { state.modals.addDataStore.open = true; };
var closeAddDataSourceModal = function (state) { state.modals.addDataStore.open = false; };
// The Add Pane Modal
var addPaneModalOpenGetter = userInterfaceModuleBuilder.read(function (state) { return state.modals.addPane.open; }, "addPaneModalOpenGetter");
var openAddPaneModal = function (state) { state.modals.addPane.open = true; };
var closeAddPaneModal = function (state) { state.modals.addPane.open = false; };
export var modals = {
    addDataSource: {
        get isOpen() {
            return addDataSourceModalOpenGetter();
        },
        open: userInterfaceModuleBuilder.commit(openAddDataSourceModal),
        close: userInterfaceModuleBuilder.commit(closeAddDataSourceModal)
    },
    addPane: {
        get isOpen() {
            return addPaneModalOpenGetter();
        },
        open: userInterfaceModuleBuilder.commit(openAddPaneModal),
        close: userInterfaceModuleBuilder.commit(closeAddPaneModal)
    }
};
/**
 * UI
 */
var editingGetter = userInterfaceModuleBuilder.read(function (state) { return state.editing; }, "editingGetter");
var editingEnabler = function (state) { state.editing = true; };
var editingDisabler = function (state) { state.editing = false; };
var editingToggler = function (state) { state.editing = !state.editing; };
var ui = {
    modals: modals,
    // notifications: [],
    get editing() { return editingGetter(); },
    enableEditing: function () { userInterfaceModuleBuilder.commit(editingEnabler); },
    disableEditing: function () { userInterfaceModuleBuilder.commit(editingDisabler); },
    toggleEditing: function () { userInterfaceModuleBuilder.commit(editingToggler); }
};
export default ui;
//# sourceMappingURL=ui.js.map