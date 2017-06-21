import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../../services/common/card/card.service';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CommonService } from '../../../../services/common/common.service';

import { totalCards } from './shared/charts-data';
import { controllersData } from './shared/charts-data';

declare let Plotly;

@Component({
    selector: 'dashboard-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.less']
})

export class BusinessDashboardCardsComponent implements OnInit {
    constructor(private cardService: CardService,
                private chartsService: ChartsService,
                private commonService: CommonService) {
    }
    public chartControllers = [];
    private gd;
    private legend;
    public totalCardsData = {
        date: 'Apr 1 2017',
        score: 759,
        difference: 2,
        isIncreased: true
    }

    readNewState(newState){

        for(let key in totalCards){
            if(key === newState.id){
                if(newState.isActive){
                    this.renderDonut(newState.id);
                }
            }
        }
        this.chartControllers.forEach(function(item){
            if(item.id !== newState.id){
                item.isActive = false;
            }
        });
    }
    ngOnInit() {
        this.gd = this.chartsService.initFluidLayout('#chartDonut', 40, 60);
        this.renderDonut('all');

        this.chartControllers = controllersData.map(function(item, i){

            return {
                title: `${item.title} - ${item.value}`,
                isActive: i === 0 ? true : false,
                id: `${item.controller_name}`
            }
        });
    }
    defineDonutLegend(type){
        let that = this;

        this.legend = totalCards[`${type}`].map(function(item){
            let title = that.cardService.currentCard(item.value_score).title;
            return {
                title: that.commonService.capitalize(title) + ' Card',
                number: item.card_number
            }
        });
    }
    divideDonutData(type){
        let that = this;
        let currentData = totalCards[`${type}`];
        let values = currentData.map(function(item) {
            return item.value_in_percent;
        });
        let colors = currentData.map(function(item) {
            return that.cardService.currentCard(item.value_score).cardColor;
        });
        let labels = currentData.map(function(item){
            let title = that.cardService.currentCard(item.value_score).title;
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
    buildDonutData(type){
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
            hole: .55,
            type: 'pie'
        }]
    }
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
            size: 18
        },
    }
    renderDonut(type){
        this.defineDonutLegend(type);
        Plotly.plot(this.gd, this.buildDonutData(`${type}`), this.donutLayout, { displayModeBar: false });
    }
    onResizeDonut(event) {
        Plotly.Plots.resize(this.gd);
    }
}
