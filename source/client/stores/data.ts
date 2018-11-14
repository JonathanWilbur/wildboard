import Vue from "vue";
import Vuex, { Store } from "vuex";
import { getStoreBuilder } from "vuex-typex";
import store, { RootStore } from "./root";
import { DataSourceType, DataSourceTypeDictionary } from "../classes/DataSourceType";
import { DataSource, DataSourceDictionary } from "../classes/DataSource";
import { DATA_SOURCE_TYPES } from "../DataSourceTypes";

export interface DataStore {
    types : DataSourceTypeDictionary;
    sources : DataSourceDictionary;
}

const dataModuleBuilder = store.module("data", {
    types: DATA_SOURCE_TYPES,
    sources: <DataSourceDictionary>{}
});

/**
 * Data Source Types
 */

const dataSourceTypeAllGetter = dataModuleBuilder.read(
    state => { return state.types; },
    "dataSourceTypeAllGetter"
);

const dataSourceTypeNamesGetter = dataModuleBuilder.read(
    state => { return Object.keys(state.types); },
    "dataSourceTypeNamesGetter"
);

const dataSourceTypeByNameGetter = dataModuleBuilder.read(
    state => (name : string) => state.types[name],
    "dataSourceTypeByNameGetter"
);

const types = {

    get all () : DataSourceTypeDictionary {
        return dataSourceTypeAllGetter();
    },

    get names () : string[] {
        return dataSourceTypeNamesGetter();
    },

    getByName (name : string) : DataSourceType {
        return dataSourceTypeByNameGetter()(name);
    }

};

/**
 * Data Sources
 */

const dataSourceAllGetter = dataModuleBuilder.read(
    state => { return state.sources; },
    "dataSourceAllGetter"
);

const dataSourceNamesGetter = dataModuleBuilder.read(
    state => Object.keys(state.sources),
    "dataSourceNamesGetter"
);

const dataSourceByNameGetter = dataModuleBuilder.read(
    state => (name : string) => state.sources[name],
    "dataSourceByNameGetter"
);

const dataSourceCurrentValueByNameGetter = dataModuleBuilder.read(
    state => (name : string) => state.sources[name].currentValue,
    "dataSourceCurrentValueByNameGetter"
);

const dataSourceAdder = (state : DataStore, payload : { name : string, source : DataSource }) => {
    // TODO: Throw exception if name is already taken.
    Vue.set(state.sources, payload.name, payload.source);
};

const sources = {

    get all () : DataSourceDictionary {
        return dataSourceAllGetter();
    },

    get names () : string[] {
        return dataSourceNamesGetter();
    },

    getByName (name : string) : DataSource {
        return dataSourceByNameGetter()(name);
    },

    getCurrentValueByName (name : string) : any {
        return dataSourceCurrentValueByNameGetter()(name);
    },

    add: dataModuleBuilder.commit(dataSourceAdder)

};

/**
 * The combined module
 */

const data = {
    types: types,
    sources: sources
};
export default data;