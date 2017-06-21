import { Injectable } from '@angular/core';

@Injectable()

export class BusinessUserService {

    bussinesData = {
        id: 0,
        name: 'DragRazers',
        score: 777,
        site_url: 'http://www.dragrazers.com',
        owner_name: 'Adam',
        owner_surname: 'Smith',
        owner_email: 'adam@dragrazers.com',
        owner_number: '+1-435-631-3075',
        street: '3910 Burnside Avenue',
        state: 'Utah',
        city: 'West Valley City',
        zip: '84120',
        store_image_path: 'drag-razers-black'

    }

    getData(){
        return this.bussinesData;
    }
}
