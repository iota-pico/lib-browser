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
tslib_1.__exportStar(require("./pow-box"), exports);
tslib_1.__exportStar(require("./pow-js"), exports);
tslib_1.__exportStar(require("./pow-srvio"), exports);
tslib_1.__exportStar(require("./pow-wasm"), exports);
tslib_1.__exportStar(require("./pow-webgl"), exports);
const pal_browser_1 = require("./pal-browser");
const crypto_1 = require("./crypto");
const pow_js_1 = require("./pow-js");
const pow_box_1 = require("./pow-box");
const pow_srvio_1 = require("./pow-srvio");
const pow_webgl_1 = require("./pow-webgl");
const pow_wasm_1 = require("./pow-wasm");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pal_browser_1.PAL.initialize();
        crypto_1.ProofOfWorkFactory.instance().register("js", (...args) => new pow_js_1.ProofOfWorkJs());
        crypto_1.ProofOfWorkFactory.instance().register("webgl", (...args) => new pow_webgl_1.ProofOfWorkWebGl(args[0]));
        crypto_1.ProofOfWorkFactory.instance().register("srvio", (...args) => new pow_srvio_1.ProofOfWorkSrvIo(args[0], args[1]));
        crypto_1.ProofOfWorkFactory.instance().register("box", (...args) => new pow_box_1.ProofOfWorkBox(args[0], args[1], args[2]));
        crypto_1.ProofOfWorkFactory.instance().register("wasm", (...args) => new pow_wasm_1.ProofOfWorkWasm(args[0]));
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LWFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsaURBQXVCO0FBQ3ZCLGlEQUF1QjtBQUN2QixnREFBc0I7QUFDdEIsbURBQXlCO0FBQ3pCLHFEQUEyQjtBQUMzQix3REFBOEI7QUFDOUIsb0RBQTBCO0FBQzFCLG1EQUF5QjtBQUN6QixzREFBNEI7QUFDNUIscURBQTJCO0FBQzNCLHNEQUE0QjtBQUU1QiwrQ0FBb0M7QUFDcEMscUNBQThDO0FBQzlDLHFDQUF5QztBQUN6Qyx1Q0FBMkM7QUFDM0MsMkNBQStDO0FBQy9DLDJDQUErQztBQUMvQyx5Q0FBNkM7QUFFN0MsQ0FBQzs7UUFDRyxNQUFNLGlCQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLHNCQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLDJCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSw0QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLDJCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSw0QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRywyQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUcsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMifQ==