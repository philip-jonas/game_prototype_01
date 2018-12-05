import { WorldStore } from "src/Stores/WorldStore";
import { PlotStore } from "src/Stores/PlotStore";

export interface IWorldProps {
    worldStore?: WorldStore;
    plotStore?: PlotStore;
    gridWidth: number;
    gridHeight: number;
}