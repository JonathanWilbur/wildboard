<template>
    <div id="board" class="column">
        <!--grid-layout
                :layout="layout"
                :col-num="12"
                :row-height="30"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[10, 10]"
                :use-css-transforms="true">
            <grid-item v-for="pane in panes()"
                :x="200"
                :y="200"
                :w="400"
                :h="200"
                :i="pane.title"
                :key="pane.title">
                <Pane
                    :title="pane.title"
                    :widgetType="pane.widgetType" />
            </grid-item>
        </grid-layout-->

        <Pane v-for="pane in panes()"
            :title="pane.title"
            :widgetType="pane.widgetType"
            :key="pane.title" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import panes from "../stores/panes";
import Pane from "../classes/Pane";
import PaneComponent from "./Pane.vue";
// import VueGridLayout from "../../../node_modules/vue-grid-layout/vue-grid-layout.js";
// import GridLayout from './GridLayout.vue';
// import GridLayout from "../../../node_modules/vue-grid-layout/src/GridLayout.vue";
// import GridItem from "../../../node_modules/vue-grid-layout/src/GridItem.vue";

@Component({
    components: {
        "Pane": PaneComponent,
        // "GridLayout": GridLayout,
        // "GridItem": GridItem
    }
})
export default class BoardComponent extends Vue {

    public panes () : Pane[] {
        return panes.all;
    }

    public readonly layout = [
	    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
	    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
	    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
	    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
	    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
	    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
	    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
	    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
	    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
	    {"x":6,"y":4,"w":2,"h":4,"i":"9"},
	    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
	    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
	    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
	    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
	    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
	    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
	    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
	    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
	    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
	    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
	];

}
</script>

<style>
.column {
    padding: 10px;
    height: 100%;
}

#board {
    flex-grow: 10;
}
</style>