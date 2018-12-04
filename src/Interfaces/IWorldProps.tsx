import { WorldStore } from "src/Stores/WorldStore";

export interface IWorldProps {
    worldStore?: WorldStore;
    gridWidth: number;
    gridHeight: number;
}