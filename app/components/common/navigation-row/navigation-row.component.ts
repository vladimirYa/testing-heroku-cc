import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nav-row',
    templateUrl: './navigation-row.component.html',
    styleUrls: ['./navigation-row.component.less']
})

export class NavigationRowComponent {

    currentUrl: string;

    constructor(private route: ActivatedRoute) {
        this.currentUrl = route.snapshot.data['title'];
    }
}
