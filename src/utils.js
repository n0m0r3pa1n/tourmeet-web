import moment from "moment";

moment().locale("bg")

String.prototype.trunc =
    function (n, useWordBoundary) {
        if (this.length <= n) {
            return this;
        }
        var subString = this.substr(0, n - 1);
        return (useWordBoundary
            ? subString.substr(0, subString.lastIndexOf(' '))
            : subString) + "...";
    };

export function formatToDisplayDate(dateString) {
    return moment(dateString).format("dddd, Do MMMM YYYY")
}