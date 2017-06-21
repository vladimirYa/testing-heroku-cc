import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {SignUpComponent} from '../../components/sign-up/sign-up.component'
import {FirstStepComponent} from '../../components/sign-up/first-step/first-step.component'
import {SecondStepComponent} from '../../components/sign-up/second-step/second-step.component'
import {ThirdStepComponent} from '../../components/sign-up/third-step/third-step.component'
import {FourthStepComponent} from '../../components/sign-up/fourth-step/fourth-step.component'
import {FifthStepComponent} from '../../components/sign-up/fifth-step/fifth-step.component'
import {SixthStepComponent} from '../../components/sign-up/sixth-step/sixth-step.component'

import {CardService} from '../../services/common/card/card.service'

import { routerConfig } from './shared/routes'
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[CommonModule, RouterModule.forChild(routerConfig),
                SharedModule
            ],
    declarations:[
        SignUpComponent,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        FourthStepComponent,
        FifthStepComponent,
        SixthStepComponent,
    ],
    exports:[
        SignUpComponent,
        FirstStepComponent,
        SecondStepComponent,
        ThirdStepComponent,
        FourthStepComponent,
        FifthStepComponent,
        SixthStepComponent,
    ],

})
export class SignUpModule{}