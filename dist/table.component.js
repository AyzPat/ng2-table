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
var data_1 = require('./data');
var sorting_service_1 = require("./sorting.service");
var sort_buttons_component_1 = require("./sort-buttons.component");
var TableComponent = (function () {
    function TableComponent(sortingService) {
        this.sortingService = sortingService;
        this.pages = 4;
        this.pageSize = 10;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        this.filteredItems = data_1.EMPLOYEES;
        this.init();
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
        this.item.forEach(function (item) {
            if (!(item.sortProperty === sortProperty)) {
                item.state.changeState(false, false, true);
            }
        });
    };
    TableComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    TableComponent.prototype.FilterByName = function () {
        var _this = this;
        this.filteredItems = [];
        if (this.inputName != "") {
            data_1.EMPLOYEES.forEach(function (element) {
                if (element.fullName.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.filteredItems.push(element);
                }
            });
        }
        else {
            this.filteredItems = data_1.EMPLOYEES;
        }
        console.log(this.filteredItems);
        this.init();
    };
    TableComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    TableComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    TableComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    TableComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    TableComponent.prototype.setPage = function (index) {
        this.currentIndex = index;
        this.refreshItems();
    };
    __decorate([
        core_1.ViewChildren(sort_buttons_component_1.SortButtonsComponent), 
        __metadata('design:type', core_1.QueryList)
    ], TableComponent.prototype, "item", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'simple-table',
            template: " \n    <div class=\"form-group\">\n            <label>Filter </label>\n            <input  type=\"text\"   id=\"inputName\" [(ngModel)]=\"inputName\"/>\n            <input type=\"button\" (click)=\"FilterByName()\" value=\"Apply\"/>\n    </div>\n    <div class='row'>\n       <div class=\"panel panel-default\">\n        <!-- Default panel contents -->\n        <div class='panel-heading'>Employee List</div>\n        <div class='panel-body'>\n            <table class=\"table table-bordered  \">\n                <thead>\n                    <th>Id\n                    <sort-buttons\n                        [sortProperty]=\"'empNo'\"\n                        (ascendingOrder)=\"ascSort(data, $event)\"\n                        (descendingOrder)=\"descSort(data, $event)\">\n            </sort-buttons>\n            </th>\n                    <th>Name</th>\n                    <th>Email</th>\n                    <th>Birth-Date</th>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let employee of items\">\n                         <td>{{employee.empNo}}</td>\n        <td>{{employee.fullName}}</td>\n        <td>{{employee.email}}</td>\n        <td>{{employee.birthDate }}</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"btn-toolbar\" role=\"toolbar\" style=\"margin: 0;\">\n            \n                 <div class=\"btn-group pull-right\">\n                    <ul class=\"pagination\" >\n                        <li [ngClass]=\"{'disabled': (currentIndex == 1 || pageNumber == 0)}\" ><a  (click)=\"prevPage()\" href=\"#\">Prev</a></li>\n                            <li *ngFor=\"let page of pagesIndex\"   [ngClass]=\"{'active': (currentIndex == page)}\">\n                                <a (click)=\"setPage(page)\" href=\"#\" >{{page}}</a>\n                            </li>\n                        <li [ngClass]=\"{'disabled': (currentIndex == pageNumber || pageNumber == 0)}\" ><a    (click)=\"nextPage()\" href=\"#\">Next</a></li>\n                    </ul>\n                 </div>\n            </div>\n        </div>\n    </div>    \n  ",
            styles: ['.pagination { margin: 0px !important; }'],
            providers: [sorting_service_1.SortingService],
        }), 
        __metadata('design:paramtypes', [sorting_service_1.SortingService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map