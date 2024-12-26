import { parseRoutePath } from "../utils/parseRouteParse.js";
import { tickets } from "./tickets.js";

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}));
