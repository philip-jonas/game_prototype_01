import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { BorderContainer } from 'src/Styles/styles';
import { IWorldProps } from 'src/Interfaces/IWorldProps';
import { Plot } from './Plot';
import styled from 'styled-components';


export const World = observer(({}) => 
    (
        <WorldBorder gridWidth={5} gridHeight={3} />
    )
);


const Row = styled.div`
    width: 100%;
    float: left;
`;

@inject("worldStore", "plotStore")
@observer
export class WorldBorder extends React.Component<IWorldProps> {
    public componentDidMount() {
        const {worldStore, gridWidth, gridHeight, plotStore} = this.props;
        worldStore.setWorldSize(gridWidth, gridHeight);
        plotStore.initPlots(gridWidth, gridHeight);
    }

    public render() {
        const {worldStore} = this.props;
        return <BorderContainer>
            {
                worldStore.worldGrid.map((row, rowIndex) => {
                    return <Row key='row'>
                        {
                            row.map((col, colIndex) => {
                                return <Plot col={colIndex} row={rowIndex} key="Plot"/>;
                            })
                        }
                    </Row>
                })
            }
        </BorderContainer>
    }
}
