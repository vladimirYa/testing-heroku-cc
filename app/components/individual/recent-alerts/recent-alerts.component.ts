import { Component } from '@angular/core';
import { alertItems } from './shared/alerts';
declare var require: any;

@Component({
  selector: 'recent-alerts',
  templateUrl: './recent-alerts.component.html',
  styleUrls: ['./recent-alerts.component.less']
})

export class RecentAlertsComponent {

    alerts = alertItems;

    getAlerts(){
        let alertsLength = this.alerts.length;
        let extraAlerts = alertsLength - 3;

        return (alertsLength > 3) ? this.alerts.splice(2, extraAlerts) : this.alerts;
    }

    loadImg(image){
        return require(`../../../common/images/icons/${image}.png`);
    }

}
