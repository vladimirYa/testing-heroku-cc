import { Injectable } from '@angular/core';
import { cards } from './shared/cards';
import { score } from './shared/score';
import { stores } from './shared/stores';

@Injectable()
export class CardService {
    score = score;
    cards = cards;
    stores = stores;

    currentCard(score = this.score) {
        let index:number = Math.floor(0.02 * (score - 500));
        // let index = score < 500 ? Math.floor(0.01 * score) - 3 : Math.floor(0.02 * (score - 500)) + 2;
        let resultObject:any = this.cards[index];
        resultObject.index = index;
        return resultObject;
    }
    cardByType(type:string){
        let currentCard;
        cards.forEach(function(item){

            if(item.type == type){
                currentCard = item;
            }

        });
        return currentCard;
    }
    // bubbleSortPyProp(array:any[], prop){
    //     let swapped;
    //     do {
    //         swapped = false;
    //         for (let i = 0; i < array.length - 1; i++) {
    //             if (array[i][`${prop}`] > array[i + 1][`${prop}`]) {
    //                 let temp = array[i];
    //                 array[i] = array[i + 1];
    //                 array[i + 1] = temp;
    //                 swapped = true;
    //             }
    //         }
    //     } while (swapped);
    // }
    // sortCardsByType(array, propName){
    //     let swapped;
    //     do{
    //         swapped = false;
    //         for(let i = 0; i < array.length - 1; i++){
    //             let currentCardType =
    //             this.cardByType(array[i][]);
    //         }
    //     } while(swapped);
    // }
    divideStores(){
        for(let i = 0; i < cards.length; i++){
            cards[i].storeIcons = [];
        }
        for(let i = 0; i < stores.length; i++){
            let scoreIndex = Math.floor(0.02 * (stores[i].score - 500));
            cards[scoreIndex].storeIcons.push(stores[i]);
        }
    }

}
