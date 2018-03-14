/**
 * Combined index of all the modules.
 */
export * from "@iota-pico/core";
export * from "@iota-pico/data";
export * from "@iota-pico/api";
export * from "@iota-pico/crypto";
export * from "@iota-pico/business";
export * from "@iota-pico/pal-browser";
export * from "@iota-pico/pow-box";
export * from "@iota-pico/pow-js";
// export * from "@iota-pico/pow-wasm";
export * from "@iota-pico/pow-webgl";

import {PAL} from "@iota-pico/pal-browser";

(async function (): Promise<void> {
    await PAL.initialize();
})();