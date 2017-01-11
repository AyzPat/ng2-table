import{Pipe,PipeTransform} from '@angular/core'
import {Employee} from './empoloyee'
@Pipe({
    name:"search"
})
export class SearchPipe implements PipeTransform{
   transform(value: Employee[], args?: any) {
        console.log(value);
        console.log(args);
        if(!args) {
            return value;
        }
        else {
           
            return value.filter((item) => {
              
                return item.fullName.indexOf(args)!==-1;
               
               
                
            });
        }
        }

    }

