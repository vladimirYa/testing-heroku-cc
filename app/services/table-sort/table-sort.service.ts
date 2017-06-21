import { Injectable } from '@angular/core';

@Injectable()
export class TableSort{
    sorting: any = {
        column: '',
        descending: false
    };
    selectedClass(columnName): string{
        let answer;
        if(this.sorting.column=="") this.sorting.column=columnName;
        let descOrAsc= this.sorting.descending ? "icon__caret-active_down" : "";
        if(columnName == this.sorting.column && this.sorting.column=="none"){
            answer="icon";
        }
        else if(columnName == this.sorting.column) answer='icon icon__caret-active ' + descOrAsc;
        else answer="icon";
        return answer;
    }
    changeSorting(columnName): void{
        if (this.sorting.column == columnName) {
            this.sorting.descending = !this.sorting.descending;
        } else {
            this.sorting.column = columnName;
            this.sorting.descending = false;
        }
    }
    convertSorting(columns): string{
        let answer:any = {...this.sorting} ;
        for(let i=0;i<columns.length;i++){
            if(columns[i].variable==this.sorting.column){
                if(columns[i].filter=="img" || columns[i].filter=="block"){
                    answer.column= columns[i].filterName;
                }
                answer.descending= this.sorting.descending ? '-'+columns[i].filter : '+'+columns[i].filter;
            }
        }
        return answer;
    }

}