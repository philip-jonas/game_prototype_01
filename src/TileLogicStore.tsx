import { observable, toJS } from "mobx";

export class TileLogicStore {
	@observable public gameWorldGrid = [];
    @observable public worldWidth = 5;
    @observable public worldHeight = 3;
    @observable public roomCount = 0;
    @observable public maxRooms = 12;
    

    public layoutRooms(replace:boolean = false) {
        for (let rowIndex = 0; rowIndex < this.worldHeight; rowIndex++) {
            if (!replace) {
                this.gameWorldGrid[rowIndex] = [];
            }
            for (let colIndex = 0; colIndex < this.worldWidth; colIndex++) {
                const room: boolean = Math.random()*10000 < 500;
                if (room && this.roomCount < this.maxRooms) {
                    if (!replace) {
                        this.gameWorldGrid[rowIndex].push('#');
                        this.roomCount++;
                    } else {
                        if (this.gameWorldGrid[rowIndex][colIndex] !== '#') {
                            this.gameWorldGrid[rowIndex][colIndex] = '#';
                            this.roomCount++;
                        }
                    }
                } else {
                    if (replace && this.gameWorldGrid[rowIndex][colIndex] !== '#') {
                        this.gameWorldGrid[rowIndex][colIndex] = 'O';
                    } else if (!replace) {
                        this.gameWorldGrid[rowIndex].push('O');
                    }
                }
            }
        }
        this.validateRooms();
    }

    private validateRooms() {
        if (this.roomCount < this.maxRooms) {
            this.layoutRooms(true);
            return true;
        }
        console.log("GAME WORLD ---------------");
        console.table(toJS(this.gameWorldGrid));
        this.checkDoors();
    }

    private checkDoors() {
        const rows = this.gameWorldGrid.length;
        const roomsCopy = toJS(this.gameWorldGrid);
        for (let row = 0; row < rows; row++) {
            const cols = this.gameWorldGrid[row].length;
            for (let col = 0; col < this.gameWorldGrid[row].length; col++) {
                const exits = {t: 0, r: 0, b: 0, l: 0};
                if (this.gameWorldGrid[row][col] === '#') {
                    if (row > 0) {
                        if (this.gameWorldGrid[row - 1][col] === "#") {
                            exits.t = 1;
                        }
                    }
                    if (col + 1 < cols) {
                        if (this.gameWorldGrid[row][col + 1] === "#") {
                            exits.r = 1;
                        }
                    }
                    if (col > 0) {
                        if (this.gameWorldGrid[row][col - 1] === "#") {
                            exits.l = 1;
                        }
                    }
                    if (row + 1 < rows) {
                        if (this.gameWorldGrid[row + 1][col] === "#") {
                            exits.b = 1;
                        }
                    }

                    roomsCopy[row][col] = toJS(exits);
                }
            }
        }
        this.gameWorldGrid = toJS(roomsCopy);

        console.log("ROOM EXITS ---------------");
        console.table(toJS(this.gameWorldGrid));
    }
}

