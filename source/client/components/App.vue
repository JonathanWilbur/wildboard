<template>
    <div id="app">
        <Sidebar :title="title" />
        <Board />
        <AddDataSourceModal v-if="addDataSourceModalOpen" />
        <AddPaneModal v-if="addPaneModalOpen" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ui from "../stores/ui";
import BoardComponent from "./Board.vue";
import SidebarComponent from "./Sidebar.vue";
import AddDataSourceModalComponent from "./AddDataSourceModal.vue";
import AddPaneModalComponent from "./AddPaneModal.vue";

@Component({
    components: {
        "Sidebar": SidebarComponent,
        "Board": BoardComponent,
        "AddDataSourceModal": AddDataSourceModalComponent,
        "AddPaneModal": AddPaneModalComponent
    }
})
export default class App extends Vue {
    public title: string = "wildboard";

    get addDataSourceModalOpen () : boolean {
        return ui.modals.addDataSource.isOpen;
    }

    get addPaneModalOpen () : boolean {
        return ui.modals.addPane.isOpen;
    }
}
</script>

<style>
#app {
    height: 100%;
    box-sizing: border-box;

    display: flex;
    flex-flow: row nowrap;
    justify-content: left;
    align-items: stretch;
}
</style>