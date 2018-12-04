import { WorldStore } from "./Stores/WorldStore";
import { PlotStore } from "./Stores/PlotStore";

export function initStores() {
    // const stores = {
    //     tileLogicStore: new WorldStore(),
    //     worldLogicStore: new RoomStore(),
    // }

    const stores = {
        plotStore: new PlotStore(),
        worldStore: new WorldStore()
    }

    return stores;
}