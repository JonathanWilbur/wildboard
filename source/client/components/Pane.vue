<template>
    <div class="pane">
        <div class="pane-header-space">
            <h1 class="pane-header">
                {{ title }}
            </h1>
            <!--button @click="">Add Widget</button-->
        </div>
        <div class="pane-widget-space">
            <component :is="widgetType" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WIDGET_TYPES } from "../WidgetTypes";
import data from "../stores/data";

@Component({
    components: WIDGET_TYPES
})
export default class PaneComponent extends Vue {
    @Prop() public readonly title! : string;
    @Prop() public readonly widgetType! : string;
}
</script>

<style>
.pane {
    width: 200px;
}

.pane-header-space {
    background-color: #333333;
    width: 100%;
}

.pane-header {
    font-size: 10pt;
}

.pane-widget-space {
    background-color: var(--secondary);
    width: 100%;
    min-height: 100px;
}
</style>