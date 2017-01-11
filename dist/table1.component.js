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
//import {QueryList} from "@angular/core/src/linker/query_list";
var data_1 = require("./data");
var sorting_service_1 = require("./sorting.service");
var sort_buttons_component_1 = require("./sort-buttons.component");
var TableComponent = (function () {
    function TableComponent(sortingService) {
        this.sortingService = sortingService;
        this.filterText = '';
        this.data = data_1.EMPLOYEES;
    }
    TableComponent.prototype.ascSort = function (data, sortProperty) {
        this.data = this.sortingService.sort(data, sortProperty, "asc");
        this.changeChildrenState(sortProperty);
    };
    TableComponent.prototype.descSort = function (data, sortProperty) {
        this.data = this.sortingService.sort(data, sortProperty, "desc");
        this.changeChildrenState(sortProperty);
    };
    TableComponent.prototype.changeChildrenState = function (sortProperty) {
        this.items.forEach(function (item) {
            if (!(item.sortProperty === sortProperty)) {
                item.state.changeState(false, false, true);
            }
        });
    };
    __decorate([
        core_1.ViewChildren(sort_buttons_component_1.SortButtonsComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TableComponent.prototype, "items", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'simple-table',
            template: "<div>\n<input style=\"margin-left: 10;\" type=\"text\" [(ngModel)]=\"filterText\"/>\n    <table class=\"table table-striped\">\n    <thead>\n      <tr>\n      <th>Emp No.\n            <sort-buttons\n                        [sortProperty]=\"'empNo'\"\n                        (ascendingOrder)=\"ascSort(data, $event)\"\n                        (descendingOrder)=\"descSort(data, $event)\">\n            </sort-buttons>\n        </th>\n        <th>Full name\n            <sort-buttons\n                        [sortProperty]=\"'fullName'\"\n                        (ascendingOrder)=\"ascSort(data, $event)\"\n                        (descendingOrder)=\"descSort(data, $event)\">\n            </sort-buttons>\n        </th>\n        <th>Email\n            <sort-buttons\n                        [sortProperty]=\"'email'\"\n                        (ascendingOrder)=\"ascSort(data, $event)\"\n                        (descendingOrder)=\"descSort(data, $event)\">\n            </sort-buttons>\n        </th>\n        <th>Date of Birth\n            <sort-buttons\n                        [sortProperty]=\"'birthDate'\"\n                        (ascendingOrder)=\"ascSort(data, $event)\"\n                        (descendingOrder)=\"descSort(data, $event)\">\n            </sort-buttons>\n        </th>\n        \n      </tr>\n    </thead>\n     \n    <tbody>\n      <tr *ngFor=\"let employee of (data | search:filterText) \">\n         <td>{{employee.empNo}}</td>\n        <td>{{employee.fullName}}</td>\n        <td>{{employee.email}}</td>\n        <td>{{employee.birthDate }}</td>\n       \n      </tr>\n    </tbody>\n  </table>\n</div>\n    ",
            providers: [sorting_service_1.SortingService],
        }), 
        __metadata('design:paramtypes', [sorting_service_1.SortingService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table1.component.js.map