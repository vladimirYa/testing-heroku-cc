import { Injectable } from '@angular/core';

declare let Plotly;

@Injectable()
export class ChartsService {

    initFluidLayout(containerSelector, width, height){
        let d3 = Plotly.d3;

        let WIDTH_IN_PERCENT_OF_PARENT = width;
        let HEIGHT_IN_PERCENT_OF_PARENT = height;
        let gd3 = d3.select(`${containerSelector}`)
            .append('div')
            .style({
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
                margin: 'auto',
                width: WIDTH_IN_PERCENT_OF_PARENT + '%',
                height: HEIGHT_IN_PERCENT_OF_PARENT + '%',
            });

        return gd3.node();
    }
    formatToDate(dateInFormat){
        let date = (new Date(dateInFormat)).toUTCString();
        let dateSplited = date.split(' ');
        let month = dateSplited[2];
        let year = dateSplited[3].slice(2,4);
        return `${month}'${year}`;
    }
    capitalize(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
