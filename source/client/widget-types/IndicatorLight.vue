<template>
    <div class="widget">
        <div class="indicator-light" :class="{ on: on() }"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Widget from "../interfaces/Widget";
import data from "../stores/data";

@Component({})
export default class IndicatorLightComponent extends Vue implements Widget {
    @Prop() public readonly title! : string;
    @Prop() public readonly widgetType! : string;
    // private on : boolean = eval(expression);
    public expression : string = "data.sources.getByName('Test').currentValue"; // datasources["Test"].isOperational

    private on () : boolean {
        // let data = data;
        let dataSource = data.sources.getByName('Test');
        return Boolean(eval("dataSource.currentValue"));
        // return data.sources.getByName('Test').currentValue;
    }
}
</script>

<style>
.indicator-light {
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
}

.indicator-light.on {
    background-color: var(--accent) !important;
    box-shadow: 0px 0px 3px 3px var(--accent) !important;
}
</style>