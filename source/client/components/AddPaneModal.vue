<template>
    <div class="modal-veil">
        <div id="add-pane-modal">
            <button @click="close">Close</button>
            <div>
                <label for="pane-title">Pane Title</label>
                <input v-model="title"
                    type="text"
                    id="pane-title"
                    name="pane-title"
                    minlength="1"
                    maxlength="128"
                    required />
            </div>
            <div>
                <!-- TODO: Change this to a dropdown -->
                <label for="pane-widget-type">Widget Type</label>
                <input v-model="widgetType"
                    type="text"
                    id="pane-widget-type"
                    name="pane-widget-type"
                    minlength="1"
                    maxlength="128"
                    required />
            </div>
            <button @click="addPane(title, widgetType)">Add Pane</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Emit, Prop, Watch } from "vue-property-decorator";
import panes from "../stores/panes";
import ui from "../stores/ui";

@Component({})
export default class AddPaneModalComponent extends Vue {

    public title : string = "";
    public widgetType : string = "";

    public addPane (title : string, widgetType : string) : void {

        panes.add({
            title: title,
            widgetType: widgetType
        });
        this.close();
    }

    public close () : void {
        ui.modals.addPane.close();
    }

}
</script>

<style>
.modal-veil {
    z-index: 100; /* TODO: Make this a --veil-z variable */
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 255, 0, 0.5);
    position: fixed;
    top: 0px;
    left: 0px;
}

#add-pane-modal {
    width: 60vw;
    height: 80vh;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101; /* TODO: Make this a --modal-z variable */
    background-color: #222222; /* TODO: Use a variable */
}
</style>