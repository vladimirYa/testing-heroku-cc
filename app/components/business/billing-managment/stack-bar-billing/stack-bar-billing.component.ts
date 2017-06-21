import { Component, OnInit } from '@angular/core';

import { CardService } from '../../../../services/common/card/card.service';
import { ChartsService } from '../../../../services/common/charts/charts.service';
import { CommonService } from '../../../../services/common/common.service';

import { data } from './shared/data-chart';
declare let Plotly;
declare let require;

@Component({
    selector: 'stack-bar',
    templateUrl: './stack-bar-billing.component.html',
    styleUrls: ['./stack-bar-billing.component.less']
})

export class BillingStackBarComponent implements OnInit {
    public stackChartSelectDates = {
        active: {
            id: 'annual',
            text: 'Annual'
        },
        options: [
            {
                id: 'annual',
                text: 'Annual'
            }
        ]
    }
    public stackChartSelectTypes = {
        active: {
            id: 'total-net',
            text: 'Total Net Revenue'
        },
        options: [
            {
                id: 'total-net',
                text: 'Total Net Revenue'
            }
        ]
    }
    readOptionDate(event){
        console.log(event); // here handle
    }
    readOption(event){
        console.log(event);
    }
    constructor(private cardService: CardService,
        private chartsService: ChartsService,
        private commonService: CommonService) { }

    private gd;
    private xrange = ['Jan`16', 'Dec`16']; // from backend, mb i dont need this
    private traces = [];
    private data = data;
    public chartControllers = [];

    private layout = {

        showlegend: false,
        barmode: 'stack',
        margin: {
            l: 50,
            t: 0,
            r: 30,
            b: 30
        },
        font: {
            size: 14
        },
        bargap: 0.3, // how to create it adaptive?
        xaxis: {
            range: this.xrange,
            fixedrange: true,
        },
        yaxis: {
            tickprefix: '$'
        }
    }
    ngOnInit() {
        let that = this;
        let d3 = Plotly.d3;

        let WIDTH_IN_PERCENT_OF_PARENT = 100;
        let HEIGHT_IN_PERCENT_OF_PARENT = 100;
        let gd3 = d3.select(`#chart`)
            .append('div')
            .style({
                position: 'absolute',
                top: '0%',
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
            });

        this.gd = gd3.node();

        this.states = this.statesInit(this.data);
        this.tracesInit();

        this.render(this.gd, this.traces, this.layout)
    }
    public states = [];

    tracesInit(){
        let that = this;
        this.traces = [];
        this.commonService.bubbleSortPyProp(this.states, 'breakpoint');
        this.chartControllers = this.states;
        this.states.map(function(item) {                        //define visible traces
            if (item.isActive) {                                //if visible by oninit then create trace
                let x = item.x.map(function(dateFormat) {
                    return that.chartsService.formatToDate(dateFormat);
                });
                let currentCard = that.cardService.cardByType(item.name);

                that.traces.push({
                    x,
                    y: item.y,
                    type: 'bar',
                    name: that.chartsService.capitalize(currentCard.title) + ' Card',
                    marker: {
                        color: currentCard.cardColor
                    },
                });
            }
        });
    }

    render(gd, traces, layout) {
        Plotly.plot(gd, traces, layout, { displayModeBar: false });
    }

    onResize(event){
        Plotly.Plots.resize(this.gd);
    }

    //covert data to states
    statesInit(data) {
        let that = this;
        return data.map(function(item) {
            let currentCard = that.cardService.cardByType(item.type);
            return {
                x: item.x,
                y: item.y,
                title: that.commonService.capitalize(currentCard.title), //for check-box
                flatImg: currentCard.cardFlatImage, //for check-box
                isActive: item.isActive,
                name: currentCard.title,
                breakpoint: currentCard.breakpoint
            }
        });
    }
    readStackController(event) {
        let emitedCardType = event.name;
        this.tracesInit();
        Plotly.newPlot(this.gd, this.traces, this.layout, { displayModeBar: false });
    }
    loadFlatCard(imagePath) {
        return require(`../../../../common/images/cards/${imagePath}.png`);
    }
}
