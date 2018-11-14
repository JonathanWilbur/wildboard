import { SettingSchemata } from "./Settings";
import { DataSource } from "./DataSource";

export
type DataSourceTypeDictionary = { [ name : string ] : DataSourceType };

export
class DataSourceType {
    public readonly name : string; // NOTE: This should match the name in the dictionary, EXACTLY.
    public readonly description : string;
    public readonly settings : SettingSchemata;
    public readonly update : (settings : SettingSchemata) => any;

    constructor (
        name : string,
        description : string,
        settings : SettingSchemata,
        update : (settings : SettingSchemata) => any
    ) {
        this.name = name;
        this.description = description;
        this.settings = settings;
        this.update = update;
    }
}