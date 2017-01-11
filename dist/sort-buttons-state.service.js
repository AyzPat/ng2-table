"use strict";
var SortButtonsState = (function () {
    function SortButtonsState(asc, desc, inactive) {
        this.asc = asc;
        this.desc = desc;
        this.inactive = inactive;
    }
    SortButtonsState.prototype.changeState = function (asc, desc, inactive) {
        this.asc = asc;
        this.desc = desc;
        this.inactive = inactive;
    };
    return SortButtonsState;
}());
exports.SortButtonsState = SortButtonsState;
//# sourceMappingURL=sort-buttons-state.service.js.map