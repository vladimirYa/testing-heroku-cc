import { Component, Input, Output, OnInit, AfterViewInit, EventEmitter } from '@angular/core';

import { IDataSelect } from './shared/data.model';

declare let $;

@Component({
    selector: 'select2',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.less']
})

export class SelectComponent implements AfterViewInit {

    @Input() data:IDataSelect;
    @Input() id:any;
    @Output() activeId: EventEmitter<any> = new EventEmitter<any>();
    toggleClass(target, className){
        if (target.hasClass(className)) {
            target.removeClass(className);
        } else {
            target.addClass(className);
        }
    }
    $currentList;
    $currentTarget;
    ngAfterViewInit() {

        let that = this;

        $(`#${this.id} .select__list .select__list-item`).on('click', function(event){
            let currentTargetId = $(event.currentTarget).attr('id');
            that.data.options.forEach(function(item){

                if(item.id == currentTargetId){
                    that.data.active = item;
                    that.activeId.emit(item.id);
                }

                that.$currentList.removeClass('opened');
                that.$currentTarget.removeClass('opened');

            });
        });
        $(`#${this.id}`).find('.select__list-item_active').on('click', function(event) {
            that.$currentList = $(event.currentTarget).closest('.select').find('.select__list');
            that.$currentTarget = $(event.target);
            that.toggleClass(that.$currentList, 'opened');
            that.toggleClass(that.$currentTarget, 'opened');
        });
    }
    emitActive(id){
        this.activeId.emit(id);
    }
}
