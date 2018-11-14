<template>
    <div id="data-sources">
        <table id="data-sources-list">
            <tr class="row data-source">
                <td class="cell table-header data-source-name">Name</td>
                <td class="cell table-header data-source-last-update">Last Updated</td>
            </tr>
            <DataSourcesListItem v-for="(dataSource, dataSourceName) in dataSources()"
                :name="dataSourceName"
                :lastUpdated="dataSource.lastUpdated"
                :key="dataSourceName" />
        </table>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import data from "../stores/data";
import ui from "../stores/ui";
import { DataSource, DataSourceDictionary } from "../classes/DataSource";
import DataSourcesListItemComponent from "./DataSourcesListItem.vue";

@Component({
    components: {
        "DataSourcesListItem": DataSourcesListItemComponent
    }
})
export default class DataSourcesList extends Vue {

    public dataSources () : DataSourceDictionary {
        return data.sources.all;
    }

}
</script>

<style>
#data-sources-list {
    width: 100%;
    background-color: var(--primary);
    padding: 5px;
}
</style>