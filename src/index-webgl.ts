/**
 * Combined index of all the modules.
 */
export * from "./core";
export * from "./data";
export * from "./api";
export * from "./crypto";
export * from "./business";
export * from "./pal-browser";
export * from "./pow-webgl";

import { PAL } from "./pal-browser";
import { ProofOfWorkFactory } from "./crypto";
import { ProofOfWorkWebGl } from "./pow-webgl";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("webgl", (...args) => new ProofOfWorkWebGl(args[0]));
})();