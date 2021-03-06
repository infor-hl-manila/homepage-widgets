define(["require", "exports", "./components/widget.component", "./widget.module"], function (require, exports, widget_component_1, widget_module_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        return {
            angularConfig: {
                moduleType: widget_module_1.WidgetModule,
                componentType: widget_component_1.WidgetComponent,
            },
        };
    };
});
//# sourceMappingURL=widget.js.map