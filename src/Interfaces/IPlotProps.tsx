import { PlotStore } from "src/Stores/PlotStore";
import { WorldStore } from "src/Stores/WorldStore";

export interface IPlotProps {
    plotStore?: PlotStore;
    worldStore?: WorldStore;
    row:number;
    col:number;
}