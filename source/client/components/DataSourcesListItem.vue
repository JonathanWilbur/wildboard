<template>
    <tr class="data-source">
        <td class="data-source-name">{{ name }}</td>
        <td class="data-source-last-update">{{ lastUpdated.toLocaleTimeString() }}</td>
    </tr>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SettingSchemata } from "../classes/Settings";

@Component
export default class DataSourcesListItemComponent extends Vue {
    public currentValue : any;
    @Prop() public readonly name! : string;
    @Prop() public readonly lastUpdated! : Date;
}
</script>

<style>
</style>