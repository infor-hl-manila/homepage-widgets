import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, NgZone, OnDestroy } from '@angular/core';
export declare class SohoStandalonePagerComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
    private elementRef;
    private ngZone;
    pageSize: number;
    pageSizes: number[];
    showFirstButton: boolean;
    showLastButton: boolean;
    showNextButton: boolean;
    showPreviousButton: boolean;
    showPageSizeSelector: boolean;
    enableFirstButton: boolean;
    enableLastButton: boolean;
    enablePreviousButton: boolean;
    enableNextButton: boolean;
    previousPageTooltip: string;
    firstPageTooltip: string;
    nextPageTooltip: string;
    lastPageTooltip: string;
    attachPageSizeMenuToBody: boolean;
    pageSizeMenuSettings: object;
    firstPage: EventEmitter<Object>;
    lastPage: EventEmitter<Object>;
    previousPage: EventEmitter<Object>;
    nextPage: EventEmitter<Object>;
    pageSizeChange: EventEmitter<Object>;
    private jQueryElement;
    private pager;
    private options;
    private updateRequired;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    ngOnDestroy(): void;
}
