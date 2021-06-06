import { NgModule, Component, ViewChild, enableProdMode } from '@angular/core';
import { Service, Sale } from './app.service';
import { DxPivotGridModule } from 'devextreme-angular';
if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    sales: Sale[];
    dataSource: any;
    constructor(service: Service,private dxPivotGridModule:DxPivotGridModule) {
        this.dataSource = {
            fields: [{
                caption: 'Region',
                width: 120,
                dataField: 'region',
                area: 'row'
            }, {
                caption: 'City',
                dataField: 'city',
                width: 150,
                area: 'row',
                selector: this.citySelector
            }, {
                dataField: 'date',
                dataType: 'date',
                area: 'column'
            }, {
                caption: 'Sales',
                dataField: 'amount',
                dataType: 'number',
                summaryType: 'sum',
                format: 'currency',
                area: 'data'
            }],
            store: service.getSales()
        }
    }

    citySelector(data) {
        debugger
        return data.city + ' (' + data.country + ')';
    }
}

