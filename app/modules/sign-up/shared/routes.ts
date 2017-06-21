import {SignUpComponent} from '../../../components/sign-up/sign-up.component'
import {FirstStepComponent} from '../../../components/sign-up/first-step/first-step.component'
import {SecondStepComponent} from '../../../components/sign-up/second-step/second-step.component'
import {ThirdStepComponent} from '../../../components/sign-up/third-step/third-step.component'
import {FourthStepComponent} from '../../../components/sign-up/fourth-step/fourth-step.component'
import {FifthStepComponent} from '../../../components/sign-up/fifth-step/fifth-step.component'
import {SixthStepComponent} from '../../../components/sign-up/sixth-step/sixth-step.component'

export const routerConfig = [{
    path: '',
    component: SignUpComponent ,
    children:[
        { path:'', component: FirstStepComponent},
        { path:'second-step', component: SecondStepComponent},
        { path:'third-step', component:ThirdStepComponent},
        { path:'fourth-step', component:FourthStepComponent},
        { path:'fifth-step', component:FifthStepComponent},
        { path:'sixth-step', component:SixthStepComponent}

    ]
}]