import { Component, AfterViewInit } from '@angular/core';
import { CardService } from '../../../services/common/card/card.service';
declare let require;

@Component({
    selector: 'customers',
    templateUrl: './customers.component.html',
    styleUrls: [
        './customers.component.less',
        '../../../common/styles/blocks/input/input.less'
    ]
})
export class BusinessCustomersComponent implements AfterViewInit{
    constructor(private cardService: CardService) { }
private customers = [];
    ngAfterViewInit(){
        this.customers = [
            {
                id:0,
                full_name: 'Ruth Hopkins',
                avatar_url: 'ruth',
                score: 725,
                credit_limit: 500,
                credit_used: 325,
                credit_available: 175
            }
        ]
    }
    loadAvatar(path){
        return require(`../../../common/images/${path}.png`)
    }
    loadCard(path){
        return require(`../../../common/images/cards/${path}.png`);
    }
}
