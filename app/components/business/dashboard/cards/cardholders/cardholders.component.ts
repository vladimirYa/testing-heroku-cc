import { Component } from '@angular/core';
import { CardService } from '../../../../../services/common/card/card.service';
import { ChartsService } from '../../../../../services/common/charts/charts.service';

import { cardholdersTraces } from './shared/cardholder-data';
declare let Plotly;

@Component({
    selector: 'business-cardholders',
    templateUrl: './cardholders.component.html',
    styleUrls: ['./cardholders.component.less']
})

export class BusinessDashboardCardholdersComponent {
    constructor(private cardService: CardService,
                private chartsService: ChartsService) { }

    public gd;
    public xrange = ['2016-01-15', '2016-12-30']; //from backend
    public yrange = [0, 800]; //from backend
    public data = [];
    public layout = {
        showlegend: false,
        autoscale: false,
        font: {
            size: 14
        },
        xaxis: {
            showgrid: false,
            zeroline: false,
            range: this.xrange,
            fixedrange: true,
        },
        yaxis: {
            range: this.yrange,
            fixedrange: true,
        },
        margin: {
            l: 30,
            t: 30,
            r: 30,
            b: 30
        },
    };

    ngOnInit() {
        this.gd = this.chartsService.initFluidLayout('#cardholdersChart', 90, 85);
        this.defineData();
        this.render();
    }

    defineData() {
        let that = this;
        this.data = cardholdersTraces.map(function(item){
            let title = that.cardService.currentCard(item.score).title;
            return {
                x: item.x.map(function(date){
                    return that.chartsService.formatToDate(date)
                }),
                y: item.y,
                mode: 'lines',
                type: 'temperature',
                name: title.charAt(0).toUpperCase() + title.slice(1) + ' Card',
                line: {
                    width: 3,
                    color: that.cardService.currentCard(item.score).cardColor
                },

            }
        });
    }

    render(){
        Plotly.plot(this.gd, this.data, this.layout, { displayModeBar: false });
    }
    onResize(event){
        Plotly.Plots.resize(this.gd);
    }
}
