import * as React from 'react';
import './style.css';


const Image = ({className = "", alt = '', src , onClick, ...rest}) => {
    return (
        <div className = {className} onClick = {onClick} alt={alt} {...rest}>
            {src}
        </div>
    );
};

export default Image;
