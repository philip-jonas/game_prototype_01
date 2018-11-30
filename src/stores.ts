import { TileLogicStore } from "./TileLogicStore";
import { WorldLogicStore } from "./WorldLogicStore";

export function initStores() {
    const stores = {
        tileLogicStore: new TileLogicStore(),
        worldLogicStore: new WorldLogicStore()
    }

    return stores;
}