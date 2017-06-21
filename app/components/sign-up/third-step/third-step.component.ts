import { Component, OnInit, ElementRef } from '@angular/core';

declare var Plaid:any;
@Component({
    selector:'third-step',
    templateUrl:'./third-step.component.html',
    host:{
        'class':'step__wrapper'
    },
    styleUrls:['./third-step.component.less']
})
export class ThirdStepComponent implements OnInit {
    handler;
    constructor(private elementRef:ElementRef){

    }
    ngOnInit(){
        this.startPlaid();
    }
    startPlaid(){
        this.handler = Plaid.create({
            apiVersion: 'v2',
            clientName: 'Plaid Walkthrough Demo',
            env: 'sandbox',
            product: ['transactions'],
            key: 'fcee2e9a5e9e424d3d8d8d8d50ebdb',
            onSuccess: function(public_token) {
                window.location.replace('http://localhost:9000/sign-up/fourth-step');
                $.post('/get_access_token', {
                    public_token: public_token
                }, function() {
                    $('#container').fadeOut('fast', function() {
                        $('#intro').hide();
                        $('#app, #steps').fadeIn('slow');
                    });
                });
            },
        });
    }


}