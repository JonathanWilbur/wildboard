<template>
    <div class="modal-veil">
        <div id="add-widget-modal">
            <button @click="close">Close</button>
            <div id="select-widget-type">
                <select v-model="selectedDataSourceType">
                    <option v-for="(dataSourceType, dataSourceTypeName) in dataSourceTypes()"
                        :value="dataSourceType">
                        {{ dataSourceTypeName }}
                    </option>
                </select>
            </div>
            <div id="widget-settings">
                <div>
                    <label for="widget-name">Widget Name</label>
                    <input v-model="name"
                        type="text"
                        id="widget-name"
                        name="widget-name"
                        minlength="1"
                        maxlength="128"
                        required />
                </div>
                <div>
                    <label for="update-interval">Update Interval (Milliseconds)</label>
                    <input v-model="updateIntervalInMilliseconds"
                        type="number"
                        id="update-interval"
                        name="update-interval"
                        min="0"
                        max="86400000"
                        required />
                </div>
                <div v-for="(setting, settingName) in selectedDataSourceType.settings">
                    <label>{{settingName}}</label>
                    <input v-if="typeof setting.defaultValue === 'boolean'"
                        type="checkbox"
                        v-model.boolean="settings[settingName]" />
                    <input v-if="typeof setting.defaultValue === 'number'"
                        type="number"
                        v-model.number="settings[settingName]"
                        :required="selectedDataSourceType.settings.required"
                        :min="selectedDataSourceType.settings.min"
                        :max="selectedDataSourceType.settings.max" />
                    <input v-if="typeof setting.defaultValue === 'string' && !setting.choices"
                        type="text"
                        v-model="settings[settingName]"
                        :required="selectedDataSourceType.settings.required"
                        :minlength="selectedDataSourceType.settings.minlength"
                        :maxlength="selectedDataSourceType.settings.maxlength"
                        :pattern="selectedDataSourceType.settings.pattern" />
                    <!-- input v-if="typeof setting.defaultValue === 'string' && setting.choices"
                        type="radio"
                        v-model="settings[settingName]"
                        :required="selectedDataSourceType.settings.required" /-->
                </div>
            </div>
            <button @click="addWidget">Add Widget</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Emit, Prop, Watch } from "vue-property-decorator";
import ui from "../stores/ui";
import data from "../stores/data";
import { DataSource } from "../classes/DataSource";
import { SettingSchemata } from "../classes/Settings";
import { DataSourceType, DataSourceTypeDictionary } from "../classes/DataSourceType";
import { DATA_SOURCE_TYPES } from "../DataSourceTypes";

@Component({})
export default class AddDataSourceModalComponent extends Vue {

    public name : string = "";
    public updateIntervalInMilliseconds : number = 3000;
    public settings : { [ name : string ] : any } = {};
    private selectedDataSourceType : DataSourceType = DATA_SOURCE_TYPES[Object.keys(DATA_SOURCE_TYPES)[0]];

    public addDataSource () : void {
        data.sources.add({
            name: this.name,
            source: new DataSource(data.types.getByName("Test"), this.updateIntervalInMilliseconds, this.settings)
        });
        this.close();
    }

    public close () : void {
        ui.modals.addDataSource.close();
    }

    public dataSourceTypes () : DataSourceTypeDictionary {
        return data.types.all;
    }

    @Watch("selectedDataSourceType")
    generateSettingsForm (currentType : DataSourceType) : void {
        this.settings = {};
        if (this.selectedDataSourceType == undefined) return;
        let defaultSettings : SettingSchemata = this.selectedDataSourceType.settings;
        for (let key in defaultSettings) {
            if (!defaultSettings.hasOwnProperty(key)) continue;
            this.settings[key] = defaultSettings[key].defaultValue;
        }
    }

    public created () {
        this.generateSettingsForm(this.selectedDataSourceType);
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

#add-widget-modal {
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