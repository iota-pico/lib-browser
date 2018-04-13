/**
 * Combined index of all the modules.
 */
export * from "@iota-pico/core";
export * from "@iota-pico/data";
export * from "@iota-pico/api";
export * from "@iota-pico/crypto";
export * from "@iota-pico/business";
export * from "@iota-pico/storage";
//export * from "@iota-pico/pal-browser";
export * from "@iota-pico/pow-box";
export * from "@iota-pico/pow-js";
export * from "@iota-pico/pow-wasm";
export * from "@iota-pico/pow-webgl";

import { PAL } from "@iota-pico/pal-browser";
import { ProofOfWorkFactory } from "@iota-pico/crypto";
import { ProofOfWorkJs } from "@iota-pico/pow-js";
import { ProofOfWorkBox } from "@iota-pico/pow-box";
import { ProofOfWorkWebGl } from "@iota-pico/pow-webgl";
import { ProofOfWorkWasm } from "@iota-pico/pow-wasm";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("js", (...args) => new ProofOfWorkJs());
    ProofOfWorkFactory.instance().register("webgl", (...args) => new ProofOfWorkWebGl(args[0]));
    ProofOfWorkFactory.instance().register("box", (...args) => new ProofOfWorkBox(args[0], args[1], args[2]));
    ProofOfWorkFactory.instance().register("wasm", (...args) => new ProofOfWorkWasm(args[0]));
})();