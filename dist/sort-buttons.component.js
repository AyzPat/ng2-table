"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var sort_buttons_state_service_1 = require("./sort-buttons-state.service");
var SortButtonsComponent = (function () {
    function SortButtonsComponent() {
        this.ascendingOrder = new core_1.EventEmitter();
        this.descendingOrder = new core_1.EventEmitter();
        this.state = new sort_buttons_state_service_1.SortButtonsState(false, false, true);
    }
    SortButtonsComponent.prototype.sortAscClicked = function () {
        this.ascendingOrder.emit(this.sortProperty);
        this.state.changeState(true, false, false);
    };
    SortButtonsComponent.prototype.sortDescClicked = function () {
        this.descendingOrder.emit(this.sortProperty);
        this.state.changeState(false, true, false);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SortButtonsComponent.prototype, "sortProperty", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SortButtonsComponent.prototype, "ascendingOrder", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SortButtonsComponent.prototype, "descendingOrder", void 0);
    SortButtonsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sort-buttons',
            template: "\n        <a *ngIf=\"state.asc\" (click)=\"sortDescClicked()\" [class.inactive-sort]=\"state.inactive\">\n             <span class=\"glyphicon glyphicon-sort-by-attributes\"></span>\n        </a>\n        <a *ngIf=\"!state.asc\" (click)=\"sortAscClicked()\" [class.inactive-sort]=\"state.inactive\">\n            <span class=\"glyphicon glyphicon-sort-by-attributes-alt\"></span>\n        </a>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SortButtonsComponent);
    return SortButtonsComponent;
}());
exports.SortButtonsComponent = SortButtonsComponent;
//# sourceMappingURL=sort-buttons.component.js.map