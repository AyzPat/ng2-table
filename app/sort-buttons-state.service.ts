export class SortButtonsState {

    constructor(public asc:boolean,
                public desc:boolean,
                public inactive:boolean) {
    }

    changeState(asc:boolean, desc:boolean, inactive:boolean) {
        this.asc = asc;
        this.desc = desc;
        this.inactive = inactive;
    }
}
