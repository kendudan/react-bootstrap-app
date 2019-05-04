import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames'

class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    };

    render () {
        const { onClick } = this.state;
        const { activeTab, label } = this.props;

        let liClassName = cn({
            'tab-list-active': activeTab === label
        });

        return (
            <li
                className={liClassName}
                onClick={onClick}
            >
                {label}
            </li>
        );
    }
}

export default Tab;
