import { Component, AfterViewInit, ComponentFactoryResolver, ElementRef, ReflectiveInjector, ViewChild} from '@angular/core';

import { CardService } from '../../../services/common/card/card.service';
import { ModalService } from '../../../services/modal/modal.service';
import { IndividualUserService } from '../../../services/individual/individual-user.service';

import {AdDirective} from "../../../directives/ad.directive"

declare let require: any;
declare let $: any;

@Component({
    selector: 'favorite-stores',
    templateUrl: './favorite-stores.component.html',
    styleUrls: ['./favorite-stores.component.less',
     './../../../common/styles/blocks/input/input.less',
     '../../../common/styles/grid.less',
     '../../../common/styles/blocks/table/table.less',
        '../../../common/styles/modifiers.less'],
})

export class FavoriteStoresComponent implements AfterViewInit {
    score:number;
    cards:any[];
    activeFragment: any;

    private canvas: any;
    private ctx: any;

    @ViewChild(AdDirective) adHost: AdDirective;
    lineWidthBold: number = 6;
    lineWidthLight: number = 2;
    radius: number = 20;
    canvasCenterOy: number;
    lineLength:number;

    croppedCards:any[];
    activeFragmentInCroppedIndex:number;
    unlockedCards:any[];

    constructor(private elementRef: ElementRef,
                private cardService: CardService,
                private modalService: ModalService,
                private individualUserService: IndividualUserService) {

        this.score = individualUserService.getData().score;
        this.cards = cardService.cards;
        this.activeFragment = cardService.currentCard(this.score);
    }


    columnsOfFavouriteStore:any[]=[
        {
            text:"Store",
            variable:"iconPath" ,
            filter:"img",
            filterName:"name"
        },
        {
            text:"Credit Limit",
            variable:"storeLimit" ,
            filter:"usd"
        },
        {
            text:"Used",
            variable:"used" ,
            filter:"usd"
        },
        {
            text:"Available",
            variable:"available" ,
            filter:"usd"
        },
        {
            text:"",
            variable:"none" ,
            filter:"none"
        }
    ];

    ngAfterViewInit() {
        this.cardService.divideStores();
        this.canvasInit();
        this.draw();
    }
    onResize() {
        this.canvasInit();
        this.draw();
    }

    storeCard:any;
    storeData:any;
    storeNextCard:any;
    isBlack:boolean = false;

    openModalStoreDetails(id:string, storeData){

        this.storeData = storeData;
        this.storeCard = this.cardService.currentCard(storeData.score);

        if(this.cards[this.storeCard.index + 1] !== undefined){
            this.storeNextCard = this.cards[this.storeCard.index + 1];
        }
        if(this.storeCard.title === 'black'){
            this.isBlack = true;
        }else{
            this.isBlack = false;
        }
        this.modalService.open(id);
    }

    isEmptyResult:boolean;
    foundStores:any[];

    findStore(id:string ,value:string){
        this.foundStores = [];
            for(let i = 0;i < this.cardService.stores.length;i++){
                if(this.cardService.stores[i].name.includes(value)){
                    this.foundStores.push(this.cardService.stores[i]);
                }
            }
        this.isEmptyResult = this.foundStores.length === 0;
        this.adHost.loadComponent(this.foundStores,this.columnsOfFavouriteStore);
        this.modalService.open(id);
    }

    canvasInit() {
        let widthInPercent: number = 95;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = (this.elementRef.nativeElement.offsetWidth * widthInPercent) / 100;
        this.canvas.height = 100;
        this.ctx = this.canvas.getContext('2d');
        this.canvasCenterOy = 0.5 * this.canvas.height;
        this.lineLength = 0.25 * (this.canvas.width - 4 * ((2 * this.radius) + this.lineWidthBold));

        this.croppedCards = this.determinateSurroundings(this.activeFragment.index, this.cards);
        this.activeFragmentInCroppedIndex = this.croppedCards.indexOf(this.activeFragment);
        this.unlockedCards = this.unlock(this.croppedCards ,this.activeFragmentInCroppedIndex);
    }

    unlock(croppedArray, activeCardIndex){
        for(let i = 0;i < croppedArray.length;i++){
            if(i <= activeCardIndex){
                croppedArray[i].isAvailable = true;
            }else{
                croppedArray[i].isAvailable = false;
            }
        }
        return croppedArray;
    }
    determinateSurroundings(currentScoreIndex, array) {

        let sliceBegin: number = currentScoreIndex - 2;
        let sliceEnd: number = currentScoreIndex + 2;

        if (sliceBegin < 0) {
            sliceBegin = currentScoreIndex;
            sliceEnd = currentScoreIndex + 4;
        }
        if (sliceEnd > 7) {
            sliceBegin = currentScoreIndex - 3;
            sliceEnd = currentScoreIndex + 1;
        }
        return array.slice(sliceBegin, sliceEnd);
    }
    moveToX(index){
        return (this.radius + this.lineWidthLight)*(2*(index+1))
             + (this.lineLength * index)
             - this.lineWidthLight;
    }
    lineToX(index){
        return (this.lineLength * (index+1))
             + ((this.radius + this.lineWidthLight)*(2*(index+1)))
             + this.lineWidthLight;
    }
    circleX(index){
        return ((this.radius + this.lineWidthLight) * ((2*index)+1))
               + this.lineLength*index;
    }
    drawLine(strokeColor, moveToX, moveToY, lineToX, lineToY){
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

        for(let i = 0;i < this.croppedCards.length; i++){
            let beginColor = this.croppedCards[i].cardColor;
            let endColor:string;

            if(this.croppedCards[i+1] === undefined){
                endColor = this.croppedCards[i].cardColor;
            }else{
                endColor = this.croppedCards[i+1].cardColor;
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
            ctx.strokeStyle = this.croppedCards[i].cardColor;
            ctx.arc(this.circleX(i), this.canvasCenterOy, this.radius, 0, 2 * Math.PI, true);
            ctx.stroke();

            //active score breakpoint
            if(i === this.activeFragmentInCroppedIndex){
                ctx.beginPath();
                ctx.arc(this.circleX(i), this.canvasCenterOy, this.radius - 7, 0, 2 * Math.PI, true);
                ctx.fillStyle = this.activeFragment.cardColor;
                ctx.fill();
                ctx.stroke();
            }
        }

        //end point
        this.drawLine(
            this.croppedCards[this.croppedCards.length - 1].cardColor,
            this.canvas.width - (0.5*this.lineWidthBold),
            this.canvasCenterOy + 10,
            this.canvas.width - (0.5*this.lineWidthBold),
            this.canvasCenterOy - 10
        );

        //current score point
        this.drawLine(
            this.activeFragment.cardColor,
            this.moveToX(this.activeFragmentInCroppedIndex) + (0.5*this.lineLength),
            this.canvasCenterOy + 10,
            this.moveToX(this.activeFragmentInCroppedIndex) + (0.5*this.lineLength),
            this.canvasCenterOy - 10
        );

        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#3d4f60';
        ctx.fillText(`${this.score}`,
            this.moveToX(this.activeFragmentInCroppedIndex)
            + (0.5 * this.lineLength)
            - 26 + this.lineWidthBold,
            this.canvasCenterOy - 20);
    }
    loadImg(image:string){
        return require(`../../../common/images/${image}`);
    }
    loadCardImg(cardType:string){
        return require(`../../../common/images/cards/${cardType}.png`);
    }
}
