import { Component, OnInit } from '@angular/core';

import { CardService } from '../../../services/common/card/card.service';
import { ModalService } from '../../../services/modal/modal.service';
import { IndividualUserService } from '../../../services/individual/individual-user.service';

declare let require:any;

@Component({
  selector: 'increase-score',
  templateUrl: './increase-score.component.html',
  styleUrls: ['./increase-score.component.less', '../../../common/styles/grid.less']
})

export class IncreaseScoreComponent implements OnInit {

  cards:any[];
  activeCard:any;
  nextCardIndex:number;
  nextCard:any;
  pointsToNextCard:number;
  activeScore:number;
  isBlack:boolean = false;
  constructor(private cardService: CardService,
              private modalService: ModalService,
              private individualUserService:IndividualUserService) {
      this.activeScore = individualUserService.getData().score;
      this.cards = cardService.cards;
      this.activeCard = cardService.currentCard(this.activeScore);
  }
  ngOnInit(){

      this.nextCardIndex = this.activeCard.index + 1;
      if(this.cards[this.nextCardIndex] !== undefined){
          this.nextCard = this.cards[this.nextCardIndex];
          this.pointsToNextCard = this.nextCard.breakpoint - this.activeScore;
      }else{
          this.isBlack = true;
      }
  }

  loadImg(imageName){
      return require(`../../../common/images/cards/${imageName}.png`);
  }
}
