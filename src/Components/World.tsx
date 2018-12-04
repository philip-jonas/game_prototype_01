import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { BorderContainer } from 'src/Styles/styles';
import { IWorldProps } from 'src/Interfaces/IWorldProps';
import { Plot } from './Plot';


export const World = observer(({}) => 
    (
        <WorldBorder gridWidth={5} gridHeight={3} />
    )
);

@inject("worldStore")
@observer
export class WorldBorder extends React.Component<IWorldProps> {
    public componentDidMount() {
        const {worldStore, gridWidth, gridHeight} = this.props;
        worldStore.setWorldSize(gridWidth, gridHeight);
    }

    public render() {
        const {worldStore, gridWidth, gridHeight} = this.props;
        return <BorderContainer>
            {
                worldStore.worldGrid.map((row, index) => {
                    return row.map((col, ind) => {
                        return <Plot counter={ind} key={ind} />;
                    })
                })
            }
        </BorderContainer>
    }
}
