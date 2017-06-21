import { CardManagmentComponent } from '../../../../components/business/card-managment/card-managment.component';
import { CardMainComponent } from '../../../../components/business/card-managment/main/card-main.component';
import { CardDetailsComponent } from '../../../../components/business/card-managment/card/card-details.component';

export const routerConfig = [
    {
        path: '',
        component: CardManagmentComponent,
        children: [
            {
                path: 'main',
                component: CardMainComponent
            },
            {
                path: ':type',
                component: CardDetailsComponent,
            },
            {
                path: '',
                redirectTo: 'main',
                pathMatch: 'full'
            }
        ]
    },
]
