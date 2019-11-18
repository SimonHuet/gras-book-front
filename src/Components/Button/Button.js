import React from 'react';
import classNames from 'classnames';

export default (props) => {
    const { disabled, placeholder} = props;
    return <button
        type="button"
        className={buttonClasses(props)}
        disabled={disabled}
    >
        {placeholder}
    </button>;
};



const buttonClasses = (props) =>
    classNames('btn btn-primary',
        {
            'btn-sm': props.small,
            'btn-md': props.medium,
            'btn-lg': props.large
        }
    );