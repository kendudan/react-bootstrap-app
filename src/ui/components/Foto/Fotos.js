import styles from './Foto.css';
import Tabs from '../Tabs/Tabs';
import React from 'react';
import { connect } from 'react-redux';
import { posts } from '../../../store/posts';
import { marks } from '../../../store/marks';
import PropTypes from 'prop-types';
import FotoWrap from './FotoWrap';

class Fotos extends React.Component {
    static propTypes = {
        posts: PropTypes.array,
        marks: PropTypes.array
    };
    render () {
        const { posts, marks } = this.props;
        return (
            <div className={styles.parentTabs}>
                <Tabs className={styles.tabs}>
                    <div label="ПУБЛИКАЦИИ" >
                        <FotoWrap fotos={posts} />
                    </div>
                    <div label="ОТМЕТКИ ">
                        <FotoWrap fotos={marks} />
                    </div>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: posts,
        marks: marks
    };
};

export default connect(mapStateToProps)(Fotos);
