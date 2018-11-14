import { SettingSchemata } from "./Settings";

// REVIEW: Is any of this used at all?

export
type WidgetTypeDictionary = { [ name : string ] : WidgetType };

export
class WidgetType {
    public readonly name : string; // NOTE: This should match the name in the dictionary, EXACTLY.
    public readonly description : string;
    public readonly settings : SettingSchemata;

    constructor (
        name : string,
        description : string,
        settings : SettingSchemata,
    ) {
        this.name = name;
        this.description = description;
        this.settings = settings;
    }
}