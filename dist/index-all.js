function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combined index of all the modules.
 */
__export(require("@iota-pico/core"));
__export(require("@iota-pico/data"));
__export(require("@iota-pico/api"));
__export(require("@iota-pico/crypto"));
__export(require("@iota-pico/business"));
__export(require("@iota-pico/storage"));
//export * from "@iota-pico/pal-browser";
__export(require("@iota-pico/pow-box"));
__export(require("@iota-pico/pow-js"));
__export(require("@iota-pico/pow-wasm"));
__export(require("@iota-pico/pow-webgl"));
const pal_browser_1 = require("@iota-pico/pal-browser");
const crypto_1 = require("@iota-pico/crypto");
const pow_js_1 = require("@iota-pico/pow-js");
const pow_box_1 = require("@iota-pico/pow-box");
const pow_webgl_1 = require("@iota-pico/pow-webgl");
const pow_wasm_1 = require("@iota-pico/pow-wasm");
(async function () {
    await pal_browser_1.PAL.initialize();
    crypto_1.ProofOfWorkFactory.instance().register("js", (...args) => new pow_js_1.ProofOfWorkJs());
    crypto_1.ProofOfWorkFactory.instance().register("webgl", (...args) => new pow_webgl_1.ProofOfWorkWebGl(args[0]));
    crypto_1.ProofOfWorkFactory.instance().register("box", (...args) => new pow_box_1.ProofOfWorkBox(args[0], args[1], args[2]));
    crypto_1.ProofOfWorkFactory.instance().register("wasm", (...args) => new pow_wasm_1.ProofOfWorkWasm(args[0]));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LWFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0dBRUc7QUFDSCxxQ0FBZ0M7QUFDaEMscUNBQWdDO0FBQ2hDLG9DQUErQjtBQUMvQix1Q0FBa0M7QUFDbEMseUNBQW9DO0FBQ3BDLHdDQUFtQztBQUNuQyx5Q0FBeUM7QUFDekMsd0NBQW1DO0FBQ25DLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFDcEMsMENBQXFDO0FBRXJDLHdEQUE2QztBQUM3Qyw4Q0FBdUQ7QUFDdkQsOENBQWtEO0FBQ2xELGdEQUFvRDtBQUNwRCxvREFBd0Q7QUFDeEQsa0RBQXNEO0FBRXRELENBQUMsS0FBSztJQUNGLE1BQU0saUJBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QiwyQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksc0JBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDRCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLDJCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSwwQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUYsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9