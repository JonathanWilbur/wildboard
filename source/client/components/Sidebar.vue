<template>
    <div id="sidebar" class="column">
        <h1>{{ title }}</h1>
        <div id="sidebar-toolbar">
            <button @click="openAddDataSourceModal">Add Data Source</button>
            <button @click="openAddPaneModal">Add Pane</button>
        </div>
        <DataSourcesList />
        <SidebarInfo />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DataSourcesListComponent from "./DataSourcesList.vue";
import SidebarInfoComponent from "./SidebarInfo.vue";
import ui from "../stores/ui";

@Component({
    components: {
        "DataSourcesList": DataSourcesListComponent,
        "SidebarInfo": SidebarInfoComponent
    }
})
export default class SidebarComponent extends Vue {
    @Prop() title!: string;

    public openAddPaneModal () : void {
        ui.modals.addPane.open();
    }

    public openAddDataSourceModal () : void {
        ui.modals.addDataSource.open();
    }
}
</script>

<style>
.column {
    padding: 10px;
    height: 100%;
}

#sidebar {
    background-color: var(--secondary);
    display: flex;
    flex-flow: column nowrap;
    justify-content: top;
    align-items: stretch;
}
</style>