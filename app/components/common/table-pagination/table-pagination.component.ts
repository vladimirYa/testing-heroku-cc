import {Component, Input, OnInit} from '@angular/core';

import { TableSort } from '../../../services/table-sort/table-sort.service';
import { TableFilter } from '../../../services/table-sort/table-filter.service';

@Component({
    selector: 'table-pagination',
    templateUrl: './table-pagination.component.html',
    styleUrls: ['./table-pagination.component.less',
        '../../../common/styles/blocks/table/table.less',
        '../../../common/styles/modifiers.less']
})

export class TablePaginationComponent implements OnInit{
    @Input() arrOfItems:any;
    @Input() tableTitles:any;
    filtredArr;
    finalList:any[] =[];
    activePage;
    countOfItems;
    tableSort:any;
    pages:number[]=[1,2,3];
    amounts:number[]=[10,20,50];
    constructor(private tableSorting: TableSort,
                private tableFilter: TableFilter){
        this.tableSort= new TableSort();
    }

    ngOnInit(){
        if(this.arrOfItems!=="undefined" && this.tableTitles!=="undefined"){
            this.tableSort.sorting.column= this.tableTitles[0].variable;
            this.filtredArr=this.tableFilter.filterArr(this.arrOfItems,this.tableSort.convertSorting(this.tableTitles));
            this.activePage=1;
            this.countOfItems=10;
            this.rewritePageArray();
            this.countOfItemsOnPage();

        }
    }
    rewritePageArray(){

        if(Math.floor(this.filtredArr.length/this.countOfItems)<3) {
            if(Math.ceil(this.filtredArr.length/this.countOfItems)==1){
                this.pages=[1]
            }
            else this.pages=[1,2,3]
        }
        else this.pages=[1,2,3]
    }
    setPage(num){
        this.activePage=num;
        if(num>1 && num<Math.ceil(this.filtredArr.length/this.countOfItems)){
            this.pages=[num-1,num,num+1];
        }
        this.countOfItemsOnPage();
    }
    setAmount(amount){

        this.countOfItems=amount;
        this.activePage=1;
        this.rewritePageArray();
        this.countOfItemsOnPage();
    }
    countOfItemsOnPage(){
        let page=this.activePage;
        let countOfItems=this.countOfItems;
        let countAllItems=this.filtredArr.length;
        let counter=0;
        this.finalList.length=0;
        if(page*countOfItems<countAllItems){
            for(let i=page*countOfItems-countOfItems;i<page*countOfItems;i++){
                if(this.filtredArr[i]=="undefined"){
                    return;
                }
                else {
                    this.finalList[counter]=this.filtredArr[i];
                    counter++;
                }
            }
        }
        else {
            for(let i=page*countOfItems-countOfItems;i<countAllItems;i++){
                if(this.filtredArr[i]=="undefined"){
                    return;
                }
                else {
                    this.finalList[counter]=this.filtredArr[i];
                    counter++;
                }
            }
        }
    }
    reSort(column){
        this.tableSort.changeSorting(column.variable);
        this.filtredArr=this.tableFilter.filterArr(this.arrOfItems,this.tableSort.convertSorting(this.tableTitles));
        this.activePage=1;
        this.countOfItemsOnPage();
        this.rewritePageArray();
    }
}