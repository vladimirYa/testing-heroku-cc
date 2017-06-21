import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AppComponent } from '../components/app.component';
import { PreloadAllModules } from '@angular/router';

export const routeConfig = [
    { path:'', pathMatch: 'full', redirectTo: 'site'},
    { path: 'site', loadChildren: './site/site.module#SiteModule' },
    { path: 'business', loadChildren: './business/business.module#BusinessModule' },
    { path: 'individual', loadChildren: './individual/individual.module#IndividualModule' },
    { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule'},
    { path: 'business-sign-up', loadChildren: './business-sign-up/business-sign-up.module#BusinessSignUpModule'}
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot(routeConfig, { preloadingStrategy: PreloadAllModules })
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})



export class AppModule { }
