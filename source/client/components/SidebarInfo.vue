<!-- Use this for the sake of efficiency. -->
<!-- https://vuejs.org/v2/guide/components-edge-cases.html#Cheap-Static-Components-with-v-once -->

<template>
    <div id="sidebar-info" class="column" v-once>
        <div id="authors">
            <span>By </span>
            <Author
                firstName="Jonathan"
                middleName="Michael"
                lastName="Wilbur"
                websiteURI="https://jonathan.wilbur.space" />
        </div>
        <MITLicenseNotice :year="2018" holder="Jonathan M. Wilbur" />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AuthorComponent from "./Author.vue";
import MITLicenseNoticeComponent from "./MITLicenseNotice.vue";

@Component({
    components: {
        "Author": AuthorComponent,
        "MITLicenseNotice": MITLicenseNoticeComponent
    }
})
export default class SidebarInfoComponent extends Vue {
    @Prop() title!: string;
}
</script>

<style>
</style>