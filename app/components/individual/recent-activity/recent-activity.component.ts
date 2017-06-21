import { Component,ViewChild,Input, ViewEncapsulation } from '@angular/core';

import { ModalService } from '../../../services/modal/modal.service';

import {AdDirective} from "../../../directives/ad.directive"

declare let require:any;

@Component({
  selector: 'recent-activity',
  templateUrl: './recent-activity.component.html',
  styleUrls: ['./recent-activity.component.less',
   '../../../common/styles/blocks/table/table.less'],
})

export class RecentActivityComponent {
    @ViewChild(AdDirective) adHost: AdDirective;

    constructor(private modalService: ModalService) {}
	@Input() recentActivities;

    columnsOfRecentActivity:any[]=[
        {
            text:"Product",
            variable:"stuffImagePath" ,
            filter:"block",
            filterName:'stuffName',
            parentElement:"div",
            parentClasses:"table-recent-activity__stuff-wrapper",
            elements:[
                {
                    name:"img",
                    classes:"table-recent-activity__stuff",
                    value:"stuffImagePath"
                },
                {
                    name:"div",
                    classes:"",
                    value:"stuffName"
                }
            ]
        },
        {
            text:"Store",
            variable:"storeImagePath" ,
            filter:"block",
            filterName:'storeName',
            parentElement:"div",
            parentClasses:"table-recent-activity__vendor",
            elements:[
                {
                    name:"img",
                    classes:"",
                    value:"storeImagePath"
                }
            ]

        },{
            text:"Date",
            variable:"date" ,
            filter:"date"
        },{
            text:"Amount",
            variable:"value" ,
            filter:"usd"
        }
        ];
    viewMore(){
        this.modalService.open("full-activities");
        this.adHost.loadComponent(this.recentActivities,this.columnsOfRecentActivity);
    }

    getActivities(){
        return this.recentActivities.slice(0, 4);
    }
    loadImage(imagePath){
        return require(`../../../common/images/${imagePath}`);
    }
}
