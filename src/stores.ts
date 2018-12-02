import { WorldStore } from "./Stores/WorldStore";

export function initStores() {
    // const stores = {
    //     tileLogicStore: new WorldStore(),
    //     worldLogicStore: new RoomStore(),
    // }

    const stores = {
        worldStore: new WorldStore(),
    }

    return stores;
}