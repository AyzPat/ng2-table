import {Component, Input, Output, EventEmitter} from "@angular/core";
import {SortButtonsState} from "./sort-buttons-state.service";


@Component({
    moduleId: module.id,
    selector: 'sort-buttons',
    template: `
        <a *ngIf="state.asc" (click)="sortDescClicked()" [class.inactive-sort]="state.inactive">
             <span class="glyphicon glyphicon-sort-by-attributes"></span>
        </a>
        <a *ngIf="!state.asc" (click)="sortAscClicked()" [class.inactive-sort]="state.inactive">
            <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
        </a>
    `
})
export class SortButtonsComponent {

    state:SortButtonsState;

    @Input()
    sortProperty:string;

    @Output()
    ascendingOrder = new EventEmitter();

    @Output()
    descendingOrder = new EventEmitter();

    constructor() {
        this.state = new SortButtonsState(false, false, true);
    }

    sortAscClicked() {
        this.ascendingOrder.emit(this.sortProperty);
        this.state.changeState(true, false, false);
    }

    sortDescClicked() {
        this.descendingOrder.emit(this.sortProperty);
        this.state.changeState(false, true, false);
    }

}
