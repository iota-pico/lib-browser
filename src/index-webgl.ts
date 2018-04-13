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
export * from "@iota-pico/pow-webgl";

import { PAL } from "@iota-pico/pal-browser";
import { ProofOfWorkFactory } from "@iota-pico/crypto";
import { ProofOfWorkWebGl } from "@iota-pico/pow-webgl";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("webgl", (...args) => new ProofOfWorkWebGl(args[0]));
})();