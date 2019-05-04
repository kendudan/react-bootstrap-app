import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
    static propTypes = {
        tabItems: PropTypes.instanceOf(Array).isRequired
    };

    constructor (props) {
        super(props);

        this.state = {
            activeTab: this.props.tabItems[0].props.label
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
    };

    render () {
        const { onClickTabItem, activeTab } = this.state
        const { tabItems } = this.props;

        return (
            <div>
                <ol >
                    {tabItems.map((item) => {
                        const { label } = item.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
                <div>
                    {tabItems.map((item) => {
                        if (item.props.label !== activeTab) return undefined;
                        return item.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;
