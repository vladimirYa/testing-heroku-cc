import { SiteComponent } from '../../../components/site/site.component';
import { AboutComponent } from '../../../components/site/about/about.component';
import { ContactUsComponent } from '../../../components/site/contact-us/contact-us.component';
import { HomeComponent } from '../../../components/site/home/home.component';
import { BusinessComponent } from '../../../components/site/business/business.component'
import { CompanyComponent } from '../../../components/site/company/company.component'

export const routerConfig = [{
    path: '',
    component: SiteComponent,
    children:[
        { path:'', component: HomeComponent},
        { path:'about', component: AboutComponent},
        { path:'contact-us', component: ContactUsComponent},
        { path:'business', component:BusinessComponent},
        { path:'company', component:CompanyComponent}
    ]
}];
