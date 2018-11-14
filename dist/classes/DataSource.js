var DataSource = /** @class */ (function () {
    function DataSource(type, updateIntervalInMilliseconds, settings) {
        var _this = this;
        this.type = type;
        this.updateIntervalInMilliseconds = updateIntervalInMilliseconds;
        this.settings = settings;
        /**
         * This closure is necessary. If you do not have this, update() will be
         * called without an existing `this`.
         */
        this.interval = setInterval(function () {
            _this.update();
        }, this.updateIntervalInMilliseconds);
        // Then, we call it immediately as well.
        this.update();
    }
    Object.defineProperty(DataSource.prototype, "lastUpdated", {
        get: function () {
            return this._lastUpdated;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Note: this method should update the timestamp when the data has returned.
     */
    DataSource.prototype.update = function () {
        this.currentValue = this.type.update(this.settings);
        console.log(this.type.name + " has value " + this.currentValue);
        this._lastUpdated = new Date();
    };
    return DataSource;
}());
export { DataSource };
//# sourceMappingURL=DataSource.js.map