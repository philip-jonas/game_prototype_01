import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { IPlotProps } from 'src/Interfaces/IPlotProps';
import { PlotContainer } from 'src/Styles/styles';

@inject('worldStore','plotStore')
@observer
export class Plot extends React.Component<IPlotProps> {

    public render() {
        const { row, col, plotStore} = this.props;
        const isPlot = plotStore.isPlot(col, row);
        return <PlotContainer>
            {
                isPlot && <div key={`${col}_${row}`}>PLOT</div>
            }
        </PlotContainer>
    }
}