import {createRequire} from "node:module";
// crear el requirepropio
export const require = createRequire(import.meta.url);

