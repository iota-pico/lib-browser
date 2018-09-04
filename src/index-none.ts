/**
 * Combined index of all the modules.
 */
export * from "./core";
export * from "./data";
export * from "./api";
export * from "./crypto";
export * from "./business";
export * from "./pal-browser";

import { PAL } from "./pal-browser";

(async function (): Promise<void> {
    await PAL.initialize();
})();