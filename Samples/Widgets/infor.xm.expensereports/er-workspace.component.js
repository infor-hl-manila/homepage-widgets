var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "./expensereportdetail"], function (require, exports, core_1, expensereportdetail_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ERWorkspaceComponent = /** @class */ (function () {
        function ERWorkspaceComponent() {
            this.selectedExpenseReportDetail = new expensereportdetail_1.ExpenseReportDetail({});
        }
        ERWorkspaceComponent = __decorate([
            core_1.Component({
                template: "\n\t\t<div [class.expense-report-workspace]=\"!isMobileView\">\n\t\t\t<div class=\"expense-report-workspace-header header-section\">\n\t\t\t\t<div class='expense-report-detail-header-row row no-indent'>\n\t\t\t\t\t<div class='twelve columns'>\n\t\t\t\t\t\t<div class=\"expense-report-workspace-status expense-report-workspace-header-row-left text-small\">\n\t\t\t\t\t\t\t<small class=\"alert-text\" [ngClass]='selectedExpenseReportDetail.statusClass'></small>\n\t\t\t\t\t\t\t{{ selectedExpenseReportDetail.statusName }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='expense-report-workspace-description expense-report-detail-header-row text-primary text-strong row no-indent'>\n\t\t\t\t\t<div class='twelve columns'>\n\t\t\t\t\t\t{{ selectedExpenseReportDetail.description }}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='expense-report-detail-header-row text-base row no-indent'>\n\t\t\t\t\t<div class='six columns bottom-15'>\n\t\t\t\t\t\t<span>{{ language.get('reportTotal') }}: </span><span class='text-strong'>{{ selectedExpenseReportDetail.currency }}{{ selectedExpenseReportDetail.amount }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='six columns bottom-15'>\n\t\t\t\t\t\t<span>{{ selectedExpenseReportDetail.statusLevel === 3 ? language.get('dateCreated') : language.get('dateSubmitted') }}: </span><span>{{ selectedExpenseReportDetail.dateCreated }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class='expense-report-detail-header-row text-base row no-bottom-margin no-indent'>\n\t\t\t\t\t<div class='six columns bottom-15'>\n\t\t\t\t\t\t<span>{{ language.get('trackingNumber') }}: </span><span>{{ selectedExpenseReportDetail.trackingNumber }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='six columns bottom-15'>\n\t\t\t\t\t\t<span>{{ language.get('purpose') }}: </span><span>{{ selectedExpenseReportDetail.purpose }}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='expense-report-detail-tabs detail-section'>\n\t\t\t\t<div soho-tabs registerForEvents=\"activated\" class=\"expense-report-tab-list\">\n\t\t\t\t\t<div soho-tab-list-container>\n\t\t\t\t\t\t<ul soho-tab-list>\n\t\t\t\t\t\t\t<li soho-tab selected=\"true\"><a soho-tab-title tabId=\"expense-report-detail-tab-summary\">{{ language.get('summary') }}</a></li>\n\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"expense-report-detail-tab-expenses\">{{ language.get('expenses') }} ({{ selectedExpenseReportDetail.expenseList ? selectedExpenseReportDetail.expenseList.length : 0 }})</a></li>\n\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"expense-report-detail-tab-myreceipts\">{{ language.get('myReceipts') }} ({{ selectedExpenseReportDetail.receiptList ? selectedExpenseReportDetail.receiptList.length : 0 }})</a></li>\n\t\t\t\t\t\t\t<li soho-tab><a soho-tab-title tabId=\"expense-report-detail-tab-notes\">{{ language.get('notes') }}</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div soho-tab-panel-container>\n\t\t\t\t\t<div soho-tab-panel tabId=\"expense-report-detail-tab-summary\" class=\"expense-report-details-tab-panel side-padding\">\n\t\t\t\t\t\t<div class='expense-report-timeline-header row no-indent'>\n\t\t\t\t\t\t\t<div class='text-primary twelve columns '>\n\t\t\t\t\t\t\t\t{{ language.get('financialOverview') }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='text-base text-descriptive expense-report-details-short-block row no-bottom-margin'>\n\t\t\t\t\t\t\t\t<div class='er-finance-info six columns'>\n\t\t\t\t\t\t\t\t\t<div>{{ language.get('dueEmployee') }}</div>\n\t\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t\t<div class=\"er-finance-info-value text-secondary text-default\">{{ selectedExpenseReportDetail.personalAmount }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='er-finance-info six columns'>\n\t\t\t\t\t\t\t\t\t<div>{{ language.get('dueCompany') }}</div>\n\t\t\t\t\t\t\t\t\t<br >\n\t\t\t\t\t\t\t\t\t<div class=\"er-finance-info-value text-secondary text-default\">{{ selectedExpenseReportDetail.businessAmount }}</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='expense-report-detail-divider'></div>\n\t\t\t\t\t\t<div class='expense-report-detail-timeline'>\n\t\t\t\t\t\t\t<div class='text-primary'>\n\t\t\t\t\t\t\t\t{{ language.get('docStatusDetails') }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"timeline\">\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"indicator-container\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"indicator complete\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"heading\">Report Creation</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sub-heading\">{{ selectedExpenseReportDetail.creatorName }}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"date\">\n\t\t\t\t\t\t\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-datepicker\"></use>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>{{ selectedExpenseReportDetail.dateCreated }}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"timeline-block\">\n\t\t\t\t\t\t\t\t\t<div class=\"indicator-container\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"indicator processing\"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"heading\">{{ selectedExpenseReportDetail.activityName }}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sub-heading\">{{ selectedExpenseReportDetail.activityOwner }}</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"date\">\n\t\t\t\t\t\t\t\t\t\t<svg class=\"icon\" focusable=\"false\" aria-hidden=\"true\" role=\"presentation\">\n\t\t\t\t\t\t\t\t\t\t<use xlink:href=\"#icon-datepicker\"></use>\n\t\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\t<span>{{ selectedExpenseReportDetail.dateModified }}</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div soho-tab-panel tabId=\"expense-report-detail-tab-expenses\" class=\"expense-report-details-tab-panel no-padding\">\n\t\t\t\t\t\t<soho-listview [selectable]='false'>\n\t\t\t\t\t\t\t<li soho-listview-item class=\"expense-report-list-item\" *ngFor=\"let item of selectedExpenseReportDetail.expenseList\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class='text-base'>\n\t\t\t\t\t\t\t\t\t\t{{ item.vendorName }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='text-small text-descriptive'>\n\t\t\t\t\t\t\t\t\t\t{{ item.date }}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class='text-primary expense-report-detail-expense-amount'>\n\t\t\t\t\t\t\t\t\t{{ item.currency }}{{ item.wholeAmount }}<span class='expense-amount-decimal text-small'>{{ item.centsAmount }}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</soho-listview>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div soho-tab-panel tabId=\"expense-report-detail-tab-myreceipts\" class=\"expense-report-details-tab-panel\">\n\t\t\t\t\t\t<div soho-blockgrid class=\"expense-report-detail-block-images\">\n\t\t\t\t\t\t\t<ng-container>\n\t\t\t\t\t\t\t\t<div class=\"block is-selectable expense-report-block\" role=\"listitem\" *ngFor=\"let item of selectedExpenseReportDetail.receiptList\">\n\t\t\t\t\t\t\t\t\t<img alt=\"{{ item.receiptId }}\" [src]=\"item.receiptSource\"/>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div soho-tab-panel tabId=\"expense-report-detail-tab-notes\" class=\"expense-report-details-tab-panel\">\n\t\t\t\t\t\t<div soho-blockgrid class=\"expense-report-detail-notes\" [hidden]=\"!selectedExpenseReportDetail.notes\" *ngFor=\"let note of selectedExpenseReportDetail.notes\">\n\t\t\t\t\t\t\t<div class='text-small'>\n\t\t\t\t\t\t\t\t<div class='er-block-label'>{{ language.get('date') }}</div>\n\t\t\t\t\t\t\t\t<!--<div>{{ language.get('author') }}</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='text-base text-default'>\n\t\t\t\t\t\t\t\t<div class='er-block-value'>{{ note.date }}</div>\n\t\t\t\t\t\t\t\t<!--<div>{{ note.noteOwner }}</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='text-base expense-report-detail-note-area'>\n\t\t\t\t\t\t\t\t{{ note.noteMessage }}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='expense-report-detail-divider'></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                styles: ["\n\t\t.expense-report-workspace { min-width: 700px; min-height: 456px; }\n\t\t.expense-report-workspace-header { color: #1A1A1A; padding: 24px; }\n\t\t.expense-report-workspace-header-row-left { float: left; width: 50%; }\n\t\t.expense-report-workspace-header-row-right { float: right; width: 50%; }\n\t\t.expense-report-workspace-description { margin-top: -6px; padding-bottom: 15px; }\n\t\t.expense-report-details-tab-panel.side-padding { padding-left: 24px; padding-right: 24px; }\n\t\t.expense-report-details-tab-panel.no-padding { padding-top: 0px; }\n\t\t.expense-report-list-item { border-bottom-color: #F0F0F0; height: 72px; padding: 22px 16px 16px 13px; }\n\t\t.expense-report-detail-header-row .bottom-15 { height: 26px; }\n\t\t.er-finance-info { padding-top: 20px !important }\n\t\t.er-finance-info-value { margin-top: -5px; }\n\t\t.expense-report-detail-timeline > div { padding-bottom: 24px; }\n\t\t.expense-report-detail-expense-amount { float: right; margin-top: -25px; }\n\t\t.expense-amount-decimal { color: #999999; line-height: 19px; vertical-align: text-top; }\n\t\t.expense-report-detail-block-images { padding: 0 24px 24px 24px; }\n\t\t.expense-report-detail-block-images > div { height: 150px; width: 150px; display: inline-block; float: left; margin-right: 20px; }\n\t\t.expense-report-detail-notes { padding: 0 24px 0 24px; }\n\t\t.expense-report-detail-note-area { color: #1A1A1A; margin-top: 24px; }\n\t\t.expense-report-detail-divider { margin: 24px 0 24px 0; height: 1px; background-color: #bdbdbd; }\n\t\t.expense-report-status::before { margin-top: 1px; }\n\t\t.expense-report-status-rejected::before { background-color: #E84F4F; }\n\t\t.expense-report-status-needs-review::before { background-color: transparent; border: 1px solid #E84F4F; height: 7px; width: 7px; }\n\t\t.expense-report-status-approved::before { background-color: #80CE4D; }\n\t\t.expense-report-status-in-review::before { background-color: #368AC0; }\n\t\t.expense-report-status-draft::before { background-color: #999999; }\n\t\t.no-bottom-margin { margin-bottom: 0 !important; }\n\t"]
            })
        ], ERWorkspaceComponent);
        return ERWorkspaceComponent;
    }());
    exports.ERWorkspaceComponent = ERWorkspaceComponent;
});
//# sourceMappingURL=er-workspace.component.js.map