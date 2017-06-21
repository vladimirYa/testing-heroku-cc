import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CardService } from '../../../../services/common/card/card.service';
import { CommonService } from '../../../../services/common/common.service';

import { customersRevenueData } from './shared/charts-data';
import { growthRateData } from './shared/charts-data';
import { interestIncomeData } from './shared/charts-data';

declare let Plotly;

@Component({
    selector: 'dashboard-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.less']
})

export class BusinessDashboardCustomersComponent implements OnInit {
    constructor(private chartsService: ChartsService,
                private cardService: CardService,
                private commonService: CommonService) {
    }
    private customersGrowthRate = { // from backend
        date: 'Mar 01 2016',
        value_in_percent: 9,
        difference: 5,
        isIncreased: true
    }
    private customersTotal = { // from backend
        date: 'Apr 01 2016',
        value: 759,
        difference: 2,
        isIncreased: true
    }
    ///// Interest /////
    private interestIncomeGd;
    private interestIncomeTraces = [];
    private interestIncomeData = interestIncomeData;
    //from backend
    private interestIncome = {
        date: '1 Year',
        value: 10072.5,
        difference: 5,
        isIncreased: true
    }
    //from backend
    private averageInterestRate = {
        date: 'Apr 1 2017',
        value: 12.57
    }

    ////////////////////////////////////////////////////
    private customersRevenueData = customersRevenueData; //here will be serve data from backend
    private gd;
    private xrange = ['Jan`16', 'Dec`16']; // from backend

    private traces = [];
    ngOnInit() {
        //initialize chart container
        this.gd = this.chartsService.initFluidLayout('#customersRevenueChart', 95, 80);
        this.interestIncomeGd = this.chartsService.initFluidLayout('#interestIncomeChart', 95, 80);

        //sort data of chart by score
        this.commonService.bubbleSortPyProp(this.customersRevenueData, 'score');
        this.commonService.bubbleSortPyProp(this.interestIncomeData, 'score');

        //render stack bar chart
        this.renderStackBar(this.gd,
                            this.traces,
                            this.customersRevenueData);

        this.renderStackBar(this.interestIncomeGd,
                            this.interestIncomeTraces,
                            this.interestIncomeData);

        this.growthRateGd = this.chartsService.initFluidLayout('#growthRateChart', 95, 80);
        this.growthRateDataInit();
        this.growthRateRender();
    }

    renderStackBar(gd, traces, data) {
        let stackBarLayout = {
            showlegend: false,
            barmode: 'stack',
            margin: {
                l: 70,
                t: 30,
                r: 30,
                b: 30
            },
            font: {
                size: 16
            },
            bargap: 0.40,
            xaxis: {
                range: this.xrange,
                fixedrange: true,
                font: {
                    size: 16
                }
            },
            yaxis: {
                tickprefix: '$'
            }
        };

        let that = this;
        traces = data.map(function(item) {
            let x = item.x.map(function(dateFormat) {
                return that.chartsService.formatToDate(dateFormat);
            });
            let currentCard = that.cardService.currentCard(item.score);
            return {
                x,
                y: item.y,
                type: 'bar',
                name: that.chartsService.capitalize(currentCard.title) + ' Card',
                marker: {
                    color: currentCard.cardColor
                },
            }
        });
        Plotly.plot(gd, traces, stackBarLayout, { displayModeBar: false });
    }
    ///// growthRateChart /////
    private growthRateGd;
    private growthRateData;
    private growthRateLayout = {
        showlegend: false,
        autoscale: false,
        font: {
            size: 16
        },
        xaxis: {
            showgrid: false,
            zeroline: false,
            fixedrange: true,
        },
        yaxis: {
            ticksuffix: "%",
            range: [0, 100],
            fixedrange: true,
        },
        margin: {
            l: 50,
            t: 30,
            r: 30,
            b: 50
        },
    }
    growthRateDataInit() {
        let that = this;

        this.growthRateData = growthRateData.map(function(item) {
            let title = that.cardService.currentCard(item.score).title;
            return {
                x: item.x.map(function(date) {
                    return that.chartsService.formatToDate(date)
                }),
                y: item.y,
                mode: 'lines',
                type: 'temperature',
                name: that.chartsService.capitalize(title) + ' Card',
                line: {
                    width: 3,
                    color: that.cardService.currentCard(item.score).cardColor
                },
            }
        });
    }
    growthRateRender() {
        Plotly.plot(this.growthRateGd, this.growthRateData, this.growthRateLayout, { displayModeBar: false });
    }
    onResize(event) {
        Plotly.Plots.resize(this.gd);
    }
    onGrowthRateResize(event) {
        Plotly.Plots.resize(this.growthRateGd);
    }
    onInterestIncomeResize(event) {
        Plotly.Plots.resize(this.interestIncomeGd);
    }
}
