import { Injectable } from '@angular/core';

@Injectable()
export class TableFilter{
    answer:any;

    filterArr(value:any,sort:any){
        let descOrAsc;
        let sortingColumn;
        if(sort==null){
            descOrAsc="-";
            sortingColumn='number';
        }
        else {
            descOrAsc=sort.descending.substring(0,1);
            sortingColumn=sort.descending.substring(1);
        }
        if(value==null) return value;
        else {

            switch (sortingColumn){
                case 'block':
                case 'img':
                case 'text':
                    this.answer=sortText();
                    break;
                case "number":
                case 'usd':
                    this.answer=sortNumbers();
                    break;
                case 'date':
                    this.answer=sortDate();
                    break;
                default: this.answer=value;
            }
            return this.answer;
        }
        function sortText(){

            value.sort(function (a:any,b:any) {
                if(descOrAsc=="-") {
                    if(a[sort.column].toLowerCase() < b[sort.column].toLowerCase()) return 1;
                    if(a[sort.column].toLowerCase() > b[sort.column].toLowerCase()) return -1;
                    else return 0;
                }
                else if(descOrAsc=="+") {
                    if(a[sort.column].toLowerCase() > b[sort.column].toLowerCase()) return 1;
                    if(a[sort.column].toLowerCase() < b[sort.column].toLowerCase()) return -1;
                    else return 0;
                }
            });
            return value;

        }
        function sortImg(){
            value.sort(function (a:any,b:any) {
                return a[sort.column] - b[sort.column];
            });
            return value;
        }
        function sortNumbers(){
            value.sort(function (a:any,b:any) {
                if(descOrAsc=="-") {
                    return b[sort.column]-a[sort.column];
                }
                else if(descOrAsc=="+") {
                    return a[sort.column] - b[sort.column];
                }
            });
            return value;
        }
        function sortDate(){
            value.sort(function (a,b) {
                a=new Date(a[sort.column]).getTime();
                b=new Date(b[sort.column]).getTime();
                if(descOrAsc=="-") {
                    return a-b;
                }
                else if(descOrAsc=="+") {
                    return b-a;
                }
            });
            return value;
        }

    }
}