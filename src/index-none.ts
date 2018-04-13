/**
 * Combined index of all the modules.
 */
export * from "@iota-pico/core";
export * from "@iota-pico/data";
export * from "@iota-pico/api";
export * from "@iota-pico/crypto";
export * from "@iota-pico/business";
//export * from "@iota-pico/storage";
export * from "@iota-pico/pal-browser";

import { PAL } from "@iota-pico/pal-browser";

(async function (): Promise<void> {
    await PAL.initialize();
})();