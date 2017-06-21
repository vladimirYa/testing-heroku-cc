import { IMenuItem } from '../../../shared/menu-items.interface';

export let individualMenuLinks = [
    {
        text: 'Dashboard',
        routerLink: 'dashboard',
        imageName: 'home-icon',
        isActiveNow: true
    },
    {
        text: 'My ChargaCards',
        routerLink: 'dashboard',
        imageName: 'card',
        isActiveNow: false
    },
    {
        text: 'My ChargaStores',
        routerLink: 'dashboard',
        imageName: 'my-cs',
        isActiveNow: false
    },
    {
        text: 'Settings',
        routerLink: 'settings',
        imageName: 'settings',
        isActiveNow: true
    }

];
