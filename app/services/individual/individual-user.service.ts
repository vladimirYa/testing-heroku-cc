// import { IIndividualUser } from './shared/individual-user.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class IndividualUserService {

    userData = {
        id: 0,
        name: 'Mellisa',
        surname: 'Robertson',
        score: 666,
        difference: 2,
        isIncreased: true,
        phoneNumber: '+1-202-555-0156',
        email: 'mellisa.rob@gmail.com',
        isVerfied: true,
        street: '3887 Collins Street',
        state: 'Pennsylvania',
        city: 'State College',
        zip: '16803',
        date: '21.02.1990',
        avatar_path: 'photo',
        creditLimit:{
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: false
        },
        creditsUsed:{
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: false
        },
        creditsAvailable:{
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: true
        },
        interestRate:{
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: true
        },
        stores:{
            date: 'Apr 1 2017',
            value: '123',
            diff: '20',
            isIncreased: true
        },
        recentActivities:[
            {
                stuffImagePath: 'stuff/phone.png',
                stuffName: 'Samsung Galaxy S7',
                date: 'Apr 1 2017',
                storeImagePath: 'stores/ebay.png',
                storeName:'ebay',
                value: '694.99',
                type: 'Monthly Payment'
            },
            {
                stuffImagePath: 'stuff/allbirds.png',
                stuffName: 'Allbirds Shoes',
                date: 'Mar 10 2017',
                storeImagePath: 'stores/xeroshoes.png',
                storeName:'xeroshoes',
                value: '149.75',
                type: 'Downpayment'
            },
            {
                stuffImagePath: 'stuff/iphone.png',
                stuffName: 'iPhone SE',
                date: 'Mar 05 2017',
                storeImagePath: 'stores/orchard.png',
                storeName:'orchard',
                value: '745.99',
                type: 'Additional Payment'
            },
            {
                stuffImagePath: 'stuff/top.png',
                stuffName: 'Lace Top',
                date: 'Feb 20 2017',
                storeImagePath: 'stores/swell.png',
                storeName:'swell',
                value: '149.75',
                type: 'Monthly Payment'
            }
        ]
    }

    getData(){
        return this.userData;
    }
}
