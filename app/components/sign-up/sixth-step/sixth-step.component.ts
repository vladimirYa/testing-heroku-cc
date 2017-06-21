import {Component, OnInit} from '@angular/core'
import { CardService } from '../../../services/common/card/card.service';

declare let require;

@Component({
    selector:'sixth-step',
    templateUrl:'./sixth-step.component.html',
    host:{
        'class':'step__wrapper'
    },
    styleUrls:['./sixth-step.component.less']
})

export class SixthStepComponent implements  OnInit{
    constructor(private cardService: CardService) { }
    currentCard;
    score:number;
    ngOnInit(){
        this.score = 775;
        this.currentCard = this.cardService.currentCard(this.score);
    }
    loadCardImage(cardName){
        return require(`../../../common/images/cards/${cardName}.png`);
    }
}