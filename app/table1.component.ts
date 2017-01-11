import {Component, ViewChildren,QueryList,Input} from "@angular/core";
//import {QueryList} from "@angular/core/src/linker/query_list";
import {EMPLOYEES} from "./data";
import {SortingService} from "./sorting.service";
import {SortButtonsComponent} from "./sort-buttons.component";
import {SearchPipe} from './search.pipe';

@Component({
    selector: 'simple-table',
    template: `<div>
<input style="margin-left: 10;" type="text" [(ngModel)]="filterText"/>
    <table class="table table-striped">
    <thead>
      <tr>
      <th>Emp No.
            <sort-buttons
                        [sortProperty]="'empNo'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Full name
            <sort-buttons
                        [sortProperty]="'fullName'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Email
            <sort-buttons
                        [sortProperty]="'email'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Date of Birth
            <sort-buttons
                        [sortProperty]="'birthDate'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        
      </tr>
    </thead>
     
    <tbody>
      <tr *ngFor="let employee of (data | search:filterText) ">
         <td>{{employee.empNo}}</td>
        <td>{{employee.fullName}}</td>
        <td>{{employee.email}}</td>
        <td>{{employee.birthDate }}</td>
       
      </tr>
    </tbody>
  </table>
</div>
    `,
    providers: [SortingService],
    
   
})
export class TableComponent {
filterText: string = '';
    data:Array<any>;

    @ViewChildren(SortButtonsComponent) items:QueryList<SortButtonsComponent>;

    constructor(private sortingService:SortingService) {
        this.data = EMPLOYEES;
    }

    ascSort(data:Array<any>, sortProperty:any) {
        this.data = this.sortingService.sort(data, sortProperty, "asc");
        this.changeChildrenState(sortProperty);
    }

    descSort(data:Array<any>, sortProperty:any) {
        this.data = this.sortingService.sort(data, sortProperty, "desc");
        this.changeChildrenState(sortProperty);
    }

    changeChildrenState(sortProperty:any) {

        this.items.forEach((item) => {
            if (!(item.sortProperty === sortProperty)) {
                item.state.changeState(false, false, true);
            }
        })

    }

}

