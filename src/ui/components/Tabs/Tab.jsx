import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';
import grid from '/client/images/activity-grid.png'

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
        const {
            onClick,
            props: {
                activeTab,
                label
            }
        } = this;

        return (
            <li
                className={activeTab === label ? styles.tabListItemActive : styles.tabListItem}
                onClick={onClick}
            >
                <img className={styles.icon} src={grid} alt='grid' />{label}
            </li>
        );
    }
}

export default Tab;
