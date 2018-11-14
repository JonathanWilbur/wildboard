/**
 * This is a file for aggregating all of your data source types.
 * If you add a new data source type, add it in the dictionary below,
 * and it will be usable.
 */
import { DataSourceType, DataSourceTypeDictionary } from "./classes/DataSourceType";
import { TestDataSourceType } from "./data-source-types/Test";

export
const DATA_SOURCE_TYPES : DataSourceTypeDictionary = {
    "Test": TestDataSourceType
};