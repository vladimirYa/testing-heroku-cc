import { Component } from '@angular/core';
import { CardService } from '../../../services/common/card/card.service';

import { stores } from './shared/stores';

@Component({
    selector: 'individual-my-charga-cards',
    templateUrl: './my-charga-cards.component.html',
    styleUrls: ['./my-charga-cards.component.less']
})

export class MyChargaCardsComponent {
    constructor(private cardService: CardService) { }
    private cards;
    private score;
    private activeCardIndex;
    private activeCard;
    private unlockedCards;
    private stores = stores;
    ngOnInit(){
        this.cards = this.cardService.cards;
        this.score = 666;
        this.activeCard = this.cardService.currentCard(this.score);
        this.activeCardIndex = this.activeCard.index;
        
    }
    loadStoreLogo(storeName){
        return require(`../../../common/images/logos/${storeName}.png`);
    }
}
