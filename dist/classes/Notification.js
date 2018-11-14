export var NotificationType;
(function (NotificationType) {
    NotificationType["INFO"] = "INFO";
    NotificationType["SUCCESS"] = "SUCCESS";
    NotificationType["WARNING"] = "WARNING";
    NotificationType["FAILURE"] = "FAILURE";
})(NotificationType || (NotificationType = {}));
var Notification = /** @class */ (function () {
    function Notification(message, type) {
        if (type === void 0) { type = NotificationType.INFO; }
        this.message = message;
        this.type = type;
    }
    return Notification;
}());
export { Notification };
//# sourceMappingURL=Notification.js.map