<!-- TODO: Add alt tags, email, GPG key, TLS cert, GitHub, and LinkedIn -->
<template>
    <span class="author" v-once>
        <a :href="websiteURI">
            <span class="first-name">{{ firstName }}</span>
            <span class="middle-name">{{ (middleName && middleName.length > 0) ? middleName.charAt(0).toUpperCase() + "." : "" }}</span>
            <span class="last-name">{{ lastName }}</span>
        </a>
    </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class AuthorComponent extends Vue {
    @Prop() firstName!: string;
    @Prop() middleName!: string;
    @Prop() lastName!: string;
    @Prop() emailAddress!: string;
    @Prop() websiteURI!: string;
    @Prop() gpgKeyURI!: string;
    @Prop() tlsCertificateURI!: string;
    @Prop() linkedInURI!: string;
    @Prop() twitterHandle!: string;
    @Prop() githubProfile!: string;
}
</script>

<style>
</style>