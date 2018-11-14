export
enum NotificationType {
    INFO = "INFO",
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    FAILURE = "FAILURE"
}

export
class Notification {
    public type : NotificationType;
    public message : string;

    constructor (message : string, type : NotificationType = NotificationType.INFO) {
        this.message = message;
        this.type = type;
    }
}