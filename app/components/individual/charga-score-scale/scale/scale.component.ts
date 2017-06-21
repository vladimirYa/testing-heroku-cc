import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CardService } from '../../../../services/common/card/card.service';

interface IScaleData {
    difference_value: number,
    isIncreased: boolean
}

@Component({
    selector: 'scale',
    templateUrl: './scale.component.html',
    styleUrls: ['./scale.component.less']
})

export class ScoreScaleComponent implements AfterViewInit {
    @Input() public scaleWidthInPercnets;
    @Input() public height;
    @Input() public scaleData: IScaleData;
    @Input() public score;
    activeCard: any;
    cards: any;
    canvas: any;
    ctx: any;
    constructor(
                private cardService: CardService,
                private elementRef: ElementRef) {
    }

    ngAfterViewInit() {
        this.activeCard = this.cardService.currentCard(this.score);
        this.cards = this.cardService.cards;

        this.canvasInit();
        this.draw();
    }
    onResize(event){
        if(window.innerWidth < 1370){
            if(this.canvas.height !== this.height[1]){
                this.canvasInit();
                this.draw();
            }
        }else{
            this.canvasInit();
            this.draw();
        }
    }
    degToRad(degrees) {
        let radiansPerDegree = Math.PI / 180;
        return degrees * radiansPerDegree;
    }
    canvasInit() {
        this.canvas = document.getElementById('scale');
        this.canvas.width = (this.elementRef.nativeElement.offsetWidth * this.scaleWidthInPercnets) / 100;
            if(window.innerWidth < 1370){
                this.canvas.height = this.height[1];
            }else{
                this.canvas.height = this.height[0];
            }
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        let startAngle = 180;
        let sectorLength = 180 / this.cards.length;
        let radius:number;
        let activeRadius:number;
        let lineWidth:number;
        let activeLineWidth:number;
        if(window.innerWidth < 1370){
            radius = 110;
            activeRadius = 120;
            lineWidth = 35;
            activeLineWidth = 55;
        }else{
            radius = 138;
            activeRadius = 148;
            lineWidth = 50;
            activeLineWidth = 70;
        }

        for (let i = 0; i < this.cards.length; ++i) {
            let isActiveSector = i === this.activeCard.index;
            this.ctx.beginPath();
            this.ctx.arc(0.5 * this.canvas.width,
                this.canvas.height,
                isActiveSector ? activeRadius : radius,
                this.degToRad(isActiveSector ? startAngle + 2 : startAngle),
                this.degToRad(isActiveSector ? startAngle - 2 + sectorLength : startAngle + sectorLength));
            this.ctx.lineWidth = isActiveSector ? activeLineWidth : lineWidth;
            this.ctx.strokeStyle = this.cards[i].cardColor;
            this.ctx.stroke();
            startAngle += sectorLength;
        }
    }
}
