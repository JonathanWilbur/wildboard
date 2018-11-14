import { DataSourceType } from "../classes/DataSourceType";
import { SettingSchemata } from "../classes/Settings";

export
const TestDataSourceType = new DataSourceType(
    "Test",
    "A data source for testing purposes, which alternates between true and false every second.",
    <SettingSchemata>{
        "Modulus" : {
            defaultValue: 2,
            description: "The number of seconds between false.",
            required: true,
            minlength: 1,
            maxlength: 5,
            regex: new RegExp("\\d+"),
            validator: () => {
                return true;
            }
        }
    },
    (settings : SettingSchemata) => {
        if (typeof settings["Modulus"] === "number") {
            return Boolean((new Date()).getSeconds() % Number(settings["Modulus"]));
        } else {
            throw new Error("Invalid data type for Test.Modulus!");
        }
    }
);