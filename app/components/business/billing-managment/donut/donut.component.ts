import { Component, OnInit, Input } from '@angular/core';

import { CardService } from '../../../../services/common/card/card.service';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CommonService } from '../../../../services/common/common.service';

declare let Plotly;
declare let require;

@Component({
    selector: 'donut',
    templateUrl: './donut.component.html',
    styleUrls: ['./donut.component.less']
})
export class DonutComponent implements OnInit {

    constructor(
        private cardService: CardService,
        private chartsService: ChartsService,
        private commonService: CommonService) { }
    public gd;
    public controllers = [];
    public firstControllers = [];  //fuckdayaroslava
    public secondControllers = []; //fuckdayaroslava
    @Input() public data;
    @Input() public controllersData;
    public donutLayout = {
        showlegend: false,
        autoscale: false,
        margin: {
            l: 5,
            t: 0,
            r: 0,
            b: 0
        },
        font:{
            color: '#fff',
            size: 14
        },
    }
    ngOnInit() {

        this.gd = this.chartsService.initFluidLayout('#donut', 100, 100);
        this.render('all');

        this.controllers = this.controllersData.map(function(item, i){ //convert controllers data to checkbox objects

            return {
                title: `${item.title} - ${item.value}`,
                isActive: i === 0 ? true : false,
                name: `${item.controller_name}`
            }
        });
        this.firstControllers = this.controllers.slice(0,3);
        this.secondControllers = this.controllers.slice(3,6);
    }
    //method for changing states of charts dependce on checkboxs
    readNewState(newState){

        for(let key in this.data){ // get new state and find biniding data(mb will changed in feature)
            if(key === newState.name){
                if(newState.isActive){
                    this.render(newState.name); //render with new data
                }
            }
        }
        this.controllers.forEach(function(item){ //radiobutton functionality for check-box(not my idea)
            if(item.name !== newState.name){
                item.isActive = false;
            }
        });
    }
    divideDonutData(type){ //convert data for traces from back data
        let that = this;
        let currentData = this.data[`${type}`];
        let values = currentData.map(function(item) {
            return item.value_in_percent;
        });
        let colors = currentData.map(function(item) {
            return that.cardService.cardByType(item.card_type).cardColor;
        });
        let labels = currentData.map(function(item){
            let title = that.cardService.cardByType(item.card_type).title;
            return that.commonService.capitalize(title) + ' Card';
        });
        let cardNumber = currentData.map(function(item){
            return item.card_number;
        });
        return {
            values,
            colors,
            labels,
            cardNumber
        }
    }
    buildDonutData(type){ //create traces
        return [{
            values: this.divideDonutData(`${type}`).values,
            labels: this.divideDonutData(`${type}`).labels,
            domain: {
                x: [0, 1],
                y: [0, 1]
            },
            marker: {
                colors: this.divideDonutData(`${type}`).colors
            },
            hoverinfo: 'label+percent',
            hole: .6,
            type: 'pie'
        }]
    }
    render(type){
        Plotly.plot(this.gd, this.buildDonutData(`${type}`), this.donutLayout, { displayModeBar: false });
    }
    onResize(event){
        Plotly.Plots.resize(this.gd);
    }
}
