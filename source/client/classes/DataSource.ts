import { DataSourceType } from "./DataSourceType";
import { SettingSchemata } from "./Settings";

export
type DataSourceDictionary = { [ dataSourceName : string ] : DataSource };

export
class DataSource {
    public currentValue : any;
    public readonly type! : DataSourceType;
    public readonly updateIntervalInMilliseconds! : number;
    public readonly settings! : SettingSchemata;
    private interval! : number;
    private _lastUpdated! : Date;

    get lastUpdated () : Date {
        return this._lastUpdated;
    }

    constructor (
        type : DataSourceType,
        updateIntervalInMilliseconds : number,
        settings : SettingSchemata,
    ) {
        this.type = type;
        this.updateIntervalInMilliseconds = updateIntervalInMilliseconds;
        this.settings = settings;

        /**
         * This closure is necessary. If you do not have this, update() will be
         * called without an existing `this`.
         */
        this.interval = setInterval(() => {
            this.update();
        }, this.updateIntervalInMilliseconds);

        // Then, we call it immediately as well.
        this.update();
    }

    /**
     * Note: this method should update the timestamp when the data has returned.
     */
    public update () {
        this.currentValue = this.type.update(this.settings);
        console.log(`${this.type.name} has value ${this.currentValue}`);
        this._lastUpdated = new Date();
    }
}