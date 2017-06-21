import { Component, Input } from '@angular/core';

import { CardService } from '../../../../services/common/card/card.service';

declare let Plotly;
declare let require;

@Component({
    selector: 'favorite',
    templateUrl: './customer-favorites.component.html',
    styleUrls: ['./customer-favorites.component.less']
})

export class CustomerFavoritesComponent {

    constructor(private cardService: CardService) { }

    @Input() customerData;
    @Input() chartPoints;

    ngOnInit() {
        this.chartRender();
    }
    getFavoriteStores() {
        if (this.customerData.favoriteStores.length > 4) {
            return this.customerData.favoriteStores.slice(0, 4);
        } else {
            return this.customerData.favoriteStores;
        }

    }
    getFavoriteProducts() {
        if (this.customerData.favoriteProducts.length > 5) {
            return this.customerData.favoriteProducts.slice(0, 5);
        } else {
            return this.customerData.favoriteProducts
        }

    }
    loadImg(imagePath) {
        return require(`../../../../common/images/${imagePath}`)
    }
    chartRender() {

        let that = this;
        let yaxis = this.chartPoints.map(function(item){
            return item.y
        });
        let xaxis = this.chartPoints.map(function(item){
            return item.x;
        });
        let color = this.chartPoints.map(function(item){
            return that.cardService.currentCard(item.score).cardColor
        });
        let text = this.chartPoints.map(function(item){
            return that.cardService.currentCard(item.score).title
        });

        let trace1 = {
            x: xaxis,
            y: yaxis,
            text,
            marker: {
                color,
            },
            type: 'bar',
            showlegend: false,
            name: 'Credit Limit'
        };

        let trace2 = {

            y: [400, 400, 500, 500],
            x: ['Apr', 'Jul', 'Jul', 'Mar'],
            mode: 'lines',
            line:{
                color: 'rgba(222,45,38,0.8)',
                width: 4
            },
            name: 'Credit Limit'
        };

        let data = [trace1, trace2];

        let layout = {
            margin: {
                t:10,
                b:30,
                r:40,
                l:40
            },
            yaxis: {
                range: [0, 600],
                fixedrange: true,
                tickprefix: '$'
                // tickvals: [0,100,200,300,400,500,600],
                // ticktext: ['0$', '100$', '200$', '300$', '400$', '500$', '600$']
            },
            xaxis: {
                showgrid: false,
                range: [trace1.x[0], trace1.x[trace1.x.length - 1]],
                fixedrange: true,
            },
            bargap: 0.3,
            showlegend: false
        };

        Plotly.plot('credit-limit-chart', data, layout, { displayModeBar: false });
    }
}
