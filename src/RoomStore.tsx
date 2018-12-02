import { observable, toJS } from "mobx";
import {generateRandomInteger} from "./utils/GenerateRandomRange";
import {make2DArray} from "./utils/Make2DArray";


export class RoomStore {
	@observable public tileArray: any[][] = make2DArray(generateRandomInteger(10, 20), generateRandomInteger(10, 20))
    @observable public minWidth: number = 4;
    @observable public maxWidth: number = this.tileArray[0].length - 1;
    @observable public minHeight: number = 4;
    @observable public maxHeight: number = this.tileArray.length - 1;
	@observable public startX: number = 0;
	@observable public startY: number = 0;

	public land = {w:this.tileArray[0].length, h:this.tileArray.length};
	public roomArea = {w:0, h:0};

	public async initWorldLogic() {
		const width = generateRandomInteger(this.minWidth, this.maxWidth - 1);
		const height = generateRandomInteger(this.minHeight, this.maxHeight - 1);
		this.roomArea = {w:width, h:height};

		this.startX = generateRandomInteger(1, (this.land.w - 1) - this.roomArea.w);
		this.startY = generateRandomInteger(1, (this.land.h - 1) - this.roomArea.h);
		this.buildRoom();
	}
	
	private buildRoom() {
		let rowIndex = 0;
		let colIndex = 0;
		let roomWidth = 0;
		let roomHeight = 0;
		for (const row of this.tileArray) {
			if (rowIndex >= this.startY && rowIndex <= this.startY+this.roomArea.h) {
				colIndex = 0;
				roomWidth = 0;
				for (const col of row) {
					if (colIndex >= this.startX && colIndex <= this.startX+this.roomArea.w) {
						if (
							(roomWidth === 0 && roomHeight === 0) ||
							(roomWidth === this.roomArea.w - 1 && roomHeight === 0) ||
							(roomWidth === 0 && roomHeight === this.roomArea.h - 1) ||
							(roomWidth === this.roomArea.w - 1 && roomHeight === this.roomArea.h - 1)
						) {
							this.tileArray[rowIndex][colIndex] = "C";
						} else if (
							(colIndex > this.startX && colIndex < this.roomArea.w + this.startX && roomHeight === 0) ||
							(colIndex > this.startX && colIndex < this.roomArea.w + this.startX && roomHeight === this.roomArea.h - 1) ||
							(rowIndex > this.startY && rowIndex < this.roomArea.h - 1 + this.startY && roomWidth === 0) ||
							(rowIndex > this.startY && rowIndex < this.roomArea.h - 1 + this.startY && roomWidth === this.roomArea.w - 1)
						){
							this.tileArray[rowIndex][colIndex] = "W";
						}
						roomWidth++;
					}
					colIndex++;
				}
				roomHeight++;
			}
			rowIndex++;
		}
	}
	
}

