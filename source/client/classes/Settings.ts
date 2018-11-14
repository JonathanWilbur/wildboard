export type SettingSchemata = { [name : string] : SettingSchema };

export
class SettingSchema {
    public readonly defaultValue : any;
    public readonly description : string;
    public readonly required : boolean;
    public readonly min? : number; // For number
    public readonly max? : number; // For number
    public readonly minlength? : number; // For text
    public readonly maxlength? : number; // For text
    public readonly regex? : RegExp; // For text
    public readonly choices? : string[]; // For radio
    public readonly validator? : () => boolean; // For any

    constructor(
        defaultValue : string,
        description : string,
        required : boolean,
        min? : number,
        max? : number,
        minlength? : number,
        maxlength? : number,
        regex? : RegExp,
        choices? : string[],
        validator? : () => boolean
    ) {
        this.defaultValue = defaultValue;
        this.description = description || "No description available.";
        this.required = false;
        this.min = min || 0;
        this.max = max || 1_000_000_000;
        this.minlength = minlength || 0;
        this.maxlength = maxlength || 256;
        this.regex = regex || new RegExp(".*");
        this.choices = choices || [];
        this.validator = validator || function () : boolean { return true; };
    }

}