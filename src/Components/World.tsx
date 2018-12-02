import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { WorldStore } from 'src/Stores/WorldStore';
import styled from 'styled-components';


const BorderContainer = styled.div`
    width: 500px;
    height: 500px;
    border: 2px solid black;
`;

export const World = observer(({}) => 
    (
        <WorldBorder gridWidth={5} gridHeight={3} />
    )
);

interface IWorldProps {
    worldStore?: WorldStore;
    gridWidth: number;
    gridHeight: number;
}


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
                worldStore.worldGrid.map((row) => {
                    return row;
                })
            }
        </BorderContainer>
    }
}