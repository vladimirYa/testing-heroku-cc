import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
 import { ActivatedRoute } from '@angular/router';

import { siteLinks, siteBusinessLinks } from './shared/data';
import { ModalService } from '../../../services/modal/modal.service';

@Component({
    selector: 'site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.less']
})

export class SiteHeaderComponent{

    siteLinks:object = siteLinks;
    business:boolean= false;
    constructor(location:Location, private modalService: ModalService) {
       const currentPath:string = location.prepareExternalUrl(location.path());
        if(currentPath==="/site/business" || currentPath==="/site/company"){
            this.clickBusiness();
        }
        else this.clickHome();
    }
    openModalLogin(loginId:string){
        this.modalService.open(loginId);
    }
    clickOnLink($event){

        if($event.target.nodeName==="IMG"){
            if($event.target.className=="img_site-logo img_site-logo_business"){
                this.clickBusiness()
            }
            else this.clickHome();
        }
        else if($event.target.innerText.trim()=="Business"){
            this.clickBusiness();
        }
    }
    clickHome(){
        this.siteLinks=siteLinks;
        this.business=false
    }
    clickBusiness(){
        this.siteLinks=siteBusinessLinks;
        this.business=true
    }
}

