import * as React from 'react';
import Image from '../../Atoms/Image_component';
import Text from '../../Atoms/Text_component';
import Button from '../../Atoms/Button';


const NavBar = ({className = "", onClick, ...rest}) => {
    return (
        <div className = {className} onClick = {onClick} {...rest}>
           <div>
                <Image />
                <span></span>
                <Text />
                <Text />
                <Text />
           </div>
           <div>
                <Button />
                <Image />
                <Image />
           </div>
        </div>
    );
};

export default NavBar;
