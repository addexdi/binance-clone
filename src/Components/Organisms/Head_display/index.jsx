import * as React from 'react';
import Text from '../../Atoms/Text_component';
import Dropdown from '../../Molecules/Dropdown';
import Display from '../../Molecules/Display';

const Topdisplay = ({className = "", onClick, ...rest}) => {
    return (
        <div className = {className} onClick = {onClick} {...rest}>
           <Dropdown />
           <Text />
           <span></span>
           <Display />
           <span></span>
           <Display />
           <span></span>
           <Display />
           <span></span>
           <Display />
        </div>
    );
};

export default Topdisplay;
