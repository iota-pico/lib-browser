/**
 * Combined index of all the modules.
 */
export * from "./core";
export * from "./data";
export * from "./api";
export * from "./crypto";
export * from "./business";
export * from "./pal-browser";
export * from "./pow-box";
export * from "./pow-js";
export * from "./pow-srvio";
export * from "./pow-wasm";
export * from "./pow-webgl";

import { PAL } from "./pal-browser";
import { ProofOfWorkFactory } from "./crypto";
import { ProofOfWorkJs } from "./pow-js";
import { ProofOfWorkBox } from "./pow-box";
import { ProofOfWorkSrvIo } from "./pow-srvio";
import { ProofOfWorkWebGl } from "./pow-webgl";
import { ProofOfWorkWasm } from "./pow-wasm";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("js", (...args) => new ProofOfWorkJs());
    ProofOfWorkFactory.instance().register("webgl", (...args) => new ProofOfWorkWebGl(args[0]));
    ProofOfWorkFactory.instance().register("srvio", (...args) => new ProofOfWorkSrvIo(args[0], args[1]));
    ProofOfWorkFactory.instance().register("box", (...args) => new ProofOfWorkBox(args[0], args[1], args[2]));
    ProofOfWorkFactory.instance().register("wasm", (...args) => new ProofOfWorkWasm(args[0]));
})();