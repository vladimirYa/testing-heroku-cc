import { Component} from '@angular/core';

import { CardService } from '../../../../services/common/card/card.service';

declare let require;

@Component({
    selector: 'billing-main',
    templateUrl: './billing-main.component.html',
    styleUrls: [
        './billing-main.component.less',
        '../../../../common/styles/blocks/input/input.less',
        '../../../../common/styles/grid.less',
        '../../../../common/styles/blocks/table/table.less'
    ]
})

export class BillinigMainComponent {


    constructor(
        private cardService: CardService) { }

    //here will be htpp request i think
    public donutData = {
        all: [
            {
                value_in_percent: 32,
                card_type: 'black',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'platinum',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
        open: [
            {
                value_in_percent: 32,
                card_type: 'black',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'orange',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
        processing: [
            {
                value_in_percent: 32,
                card_type: 'green',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'platinum',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
        past_due: [
            {
                value_in_percent: 32,
                card_type: 'black',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'platinum',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
        faild: [
            {
                value_in_percent: 32,
                card_type: 'black',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'platinum',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
        paid: [
            {
                value_in_percent: 32,
                card_type: 'black',
                card_number: 756
            },
            {
                value_in_percent: 28,
                card_type: 'platinum',
                card_number: 178
            },
            {
                value_in_percent: 15,
                card_type: 'gold',
                card_number: 135
            },
            {
                value_in_percent: 17,
                card_type: 'violet',
                card_number: 132
            },
            {
                value_in_percent: 8,
                card_type: 'blue',
                card_number: 62
            }
        ],
    }
    public donutControllers = [
        {
            value: 300,
            title: 'All',
            controller_name: 'all'
        },
        {
            value: 80,
            title: 'Open',
            controller_name: 'open'
        },
        {
            value: 20,
            title: 'Processing',
            controller_name: 'processing'
        },
        {
            value: 10,
            title: 'Past Due',
            controller_name: 'past_due'
        },
        {
            value: 100,
            title: 'Failed',
            controller_name: 'faild'
        },
        {
            value: 90,
            title: 'Paid',
            controller_name: 'paid'
        }
    ]

    public cardsData = [
        {
            type: 'black',
            product_sold: 150,
            paid: 100,
            open: 60,
            processing: 20,
            past_due: 6,
            failed: 4,
        },
        {
            type: 'platinum',
            product_sold: 140,
            paid: 152,
            open: 41,
            processing: 67,
            past_due: 36,
            failed: 2,
        },
        {
            type: 'gold',
            product_sold: 133,
            paid: 79,
            open: 88,
            processing: 90,
            past_due: 145,
            failed: 6,
        },
        {
            type: 'violet',
            product_sold: 104,
            paid: 85,
            open: 12,
            processing: 10,
            past_due: 47,
            failed: 12,
        },
        {
            type: 'blue',
            product_sold: 97,
            paid: 111,
            open: 66,
            processing: 18,
            past_due: 11,
            failed: 59,
        },
        {
            type: 'green',
            product_sold: 86,
            paid: 28,
            open: 34,
            processing: 65,
            past_due: 33,
            failed: 80,
        },
        {
            type: 'yellow',
            product_sold: 75,
            paid: 70,
            open: 71,
            processing: 34,
            past_due: 78,
            failed: 11,
        },
        {
            type: 'orange',
            product_sold: 60,
            paid: 62,
            open: 82,
            processing: 75,
            past_due: 13,
            failed: 60,
        }

    ]
    loadFlatCard(imagePath) {
        return require(`../../../../common/images/cards/${imagePath}.png`);
    }
}
