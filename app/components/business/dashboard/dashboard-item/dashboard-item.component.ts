import { Component, Input } from '@angular/core';

@Component({
    selector: 'dashboard-item',
    templateUrl: './dashboard-item.component.html',
    styleUrls: ['./dashboard-item.component.less']
})

export class BusinessDashboardItemComponent {
    @Input() title;

}
