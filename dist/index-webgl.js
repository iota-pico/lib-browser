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
//export * from "@iota-pico/storage";
__export(require("@iota-pico/pal-browser"));
__export(require("@iota-pico/pow-webgl"));
const pal_browser_1 = require("@iota-pico/pal-browser");
const crypto_1 = require("@iota-pico/crypto");
const pow_webgl_1 = require("@iota-pico/pow-webgl");
(async function () {
    await pal_browser_1.PAL.initialize();
    crypto_1.ProofOfWorkFactory.instance().register("webgl", (...args) => new pow_webgl_1.ProofOfWorkWebGl(args[0]));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtd2ViZ2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtd2ViZ2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztHQUVHO0FBQ0gscUNBQWdDO0FBQ2hDLHFDQUFnQztBQUNoQyxvQ0FBK0I7QUFDL0IsdUNBQWtDO0FBQ2xDLHlDQUFvQztBQUNwQyxxQ0FBcUM7QUFDckMsNENBQXVDO0FBQ3ZDLDBDQUFxQztBQUVyQyx3REFBNkM7QUFDN0MsOENBQXVEO0FBQ3ZELG9EQUF3RDtBQUV4RCxDQUFDLEtBQUs7SUFDRixNQUFNLGlCQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkIsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDRCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9