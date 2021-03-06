/// <reference path="soho-modal-dialog.d.ts" />
import { ComponentFactoryResolver, Injector, NgZone, ViewContainerRef } from '@angular/core';
import { SohoModalDialogRef } from './soho-modal-dialog.ref';
export declare class SohoModalDialogService {
    private componentFactoryResolver;
    private injector;
    private ngZone;
    constructor(componentFactoryResolver: ComponentFactoryResolver, injector: Injector, ngZone: NgZone);
    modal<T>(component: ComponentType<T>, parent: ViewContainerRef, options?: SohoModalOptions): SohoModalDialogRef<T>;
    message<T>(content: string | JQuery): SohoModalDialogRef<T>;
}
export declare type ComponentType<T> = new (...args: any[]) => T;
