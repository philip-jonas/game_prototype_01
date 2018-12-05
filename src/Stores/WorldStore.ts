import { observable, computed, action } from "mobx";
import { make2DArray } from "src/utils/Make2DArray";

export class WorldStore {
    @observable public worldGridArray: number[][];
    @observable public worldWidth: number = 0;
    @observable public worldHeight: number = 0;

    
    
    @action public setWorldSize = (width: number, height: number) => {
        this.worldWidth = width;
        this.worldHeight = height;
        
    }

    @computed get worldGrid() {
        return make2DArray(this.worldWidth, this.worldHeight);
    } 

    
}