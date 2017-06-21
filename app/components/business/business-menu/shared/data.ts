import { IMenuItem } from '../../../shared/menu-items.interface';

export let businessMenuLinks: IMenuItem[] = [
    {
        text: 'Dashboard',
        routerLink: 'dashboard',
        imageName: 'home-icon'
    },
    {
        text: 'Card Managment',
        routerLink: 'card',
        imageName: 'card'
    },
    {
        text: 'Billing Managment',
        routerLink: 'billing',
        imageName: 'billing-managment'
    },
    {
        text: 'Customers',
        routerLink: 'customers',
        imageName: 'customers'
    },
    {
        text: 'Settings',
        routerLink: 'settings',
        imageName: 'settings'
    },

];
