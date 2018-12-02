import { RoomStore } from "./RoomStore";
import { WorldStore } from "./WorldStore";

export function initStores() {
    const stores = {
        tileLogicStore: new WorldStore(),
        worldLogicStore: new RoomStore()
    }

    return stores;
}