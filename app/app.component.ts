import {Component} from '@angular/core';
import {TableComponent} from "./table.component";

@Component({
    selector: 'my-App',
    // template: '<h1>Simple sorting table demo</h1>',
    template: `
        <h1>Table-App</h1>
      
        <simple-table
        ></simple-table>
    `,
 
})
export class AppComponent {
}

