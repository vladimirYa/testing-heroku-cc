import { Directive, ViewContainerRef,ComponentFactoryResolver,ReflectiveInjector } from '@angular/core';
import {TablePaginationComponent} from '../components/common/table-pagination/table-pagination.component'
@Directive({
    selector: '[ad-host]',
})
export class AdDirective {
    constructor(public viewContainerRef: ViewContainerRef,
                public _componentFactoryResolver:ComponentFactoryResolver) { }
    loadComponent(stores,columns){
        const componentFactory= this._componentFactoryResolver.resolveComponentFactory(TablePaginationComponent);
        let injector = ReflectiveInjector.fromResolvedProviders([], this.viewContainerRef.parentInjector);
        let componentInjector=componentFactory.create(injector);
        const ref = this.viewContainerRef;
        ref.clear();
        componentInjector.instance.arrOfItems=stores;
        componentInjector.instance.tableTitles=columns;
        ref.insert(componentInjector.hostView);
    }
}
