import store from "./root";
import Pane from "../classes/Pane";
var panesModuleBuilder = store.module("panes", {
    panes: []
});
var allPanesGetter = panesModuleBuilder.read(function (state) { return state.panes; }, "allPanesGetter");
var paneAdder = function (state, title) {
    state.panes.push(new Pane(title));
};
var panes = {
    get all() {
        return allPanesGetter();
    },
    add: panesModuleBuilder.commit(paneAdder)
};
export default panes;
//# sourceMappingURL=panes.js.map