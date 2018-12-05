import { observable, computed, action, toJS } from "mobx";
import { make2DArray } from "src/utils/Make2DArray";
import { generateRandomInteger } from "src/utils/GenerateRandomRange";

interface IPosition {
    col: number;
    row: number;
}

export class PlotStore {
    @observable public worldGrid: IPosition[] = [];
    @observable public roomCount = 0;
    @observable public maxRooms = 0;
    @observable public plotsX = 0;
    @observable public plotsY = 0;
    public plotOffset: number = 4;

    public initPlots(plotsX: number = this.plotOffset, plotsY: number = this.plotOffset) {
        this.plotsX = plotsX;
        this.plotsY = plotsY;
        this.maxRooms = (this.plotsX * this.plotsY) - this.plotOffset;
        this.layoutPlots();
    }

    public layoutPlots() {
        do {
            const position: IPosition = {
                col: generateRandomInteger(0, this.plotsX-1),
                row: generateRandomInteger(0, this.plotsY-1)
            };

            const found: IPosition[] = this.worldGrid.filter((value: IPosition) => {
                return position.col === value.col && position.row === value.row;
            });

            if (found.length === 0) {
                this.worldGrid.push(
                    position
                );
                this.roomCount ++;
            }
        } while (this.worldGrid.length < this.maxRooms);
    }

    public isPlot(col, row): boolean {
        const found: IPosition[] = this.worldGrid.filter((value: IPosition) => {
            return col === value.col && row === value.row;
        });

        if (found.length > 0) {
            return true;
        }
        return false;
    }

}