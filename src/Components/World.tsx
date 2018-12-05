import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { BorderContainer } from 'src/Styles/styles';
import { IWorldProps } from 'src/Interfaces/IWorldProps';
import { Plot } from './Plot';


export const World = observer(({}) => 
    (
        <WorldBorder gridWidth={5} gridHeight={5} />
    )
);

@inject("worldStore", "plotStore")
@observer
export class WorldBorder extends React.Component<IWorldProps> {
    public componentDidMount() {
        const {worldStore, gridWidth, gridHeight, plotStore} = this.props;
        worldStore.setWorldSize(gridWidth, gridHeight);
        plotStore.initPlots(gridWidth, gridHeight);
    }

    public render() {
        const {worldStore, gridWidth, gridHeight} = this.props;
        return <BorderContainer>
            {
                worldStore.worldGrid.map((row, rowIndex) => {
                    return row.map((col, colIndex) => {
                        return <Plot col={colIndex} row={rowIndex} key={`${colIndex}_${rowIndex}`}/>;
                    })
                })
            }
        </BorderContainer>
    }
}
