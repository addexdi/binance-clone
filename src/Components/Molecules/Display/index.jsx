import * as React from 'react';
import Image from '../../Atoms/Image_component';
import Text from '../../Atoms/Text_component';


const Display = ({className = "", onClick, ...rest}) => {
    return (
        <div onClick={onClick} className={className} {...rest}>
            <Image />
            <Text />
            <Text />
        </div>
    );
};

export default Display;
