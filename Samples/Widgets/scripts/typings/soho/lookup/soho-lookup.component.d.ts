/// <reference path="soho-lookup.d.ts" />
import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoLookupComponent extends BaseControlValueAccessor<any> implements AfterViewInit, OnDestroy {
    private element;
    private ngZone;
    asobject: boolean;
    beforeShow: SohoLookupBeforeShowFunction;
    columns: SohoDataGridColumn[];
    dataset: Object[];
    editable: boolean;
    autoWidth: boolean;
    field: string | SohoLookupFieldFunction;
    match: SohoDataGridMatchFunction;
    click: SohoLookupClickFunction;
    title: string;
    multiselect: boolean;
    name: string;
    options: SohoDataGridOptions;
    source: SohoDataGridSourceFunction;
    toolbar: any;
    afteropen: EventEmitter<Object>;
    beforeopen: EventEmitter<Object>;
    change: EventEmitter<SohoLookupChangeEvent[]>;
    open: EventEmitter<Object>;
    readonly isLookup: boolean;
    isDisabled: any;
    private jQueryElement;
    private lookup;
    private _options;
    private _dataset;
    constructor(element: ElementRef, ngZone: NgZone);
    onKeyUp(event: KeyboardEvent): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isMultiselect(): boolean;
    modalOpened(args: any[]): void;
    onChange(event: SohoLookupChangeEvent[]): void;
    setDisabledState(isDisabled: boolean): void;
    processValue(value: Object | Object[]): string;
    setValue(event: SohoLookupChangeEvent[]): void;
    writeValue(value: any): void;
    private parseValue;
}
