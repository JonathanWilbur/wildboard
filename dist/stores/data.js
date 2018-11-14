import Vue from "vue";
import store from "./root";
import { DATA_SOURCE_TYPES } from "../DataSourceTypes";
var dataModuleBuilder = store.module("data", {
    types: DATA_SOURCE_TYPES,
    sources: {}
});
/**
 * Data Source Types
 */
var dataSourceTypeAllGetter = dataModuleBuilder.read(function (state) { return state.types; }, "dataSourceTypeAllGetter");
var dataSourceTypeNamesGetter = dataModuleBuilder.read(function (state) { return Object.keys(state.types); }, "dataSourceTypeNamesGetter");
var dataSourceTypeByNameGetter = dataModuleBuilder.read(function (state) { return function (name) { return state.types[name]; }; }, "dataSourceTypeByNameGetter");
var types = {
    get all() {
        return dataSourceTypeAllGetter();
    },
    get names() {
        return dataSourceTypeNamesGetter();
    },
    getByName: function (name) {
        return dataSourceTypeByNameGetter()(name);
    }
};
/**
 * Data Sources
 */
var dataSourceAllGetter = dataModuleBuilder.read(function (state) { return state.sources; }, "dataSourceAllGetter");
var dataSourceNamesGetter = dataModuleBuilder.read(function (state) { return Object.keys(state.sources); }, "dataSourceNamesGetter");
var dataSourceByNameGetter = dataModuleBuilder.read(function (state) { return function (name) { return state.sources[name]; }; }, "dataSourceByNameGetter");
var dataSourceCurrentValueByNameGetter = dataModuleBuilder.read(function (state) { return function (name) { return state.sources[name].currentValue; }; }, "dataSourceCurrentValueByNameGetter");
var dataSourceAdder = function (state, payload) {
    // TODO: Throw exception if name is already taken.
    Vue.set(state.sources, payload.name, payload.source);
};
var sources = {
    get all() {
        return dataSourceAllGetter();
    },
    get names() {
        return dataSourceNamesGetter();
    },
    getByName: function (name) {
        return dataSourceByNameGetter()(name);
    },
    getCurrentValueByName: function (name) {
        return dataSourceCurrentValueByNameGetter()(name);
    },
    add: dataModuleBuilder.commit(dataSourceAdder)
};
/**
 * The combined module
 */
var data = {
    types: types,
    sources: sources
};
export default data;
//# sourceMappingURL=data.js.map