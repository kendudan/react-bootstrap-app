import React from 'react';
import styles from './Popup.css';
import PropTypes from 'prop-types';
import { ESC_KEY_CODE } from '../../../constants/constants';
import { connect } from 'react-redux';
import setLikesPost from '../../../actions/setLikesPost';
import setLikesMark from '../../../actions/setLikesMark';
import AddComment from './AddComment';

class Popup extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        closePopup: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired,
        setLikesPost: PropTypes.func.isRequired,
        setLikesMark: PropTypes.func.isRequired,
        posts: PropTypes.array.isRequired,
        marks: PropTypes.array.isRequired,
        fotosType: PropTypes.string.isRequired,
        isLiked: PropTypes.bool.isRequired,
        commentsList: PropTypes.array.isRequired
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
    state = {
        fotoId: this.props.id,
        image: this.props.image,
        likes: this.props.likes,
        isLiked: this.props.isLiked,
        comments: this.props.comments,
        commentsList: this.props.commentsList
    };

    addLike = (fotoId) => {
        const { posts, marks, fotosType } = this.props;
        const { likes } = this.state;
        if (fotosType === 'post') {
            const newPosts = posts.map(post => {
                if (post.id === fotoId) {
                    post.likes = post.likes + 1;
                    post.isLiked = true;
                }

                return post;
            });
            this.setState({ likes: likes + 1, isLiked: true });
            this.props.setLikesPost(newPosts);
        } else if (fotosType === 'mark') {
            const newMarks = marks.map(mark => {
                if (mark.id === fotoId) {
                    mark.likes = mark.likes + 1;
                    mark.isLiked = true;
                }
                return mark;
            });
            this.setState({ likes: likes + 1, isLiked: true });
            this.props.setLikesMark(newMarks);
        }
    };
    prevButtonClick = () => {
        const { fotoId } = this.state;
        const { posts, marks, fotosType } = this.props;
        if (fotosType === 'post') {
            const post = posts.find(item => item.id === (fotoId - 1));
            this.setState({
                fotoId: post.id,
                image: post.imgUrl,
                likes: post.likes,
                isLiked: post.isLiked,
                comments: post.comments,
                commentsList: post.commentsList
            });
        } else if (fotosType === 'mark') {
            const mark = marks.find(item => item.id === (fotoId - 1));
            this.setState({
                fotoId: mark.id,
                image: mark.imgUrl,
                likes: mark.likes,
                isLiked: mark.isLiked,
                comments: mark.comments,
                commentsList: mark.commentsList
            });
        }
    };
    nextButtonClick = () => {
        const { fotoId } = this.state;
        const { posts, marks, fotosType } = this.props;
        if (fotosType === 'post') {
            const post = posts.find(item => item.id === (fotoId + 1));
            this.setState({
                fotoId: post.id,
                image: post.imgUrl,
                likes: post.likes,
                isLiked: post.isLiked,
                comments: post.comments,
                commentsList: post.commentsList
            });
        } else if (fotosType === 'mark') {
            const mark = marks.find(item => item.id === (fotoId + 1));
            this.setState({
                fotoId: mark.id,
                image: mark.imgUrl,
                likes: mark.likes,
                isLiked: mark.isLiked,
                comments: mark.comments,
                commentsList: mark.commentsList
            });
        }
    };
    render () {
        const { closePopup, user, fotosType } = this.props;
        const { fotoId, image, likes, isLiked, comments, commentsList } = this.state;
        const fotos = fotosType === 'post' ? this.props.posts : this.props.marks;
        return (
            <div className={styles.modal}>
                <div className={styles.cover} onClick={() => closePopup()} onKeyDown={this.keyDownHandler} />
                {fotoId === 1 ? <span /> : <a href='#' onClick={this.prevButtonClick} className={styles.prevButton} />}
                <div className={styles.container}>
                    <img className={styles.img} id={fotoId} src={image} alt='foto'/>
                    <div className={styles.fotoInfo}>
                        <div className={styles.header}>
                            <img src={user.userImageURL} className={styles.avatar} alt='avatar' />
                            <p className={styles.userName}>{user.name}</p>
                        </div>
                        <div className={styles.comments}>
                            <ul className={styles.commentList}>
                                {commentsList.map((comment) => {
                                    return <li className={styles.comment} key={comment.commentId}>
                                        <div className={styles.commentsWrapper}>
                                            <img src={user.userImageURL} className={styles.avatar} alt='avatar' />
                                            <div className={styles.commentWrap}>
                                                <h2 className={styles.commentUserName}>{user.name}</h2>
                                                <span className={styles.commentText}>{comment.commentText}</span>
                                            </div>
                                        </div>
                                    </li>;
                                })}
                            </ul>
                        </div>
                        <div className={styles.likeInfo}>
                            <button className={isLiked === false ? styles.heartOutline : styles.heartOutlineClicked} onClick={(e) => this.addLike(fotoId, e)}/>
                            <button className={styles.commentOutline} /><br />
                            <p className={styles.text}>{likes} отметок "Нравится"</p>
                        </div>
                        <div className={styles.commentInput}>
                            <AddComment
                                fotoId={fotoId}
                                fotosType={fotosType}
                                comments={comments}
                                commentsList={commentsList}
                            />
                        </div>
                    </div>
                </div>
                {fotoId === fotos.length ? <span /> : <a href='#' onClick={this.nextButtonClick} className={styles.nextButton} />}
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
    setLikesPost: (payload) => {
        dispatch(setLikesPost(payload));
    },
    setLikesMark: (payload) => {
        dispatch(setLikesMark(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
