var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomDialogComponent = /** @class */ (function () {
        function CustomDialogComponent() {
            this.dialogResult = "Sample dialog result";
        }
        CustomDialogComponent.prototype.onOk = function () {
            this.dialog.close({ value: this.dialogResult });
        };
        CustomDialogComponent = __decorate([
            core_1.Component({
                template: "\n\t<div>\n\t\t<form role=\"form\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"one-half column\">\n\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t<label for=\"infor-sample-dialogs-input-parameter\">Dialog parameter</label>\n\t\t\t\t\t\t<input id=\"infor-sample-dialogs-input-parameter\"\n\t\t\t\t\t\t\t[(ngModel)]=\"dialogParameter\"\n\t\t\t\t\t\t\tmaxlength=\"64\"\n\t\t\t\t\t\t\tname=\"dialogparam\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"one-half column\">\n\t\t\t\t\t<div class=\"field\">\n\t\t\t\t\t\t<label for=\"infor-sample-dialogs-input-result\">Dialog result</label>\n\t\t\t\t\t\t<input id=\"infor-sample-dialogs-input-result\"\n\t\t\t\t\t\t\t[(ngModel)]=\"dialogResult\"\n\t\t\t\t\t\t\tmaxlength=\"64\"\n\t\t\t\t\t\t\tname=\"dialogresult\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-buttonset\">\n\t\t\t\t<button class=\"btn-modal\" (click)=\"dialog?.close()\">Cancel</button>\n\t\t\t\t<button class=\"btn-modal-primary\" (click)=\"onOk()\">OK</button>\n\t\t\t</div>\n\t\t</form>\n\t</div>"
            })
        ], CustomDialogComponent);
        return CustomDialogComponent;
    }());
    exports.CustomDialogComponent = CustomDialogComponent;
<<<<<<< HEAD
=======
=======
define(["require", "exports", "@angular/common", "@angular/core", "@angular/forms", "@infor/sohoxi-angular", "lime", "./dialog"], function (require, exports, common_1, core_1, forms_1, sohoxi_angular_1, lime_1, dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
    var DialogsComponent = /** @class */ (function () {
        function DialogsComponent(widgetContext, widgetInstance, dialogService, sohoModalDialogService) {
            this.widgetContext = widgetContext;
            this.widgetInstance = widgetInstance;
            this.dialogService = dialogService;
            this.sohoModalDialogService = sohoModalDialogService;
            this.instanceId = widgetContext.getWidgetInstanceId();
        }
        DialogsComponent.prototype.showMessage = function () {
            this.dialogService.showMessage({
                title: "A sample title",
                message: "A sample message"
            });
        };
        DialogsComponent.prototype.showConfirm = function () {
            var _this = this;
            this.dialogService.showMessage({
                title: "Confirm",
                message: "Are you sure?",
                standardButtons: lime_1.StandardDialogButtons.YesNo
            }).subscribe(function (result) {
                var message;
                var title;
                if (result.button === lime_1.DialogButtonType.Yes) {
                    title = "Confirmed";
                    message = "You are sure.";
                }
                else {
                    title = "Not confirmed";
                    message = "You are not sure.";
                }
                _this.dialogService.showMessage({
                    title: title,
                    message: message
                });
            });
        };
        DialogsComponent.prototype.showToast = function () {
            this.dialogService.showToast({
                title: "A sample toast title",
                message: "A sample toast message"
            });
        };
        DialogsComponent.prototype.showCustom = function () {
            var _this = this;
            // To show a custom dialog we now use the SohoModalDialogService instead of DialogService
            var dialog = this.sohoModalDialogService
<<<<<<< HEAD
                .modal(CustomDialogComponent, this.dialogWidgetView)
=======
<<<<<<< HEAD
                .modal(CustomDialogComponent, this.dialogWidgetView)
=======
                .modal(dialog_1.CustomDialogComponent, this.dialogWidgetView)
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
                .title("A custom dialog title")
                .afterClose(function (result) {
                var message = result ? result.value : "Dialog cancelled";
                _this.dialogService.showMessage({
                    title: "Result",
                    message: message
                });
            });
            dialog.apply(function (component) {
                component.dialog = dialog;
                component.dialogParameter = "A sample custom dialog parameter";
            }).open();
        };
        __decorate([
            core_1.ViewChild("dialogWidgetView", { read: core_1.ViewContainerRef, static: true }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], DialogsComponent.prototype, "dialogWidgetView", void 0);
        DialogsComponent = __decorate([
            core_1.Component({
<<<<<<< HEAD
                template: "\n\t<div #dialogWidgetView class=\"container\">\n\t\t<div class=\"twelve columns lm-margin-md-t\">\n\t\t\t<div class=\"row\">\n\t\t\t    <div class=\"field lm-margin-md-b\">\n\t\t\t        <label for=\"{{instanceId}}-message-btn\">Open message dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-message-btn\" (click)=\"showMessage()\">Message</button>\n\t\t\t    </div>\n\t\t\t    <div class=\"field lm-margin-md-b\">\n                    <label for=\"{{instanceId}}-confirm-btn\">Open confirm dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-confirm-btn\" (click)=\"showConfirm()\">Confirm</button>\n\t\t\t    </div>\n\t\t\t    <div class=\"field lm-margin-md-b\">\n\t\t\t        <label for=\"{{instanceId}}-custom-btn\">Open custom dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-custom-btn\" (click)=\"showCustom()\">Custom</button>\n\t\t\t    </div>\n                <div class=\"field lm-margin-md-b\">\n                    <label for=\"{{instanceId}}-toast-btn\">Show toast message</label>\n                    <button soho-button=\"primary\" id=\"{{instanceId}}-toast-btn\" (click)=\"showToast()\">Toast</button>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"
=======
<<<<<<< HEAD
                template: "\n\t<div #dialogWidgetView class=\"container\">\n\t\t<div class=\"twelve columns lm-margin-md-t\">\n\t\t\t<div class=\"row\">\n\t\t\t    <div class=\"field lm-margin-md-b\">\n\t\t\t        <label for=\"{{instanceId}}-message-btn\">Open message dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-message-btn\" (click)=\"showMessage()\">Message</button>\n\t\t\t    </div>\n\t\t\t    <div class=\"field lm-margin-md-b\">\n                    <label for=\"{{instanceId}}-confirm-btn\">Open confirm dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-confirm-btn\" (click)=\"showConfirm()\">Confirm</button>\n\t\t\t    </div>\n\t\t\t    <div class=\"field lm-margin-md-b\">\n\t\t\t        <label for=\"{{instanceId}}-custom-btn\">Open custom dialog</label>\n\t\t\t        <button soho-button=\"primary\" id=\"{{instanceId}}-custom-btn\" (click)=\"showCustom()\">Custom</button>\n\t\t\t    </div>\n                <div class=\"field lm-margin-md-b\">\n                    <label for=\"{{instanceId}}-toast-btn\">Show toast message</label>\n                    <button soho-button=\"primary\" id=\"{{instanceId}}-toast-btn\" (click)=\"showToast()\">Toast</button>\n                </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"
=======
                template: "\n\t<div #dialogWidgetView class=\"container\">\n\t\t<div class=\"twelve columns lm-margin-md-t\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"field lm-margin-md-b\">\n\t\t\t\t\t<label for=\"{{instanceId}}-message-btn\">Open message dialog</label>\n\t\t\t\t\t<button soho-button=\"primary\" id=\"{{instanceId}}-message-btn\" (click)=\"showMessage()\">Message</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field lm-margin-md-b\">\n\t\t\t\t\t<label for=\"{{instanceId}}-confirm-btn\">Open confirm dialog</label>\n\t\t\t\t\t<button soho-button=\"primary\" id=\"{{instanceId}}-confirm-btn\" (click)=\"showConfirm()\">Confirm</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field lm-margin-md-b\">\n\t\t\t\t\t<label for=\"{{instanceId}}-custom-btn\">Open custom dialog</label>\n\t\t\t\t\t<button soho-button=\"primary\" id=\"{{instanceId}}-custom-btn\" (click)=\"showCustom()\">Custom</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"field lm-margin-md-b\">\n\t\t\t\t\t<label for=\"{{instanceId}}-toast-btn\">Show toast message</label>\n\t\t\t\t\t<button soho-button=\"primary\" id=\"{{instanceId}}-toast-btn\" (click)=\"showToast()\">Toast</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            }),
            __param(0, core_1.Inject(lime_1.widgetContextInjectionToken)),
            __param(1, core_1.Inject(lime_1.widgetInstanceInjectionToken)),
            __metadata("design:paramtypes", [Object, Object, lime_1.DialogService,
                sohoxi_angular_1.SohoModalDialogService])
        ], DialogsComponent);
        return DialogsComponent;
    }());
    exports.DialogsComponent = DialogsComponent;
    var DialogsModule = /** @class */ (function () {
        function DialogsModule() {
        }
        DialogsModule = __decorate([
            core_1.NgModule({
                imports: [common_1.CommonModule, forms_1.FormsModule, sohoxi_angular_1.SohoButtonModule],
<<<<<<< HEAD
                declarations: [DialogsComponent, CustomDialogComponent],
                entryComponents: [DialogsComponent, CustomDialogComponent]
=======
<<<<<<< HEAD
                declarations: [DialogsComponent, CustomDialogComponent],
                entryComponents: [DialogsComponent, CustomDialogComponent]
=======
                declarations: [DialogsComponent, dialog_1.CustomDialogComponent],
                entryComponents: [DialogsComponent, dialog_1.CustomDialogComponent]
>>>>>>> 09c5998845de83115754b6247ab941a162cb3ceb
>>>>>>> 95c7962520966e5a756a86fe606a8514f2f44f35
            })
        ], DialogsModule);
        return DialogsModule;
    }());
    exports.DialogsModule = DialogsModule;
});
//# sourceMappingURL=main.js.map