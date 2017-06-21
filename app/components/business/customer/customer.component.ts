import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { customers } from './shared/customers';
import { CardService } from '../../../services/common/card/card.service';
import { BusinessUserService } from '../../../services/business/business.service';

declare let require: any;
declare let $: any;

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.less',
        '../../../common/styles/blocks/table/table.less',
        '../../../common/styles/common.less',
        '../../../common/styles/blocks/select/select.less'
    ]
})

export class BusinessCustomerComponent implements OnInit, OnDestroy {
    public id;
    private sub;
    public customerData;
    constructor(private activatedRoute: ActivatedRoute,
        private cardService: CardService,
        private businessUserService: BusinessUserService,
        private renderer: Renderer) { }

    @ViewChild('showDetailsElem') showDetailsElem: ElementRef;

    public customerCard: any;
    public businessData = this.businessUserService.getData();

    public products;
    public statements;
    public options;
    public tmpListener;
    // public selectData;
    // public selectStatements;
    // public currentStatement;
    ngOnInit() {
        this.tmpListener = this.renderer.listen(this.showDetailsElem.nativeElement, 'click', this.showDetails);

        this.options = {
            minimumResultsForSearch: -1,
        }

        this.sub = this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];

            //here will be http request to backend to get data of current customer
            for (let i = 0; i < customers.length; i++) {
                if (customers[i].id === this.id) {
                    this.customerData = customers[i];
                }
            }
        });
        this.customerCard = this.cardService.currentCard(this.customerData.score);
        this.products = this.customerData.products;
        this.statements = this.customerData.statements;
        // let that = this;
        // this.customerData.statements.forEach(function(item) {
        //
        //     let resultArray = [];
        //     item.options.forEach(function(option) {
        //         resultArray.push(
        //             {
        //                 id: option.option_id,
        //                 text: option.optionName
        //             }
        //         );
        //     });
        //     that.selectData = resultArray;
        // });
        //
        // this.selectStatements = {
        //     active: this.selectData[0],
        //     options: this.selectData
        // }
    }
    // getCurrentData(options){
    //
    //     let statement = {
    //         active: {},
    //         options: []
    //     };
    //     options.forEach(function(item){
    //         statement.options.push({
    //                 id: item.option_id,
    //                 text: item.optionName
    //         })
    //     });
    //     statement.active = statement.options[0];
    //
    //     return statement;
    // }
    // setCurrentStatement(id) {
    //
    //     let that = this;
    //     //
    //     // this.customerData.statements.forEach(function(item) {
    //     //     if (item.option_id == id) {
    //     //         that.currentStatement = item;
    //     //     }
    //     // });
    // }
    showDetails({target}) {
        let $anal = { // create custom jquery service i think
            element: undefined,
            setElem: function(element) {
                this.element = element;
                return this;
            },
            getByClass: function(className) {
                this.element = document.getElementsByClassName(className)[0];
                return this;
            },
            closest: function(className) {

                while (!(this.element.className.split(' ').indexOf(className) !== -1)) {
                    this.element = this.element.parentElement;
                    if (!this.element) {
                        return null;
                    }
                }

                return this;
            },
            next: function() {
                this.element = this.element.nextElementSibling
                return this;
            },
            css: function(style, value) {
                if (value !== undefined) {
                    this.element.style[style] = value;
                    return this;
                } else {
                    return this.element.style[style];
                }
            }
        }

        if (target.nodeName == 'TD' && target.parentElement.className == 'customer__table-statement_short') {
            let $detailsElement = $anal.setElem(target)
                .closest('customer__table-statement_short')
                .next();

            if ($detailsElement.css('display') == 'table-row') {
                $detailsElement.css('display', 'none');
            } else {
                $detailsElement.css('display', 'table-row');
            }
        }
    }

    loadImg(imageName) {
        return require(`../../../common/images/cards/${imageName}.png`);
    }
    loadProductImage(imagePath) {
        return require(`../../../common/images/stuff/${imagePath}.png`);
    }
    loadImgStore(imagePath) {
        return require(`../../../common/images/stores/${imagePath}.png`);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
