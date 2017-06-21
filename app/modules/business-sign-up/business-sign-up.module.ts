import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routerConfig } from './shared/routes';
import { BusinessSignUpComponent } from '../../components/business/business-sign-up/business-sign-up.component';
import { FirstStepBusinessComponent } from '../../components/business/business-sign-up/first-step-business/first-step-business.component';
import { SecondStepBusinessComponent } from '../../components/business/business-sign-up/second-step-business/second-step-business.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routerConfig)
  ],
  declarations: [
    BusinessSignUpComponent,
    FirstStepBusinessComponent,
    SecondStepBusinessComponent
  ]
})
export class BusinessSignUpModule { }