/**
 * This is a file for aggregating all of your widget types.
 * If you add a new data source type, add it in the dictionary below,
 * and it will be usable.
 */
// import { WidgetType, WidgetTypeDictionary } from "./classes/WidgetType";
import Vue, { VueConstructor } from "vue";
import IndicatorLightComponent from "./widget-types/IndicatorLight.vue";

export
const WIDGET_TYPES : { [ name : string ] : VueConstructor<Vue> } = {
    "IndicatorLight": IndicatorLightComponent
};