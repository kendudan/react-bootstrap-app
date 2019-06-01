import styles from './Foto.css';
import Tabs from '../Tabs/Tabs';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FotoWrap from './FotoWrap';

class Fotos extends React.Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        marks: PropTypes.array.isRequired
    };
    render () {
        const { posts, marks } = this.props;
        return (
            <div className={styles.parentTabs}>
                <Tabs className={styles.tabs}>
                    <div label="ПУБЛИКАЦИИ" >
                        <FotoWrap fotos={posts} fotosType="post" />
                    </div>
                    <div label="ОТМЕТКИ ">
                        <FotoWrap fotos={marks} fotosType="mark" />
                    </div>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = ({ posts, marks }) => {
    return {
        posts: posts.posts,
        marks: marks.marks
    };
};

export default connect(mapStateToProps)(Fotos);
