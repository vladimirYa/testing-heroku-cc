import { Component, Input, AfterViewInit, ElementRef} from '@angular/core';
import { CardService } from '../../../services/common/card/card.service';

@Component({
    selector: 'score-line',
    templateUrl: './score-line.component.html',
    styleUrls: ['./score-line.component.less']
})
export class ScoreLineComponent implements AfterViewInit {
    @Input() score: number;
    private fragmentNumber: number;
    @Input() cards;
    // private cards:any[];
    private activeFragment: any;
    private canvas: any;
    private ctx: any;

    private lineWidthBold: number = 6;
    private lineWidthLight: number = 2;
    private radius: number = 20;
    private canvasCenterOy: number;
    private lineLength: number;



    constructor(public cardService: CardService, public el: ElementRef) {
        // this.cards = cardService.cards.slice(0,4);
        // console.log(nativeEl.client);
    }
    // @ViewChild('canvas') canvasElem: ElementRef;
    ngAfterViewInit() {
        this.activeFragment = this.cardService.currentCard(this.score);
        this.fragmentNumber = this.cards.length;
        this.canvasInit();
        this.draw();
    }

    canvasInit() {
        let fragmentLineWidthKoef = 1 / this.fragmentNumber;
        let widthInPercent: number = 100;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = this.el.nativeElement.offsetWidth;
        this.canvas.height = 100;
        this.canvasCenterOy = 0.5 * this.canvas.height;
        this.lineLength = fragmentLineWidthKoef * (this.canvas.width - (this.fragmentNumber) * (((2 * this.radius) + this.lineWidthLight)));
        this.ctx = this.canvas.getContext('2d');

        // this.cards = this.determinateSurroundings(this.activeFragment.index, this.cards);
        // this.activeFragment = this.cards.indexOf(this.activeFragment);
        // this.unlockedCards = this.unlock(this.cards ,this.activeFragment);
    }
    moveToX(index) {
        return (this.radius + this.lineWidthLight) * (2 * (index + 1))
            + (this.lineLength * index)
            - this.lineWidthLight;
    }
    lineToX(index) {
        return (this.lineLength * (index + 1))
            + ((this.radius + this.lineWidthLight) * (2 * (index + 1)))
            + this.lineWidthLight;
    }
    circleX(index) {
        return ((this.radius + this.lineWidthLight) * ((2 * index) + 1))
            + this.lineLength * index;
    }
    drawLine(strokeColor, moveToX, moveToY, lineToX, lineToY) {
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.lineWidth = this.lineWidthBold;
        ctx.strokeStyle = strokeColor;
        ctx.moveTo(moveToX, moveToY);
        ctx.lineTo(lineToX, lineToY);
        ctx.stroke();
    }
    draw() {

        let ctx: any = this.ctx;

        for (let i = 0; i < this.cards.length; i++) {
            let beginColor = this.cards[i].cardColor;
            let endColor: string;

            if (this.cards[i + 1] === undefined) {
                endColor = this.cards[i].cardColor;
            } else {
                endColor = this.cards[i + 1].cardColor;
            }
            //score line
            ctx.beginPath();
            let grd = ctx.createLinearGradient(this.moveToX(i),
                this.canvasCenterOy, this.lineToX(i), this.canvasCenterOy);
                    ctx.lineWidth = this.lineWidthBold;
                    grd.addColorStop(0.7, beginColor);
                    grd.addColorStop(1, endColor);
                    ctx.strokeStyle = grd;
                    ctx.moveTo(this.moveToX(i), this.canvasCenterOy);
                    ctx.lineTo(this.lineToX(i), this.canvasCenterOy);
                    ctx.stroke();
            //score breakpoint
                ctx.beginPath();
                ctx.lineWidth = this.lineWidthLight;
                ctx.strokeStyle = this.cards[i].cardColor;
                ctx.arc(this.circleX(i), this.canvasCenterOy, this.radius, 0, 2 * Math.PI, true);
                ctx.stroke();

                ctx.beginPath();
                ctx.lineWidth = (this.lineWidthLight) ;
                ctx.strokeStyle = this.cards[i].cardColor;
                ctx.lineTo(this.lineToX(i), this.canvasCenterOy);
                ctx.stroke();


            //active score breakpoint
            if (i === this.activeFragment.index) {
                ctx.beginPath();
                ctx.arc(this.circleX(i), this.canvasCenterOy, this.radius - 7, 0, 2 * Math.PI, true);
                ctx.fillStyle = this.activeFragment.cardColor;
                ctx.fill();
                ctx.stroke();
            }
        }

        //end point
        this.drawLine(
            this.cards[this.cards.length - 1].cardColor,
            this.canvas.width - (0.5 * this.lineWidthBold),
            this.canvasCenterOy + 10,
            this.canvas.width - (0.5 * this.lineWidthBold),
            this.canvasCenterOy - 10
        );

        //current score point
        this.drawLine(
            this.activeFragment.cardColor,
            this.moveToX(this.activeFragment.index) + (0.5 * this.lineLength),
            this.canvasCenterOy + 10,
            this.moveToX(this.activeFragment.index) + (0.5 * this.lineLength),
            this.canvasCenterOy - 10
        );
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = '#3d4f60';
            ctx.fillText(`${this.score}`,
                this.moveToX(this.activeFragment.index)
                + (0.5 * this.lineLength)
                - 26 + this.lineWidthBold,
                this.canvasCenterOy - 25);
    }
    onResize(event) {
        this.canvasInit();
        this.draw();
    }
}
