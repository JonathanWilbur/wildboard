import { DataSourceType } from "../classes/DataSourceType";
export var TestDataSourceType = new DataSourceType("Test", "A data source for testing purposes, which alternates between true and false every second.", {
    "Modulus": {
        defaultValue: 2,
        description: "The number of seconds between false.",
        required: true,
        minlength: 1,
        maxlength: 5,
        regex: new RegExp("\\d+"),
        validator: function () {
            return true;
        }
    }
}, function (settings) {
    if (typeof settings["Modulus"] === "number") {
        return Boolean((new Date()).getSeconds() % Number(settings["Modulus"]));
    }
    else {
        throw new Error("Invalid data type for Test.Modulus!");
    }
});
//# sourceMappingURL=Test.js.map