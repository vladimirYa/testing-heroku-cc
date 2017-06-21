import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { CardService } from '../../../services/common/card/card.service';
import { ModalService } from '../../../services/modal/modal.service';
import { IndividualUserService } from '../../../services/individual/individual-user.service';

declare let Plotly:any;

@Component({
    selector: 'charga-score-scale',
    templateUrl: './charga-score-scale.component.html',
    styleUrls: ['./charga-score-scale.component.less']
})

export class ChargaScoreScaleComponent implements AfterViewInit {
    score: number;
    activeCard: any;
    public scaleData = {
        isIncreased: true,
        difference_value: 8
    };
    constructor(
                private cardService: CardService,
                private elementRef: ElementRef,
                private modalService: ModalService,
                private individualUserService: IndividualUserService) {
        this.score = individualUserService.getData().score;
        this.activeCard = cardService.currentCard(this.score);
    }

    ngAfterViewInit() {

    }
    
    showChart(id: string) {
        this.renderChart();
        this.modalService.open(id);
    }

    dataOx: string[] = ['2015-02-01', '2015-02-02', '2015-02-03', '2015-02-04', '2015-02-05',
        '2015-02-06', '2015-02-07', '2015-02-08', '2015-02-09', '2015-02-10',
        '2015-02-11', '2015-02-12'];

    dataOy: number[] = [510, 520, 600, 550, 620, 530, 710, 630, 600, 830, 780, 630];

    renderChart() {

        let data = [
            {
                // x: [0,1,2,3,4,5,6,7,8,9,10,11],
                x: this.dataOx,
                y: this.dataOy,
                mode: 'lines',
                type: 'temperature',
                line: {
                    width: 3,
                    color: '#3D4144'
                }
            }
        ];
        let shapes = [];
        this.cardService.cards.forEach(function(item, i, array) {

            shapes.push({
                type: 'rect',
                xref: 'x',
                yref: 'y',
                x0: data[0].x[0],
                y0: item.breakpoint,
                x1: data[0].x[data[0].x.length - 1],
                y1: array[i + 1] !== undefined ? array[i + 1].breakpoint : 900,
                fillcolor: item.cardColor,
                opacity: 0.4,
                line: {
                    width: 0,
                }
            },
            {
                type: 'line',
                x0: data[0].x[0],
                y0: item.breakpoint,
                x1: data[0].x[data[0].x.length - 1],
                y1: item.breakpoint,
                line: {
                    width: 4,
                    color: 'white',
                }
            });

        });

        let layout = {

            autoscale: false,
            yaxis: {
                range: [500, 900],
                fixedrange: true,
            },
            xaxis: {
                showgrid: false,
                range: [data[0].x[0], data[0].x[data[0].x.length - 1]],
                fixedrange: true,
                // tickvals: [0,1,2,3,4,5,6,7,8,9,10,11],
                // ticktext : this.dataOx,
            },
            margin: {
                l: 30,
                t: 30,
                r: 30,
                b: 30
            },
            shapes: shapes
        }

        Plotly.newPlot('cc-history-chart', data, layout, { displayModeBar: false });
    }
}
