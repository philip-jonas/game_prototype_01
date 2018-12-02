import {observer} from 'mobx-react';
import * as React from 'react';

export const World = observer(({}) => 
    (
        <div>WAZZAUP</div>
    )
);

const Border = observer(({gridWidth: number, gridHeight: number}) => {
        
});