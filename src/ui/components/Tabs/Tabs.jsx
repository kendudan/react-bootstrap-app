import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    };

    constructor (props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render () {
        const {
            onClickTabItem,
            props: {
                children
            },
            state: {
                activeTab
            }
        } = this;

        return (
            <div className={styles.parentTabs}>
                <ul className={styles.tabs}>
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ul>
                <div>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
