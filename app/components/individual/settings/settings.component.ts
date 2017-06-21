import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'individual-settings',
    templateUrl: './settings.component.html',
    styleUrls: [
        './settings.component.less',
        '../../../common/styles/grid.less',
        '../../../common/styles/blocks/input/input.less'
    ],
    encapsulation: ViewEncapsulation.None
})

export class SettingsComponent {
    title = 'Settings Cards'
}
