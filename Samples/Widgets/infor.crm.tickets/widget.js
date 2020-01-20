define(["require", "exports", "./main"], function (require, exports, main_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.widgetFactory = function (context) {
        return {
            actions: main_1.getActions(context),
            angularConfig: {
                moduleType: main_1.TicketsModule,
                componentType: main_1.TicketsComponent
            }
        };
    };
});
//# sourceMappingURL=widget.js.map