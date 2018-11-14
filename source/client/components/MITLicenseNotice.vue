<template>
    <div class="license-notice" v-once>
        <div id="license-short">
            <div id="copyright-notice">
                Copyright (c) {{ year }} {{ holder }}
            </div>
            <div id="license-notice">
                Released under an <a href="https://mitlicense.org">MIT License</a>
            </div>
        </div>
        <div id="license-full">
            <h1 id="license-title">The MIT License</h1>
            <p class="copyright-notice">
                Copyright (c) {{ year }} {{ holder }}
            </p>
            <p>
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
            </p>
            <p>
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
            </p>
            <p>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class MITLicenseNoticeComponent extends Vue {
    @Prop() holder!: string;
    @Prop() year!: number;
}
</script>

<style>
#license-title {
    font-size: 12pt;
}
#license-full {
    display: none;
}
</style>