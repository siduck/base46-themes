import type { ThemeData } from "$lib/types";

import themelist from "../data.json";

interface StoreType {
  curindex: number;
  items: ThemeData[];
  themelist:any,
  data: any;
  pagelimit: number,
}

export const store: StoreType = $state({
  curindex: 0,
  items: [],
  themelist: themelist,
  data: themelist,
  pagelimit: 10,
});
