Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(require("./core"), exports);
tslib_1.__exportStar(require("./data"), exports);
tslib_1.__exportStar(require("./api"), exports);
tslib_1.__exportStar(require("./crypto"), exports);
tslib_1.__exportStar(require("./business"), exports);
tslib_1.__exportStar(require("./pal-browser"), exports);
tslib_1.__exportStar(require("./pow-webgl"), exports);
const pal_browser_1 = require("./pal-browser");
const crypto_1 = require("./crypto");
const pow_webgl_1 = require("./pow-webgl");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pal_browser_1.PAL.initialize();
        crypto_1.ProofOfWorkFactory.instance().register("webgl", (...args) => new pow_webgl_1.ProofOfWorkWebGl(args[0]));
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtd2ViZ2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtd2ViZ2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGlEQUF1QjtBQUN2QixpREFBdUI7QUFDdkIsZ0RBQXNCO0FBQ3RCLG1EQUF5QjtBQUN6QixxREFBMkI7QUFDM0Isd0RBQThCO0FBQzlCLHNEQUE0QjtBQUU1QiwrQ0FBb0M7QUFDcEMscUNBQThDO0FBQzlDLDJDQUErQztBQUUvQyxDQUFDOztRQUNHLE1BQU0saUJBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QiwyQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksNEJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMifQ==