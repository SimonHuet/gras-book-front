import React from 'react';
import classNames from 'classnames'

export default (props) => 
    <button 
        type="button"
        className={ buttonClasses(props) }
        disabled={props.disabled}
    >
        {props.placeholder}
</button>



const buttonClasses = (props) =>
    classNames( 'btn btn-primary',
        {
            'btn-sm' : props.small,
            'btn-md' : props.medium, 
            'btn-lg' : props.large
        }
    )