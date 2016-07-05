import React from 'react';

const RefreshButton = (props) => {
    const handleClick = (event) => {
        event.preventDefault();

        props.onClick(event);
    };
    const { children, title, ...others } = props;

    return (
        <a
            {...others}
            href="#"
            title={title}
            className="btn-icon btn-refresh"
            onClick={handleClick}
        >
        {children ||
            <i className="fa fa-refresh"></i>
        }
        </a>
    );
};

RefreshButton.propTypes = {
    children: React.PropTypes.node,
    title: React.PropTypes.string,
    onClick: React.PropTypes.func.isRequired
};
RefreshButton.defaultProps = {
    title: 'Refresh'
};

export default RefreshButton;
