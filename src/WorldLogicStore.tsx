import { observable, toJS } from "mobx";

function make2DArray(width: number, height: number): number[][] {
	return Array.from({length: height}, () => Array.from({length: width}, () =>  0))
}



export class WorldLogicStore {
	@observable public tileArray: any[][] = make2DArray(this.generateRandomInteger(10, 20), this.generateRandomInteger(10, 20))

	public land = {w:this.tileArray[0].length, h:this.tileArray.length};
	public roomArea = {w:0, h:0};

    @observable public minWidth: number = 4;
    @observable public maxWidth: number = this.tileArray[0].length - 1;
    @observable public minHeight: number = 4;
    @observable public maxHeight: number = this.tileArray.length - 1;
	@observable public startX: number = 0;
	@observable public startY: number = 0;

	public async initWorldLogic() {
		const width = await this.generateRandomInteger(this.minWidth, this.maxWidth - 1);
		const height = await this.generateRandomInteger(this.minHeight, this.maxHeight - 1);
		this.roomArea = {w:width, h:height};

		this.startX = await this.generateRandomInteger(1, (this.land.w - 1) - this.roomArea.w);
		this.startY = await this.generateRandomInteger(1, (this.land.h - 1) - this.roomArea.h);
		this.buildRoom();
	}
    
    private generateRandomInteger(min, max): number {
        return Math.floor(min + Math.random()*(max + 1 - min))
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
		
		console.log("ROOM ---------------");
		console.table(toJS(this.tileArray));
	}
	
}

