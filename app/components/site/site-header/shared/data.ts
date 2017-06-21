import {IMenuItem} from '../../../shared/menu-items.interface'


export const siteLinks: IMenuItem[] =  [
    {
        text: 'About',
        routerLink: 'about',
        imageName:'images/aboutheader.png',
    },
    {
        text: 'Contact Us',
        routerLink: 'contact-us'
    },
    {
        text: 'Business',
        routerLink: 'business'
    },
    {
        text: 'Blog',
        routerLink: '#'
    },
    {
        text: 'FAQs',
        routerLink: '#'
    },
];
 export const siteBusinessLinks: IMenuItem[]=[
     {
         text: 'Pricing',
         routerLink: '#'
     },
     {
         text: 'Company',
         routerLink: 'company'
     },
     {
         text: 'Resources',
         routerLink: '#'
     },
     {
         text: 'Blog',
         routerLink: '#'
     },
     {
         text: 'FAQs',
         routerLink: '#'
     }
 ];
