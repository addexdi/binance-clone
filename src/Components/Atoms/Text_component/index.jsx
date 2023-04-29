import * as React from 'react';


const Text = ({className = "", children , onClick, ...rest}) => {
    return (
        <p className = {className} onClick = {onClick} {...rest}>
            {children}
        </p>
    );
};

export default Text;
