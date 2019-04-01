/// <reference path="soho-datepicker.d.ts" />
import { AfterViewChecked, AfterViewInit, ElementRef, EventEmitter, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { BaseControlValueAccessor } from '../utils/base-control-value-accessor';
export declare class SohoDatePickerComponent extends BaseControlValueAccessor<any> implements AfterViewInit, AfterViewChecked, OnDestroy {
    private element;
    private ngZone;
    ref: ChangeDetectorRef;
    private runUpdatedOnCheck;
    private jQueryElement;
    private datepicker;
    private isDisabled;
    private isReadOnly;
    private _options;
    showTime: boolean;
    useCurrentTime: boolean;
    timeFormat: string;
    minuteInterval: number;
    secondInterval: number;
    mode: SohoDatePickerMode;
    range: SohoDatePickerRange;
    roundToInterval: boolean;
    dateFormat: string;
    placeholder: string;
    disable: any;
    showLegend: boolean;
    customValidation: boolean;
    showMonthYearPicker: boolean;
    hideDays: boolean;
    advanceMonths: number;
    legend: Array<SohoDatePickerLegend>;
    calendarName: SohoDatePickerCalendarName;
    useUTC: boolean;
    options: SohoDatePickerOptions;
    disabled: boolean;
    readonly: boolean;
    change: EventEmitter<SohoDatePickerEvent>;
    setValue(value: Date): void;
    getValue(): Date;
    focus(): void;
    readonly isDatepicker: boolean;
    readonly isTimepicker: boolean;
    constructor(element: ElementRef, ngZone: NgZone, ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onChange(event: SohoDatePickerEvent): void;
    writeValue(value: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnDestroy(): void;
    markForRefresh(): void;
}
