export default
class Pane {
    public title! : string;
    public widgetType! : string;
    constructor (name : string, widgetType : string) {
        this.title = name;
        this.widgetType = widgetType;
    }
}