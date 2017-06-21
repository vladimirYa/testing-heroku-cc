import { Component, Input, ElementRef, OnInit, OnDestroy} from '@angular/core';
import { ModalService } from '../../../services/modal/modal.service';
declare let $: any;
declare let process:any;
declare let window:any;

@Component({
    selector: 'modal-window',
    templateUrl: './modal-window.component.html',
    styleUrls: ['./modal-window.component.less']
})
export class ModalWindowComponent implements OnInit, OnDestroy {
    @Input() id: string;
    private modal: any;
    body:any = document.getElementsByTagName('body')[0];
    constructor(private modalService: ModalService, private element: ElementRef) {
        this.modal = element.nativeElement;
    }

    ngOnInit(): void {
        let that = this;
        if (process.env.ENV !== 'production') {
            if (!this.id) {
                console.error('modal must have an id');
                return;
            }
        }

        this.body.appendChild(this.modal);

        this.modal.addEventListener('click', function(event){
            let target = event.target;
            if (target.classList){
                if(target.classList.contains('background')){
                    that.close();
                }
            }
        });
        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        window.scrollTo(0,0);
        this.body.style.top = '0';
        this.body.style.overflowY = 'auto';
        this.modalService.modals = [];
        this.modal.parentNode.removeChild(this.modal);
    }

    offsetY:number;

    open(): void {
        this.offsetY = window.pageYOffset;
        this.body.style.cssText = `
         position: fixed;
         top: -${this.offsetY}px;
         width: 100%;
         overflow-y : scroll;
         overflow-x : hidden;`;

        this.modal.style.display = 'block';
    }

    close(): void {
        this.body.style.position = 'static';
        this.body.style.overflowX = 'auto';
        window.scroll(0, this.offsetY);
        this.modal.style.display = 'none';
    }
}
