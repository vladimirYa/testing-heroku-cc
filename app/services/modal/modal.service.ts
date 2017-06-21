import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

    public modals: any[] = [];

    findCurrentModal(id: string){

        for (let i = 0; i < this.modals.length; i++) {
            if(this.modals[i].id === id) {
                return this.modals[i];
            }
        }
    }

    // add modal to array of active modals
    add(modal: any) {
        this.modals.push(modal);
    }

    // remove modal from array of active modals
    remove(id: string) {

        let modalToRemove:any = this.findCurrentModal(id);

        let modalToRemoveIndex = this.modals.indexOf(modalToRemove);
        if(modalToRemoveIndex > -1) {
            this.modals = this.modals.splice(modalToRemoveIndex, 1);
        }
    }
    // open modal specified by id
    open(id: string) {
        this.findCurrentModal(id).open();
    }

    switch(fromId, toId){
        this.findCurrentModal(fromId).close();
        this.findCurrentModal(toId).open();
    }

    // close modal specified by id
    close(id: string) {
        this.findCurrentModal(id).close();
    }
}
