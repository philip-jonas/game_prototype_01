import {observer, inject} from 'mobx-react';
import * as React from 'react';
import { PlotStore } from 'src/Stores/PlotStore';
import { IPlotProps } from 'src/Interfaces/IPlotProps';

@inject('worldStore','plotStore')
@observer
export class Plot extends React.Component<IPlotProps> {

    public render() {
        const { counter } = this.props;
        return <div>- {counter}</div>
    }
}