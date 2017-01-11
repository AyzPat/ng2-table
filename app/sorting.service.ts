import {Injectable} from "@angular/core";

@Injectable()
export class SortingService {

    sort(data:Array<any>, sortProperty:string, order:string) {

        let sortedData = data;

        if (order === 'asc') {
            sortedData.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1;
                } else {
                    return 0;
                }
            });
        }
        else {
            sortedData.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return 1;
                } else if (a[sortProperty] > b[sortProperty]) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
        return sortedData;
    }

}