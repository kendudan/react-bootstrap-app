import React from 'react';
import styles from './Popup.css';
import PropTypes from 'prop-types';
import { ESC_KEY_CODE } from '../../../constants/constants';
import { connect } from 'react-redux';
import setPosts from '../../../actions/setPosts';
import setLikes from '../../../actions/setLikes';

class Popup extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        closePopup: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        setLikes: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired
    };
    componentDidMount () {
        window.addEventListener('keydown', this.keyDownHandler);
        document.querySelector('body').classList.add(styles.stopScroll);
    }
    componentWillUnmount () {
        window.removeEventListener('keydown', this.keyDownHandler);
        document.querySelector('body').classList.remove(styles.stopScroll);
    }

    keyDownHandler = (e) => {
        const { closePopup } = this.props;
        if (e.keyCode === ESC_KEY_CODE) {
            closePopup();
        }
    };
    /*addComment = () => {
        const { fotosType, posts, marks } = this.props;
        if (fotosType === 'post') {
            this.props.setPosts({
                ...posts,
                commentsList: [... newComment]
            });
        }
    };*/
    addLike = (id) => {
        const { posts } = this.props;
        const post = posts.find((x) => x.id === id);
        this.props.setLikes({
            ...posts,
            post: post.likes + 1
        });
    };
    /*state = {
        likes: this.props.likes
    };
    addLikes = () => {
        const { likes } = this.state;
        this.setState({ likes: likes + 1 });
    }*/
    render () {
        const { id, image, likes, comments, closePopup, user } = this.props;
        return (
            <div className={styles.modal}>
                <div className={styles.cover} onClick={() => closePopup()} onKeyDown={this.keyDownHandler} />
                <a href='#' className={styles.prevButton} />
                <div className={styles.container}>
                    <img className={styles.img} id={id} src={image} alt='foto'/>
                    <div className={styles.fotoInfo}>
                        <div className={styles.header}>
                            <img src={user.userImageURL} className={styles.avatar} alt='avatar' />
                            <p className={styles.userName}>{user.name}</p>
                        </div>
                        <div className={styles.comments}>
                            {comments}
                        </div>
                        <div className={styles.likeInfo}>
                            <button className={styles.heartOutline} onClick={(e) => this.addLike(id, e)}/>
                            <button className={styles.commentOutline} />
                            {likes}
                        </div>
                        <div className={styles.commentInput}>
                            <input type='text' placeholder='Добавьте комментарий' />
                            <button>Опубликовать</button>
                        </div>
                    </div>
                </div>
                <a href='#' className={styles.nextButton} />
            </div>
        );
    }
}
const mapStateToProps = ({ userInfo, posts, marks }) => {
    return {
        user: userInfo.user,
        posts: posts.posts,
        marks: marks.marks
    };
};
const mapDispatchToProps = (dispatch) => ({
    setLikes: (payload) => {
        dispatch(setLikes(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
