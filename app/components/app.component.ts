import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./../common/styles/reset.css',
        './app.component.less', './../common/styles/common.less',
        './../components/common/modal-window/modal-window.component.less',
    './../common/styles/modifiers']
})

export class AppComponent {}
