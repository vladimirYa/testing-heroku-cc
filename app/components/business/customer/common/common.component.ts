import { Component, Input } from '@angular/core';

@Component({
  selector: 'common',
  templateUrl: './common.component.html',
  styleUrls: ['../../../individual/common-data/common-data.component.less',
            './common.component.less']
})
export class CommonComponent {
    @Input() customerData;
}
