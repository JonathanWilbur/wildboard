var SettingSchema = /** @class */ (function () {
    function SettingSchema(defaultValue, description, required, min, max, minlength, maxlength, regex, choices, validator) {
        this.defaultValue = defaultValue;
        this.description = description || "No description available.";
        this.required = false;
        this.min = min || 0;
        this.max = max || 1000000000;
        this.minlength = minlength || 0;
        this.maxlength = maxlength || 256;
        this.regex = regex || new RegExp(".*");
        this.choices = choices || [];
        this.validator = validator || function () { return true; };
    }
    return SettingSchema;
}());
export { SettingSchema };
//# sourceMappingURL=Settings.js.map