import React from 'react';
import { connect } from 'react-redux';
import setPosts from '../../../actions/setPosts';
import setMarks from '../../../actions/setMarks';
import PropTypes from 'prop-types';
import styles from './Popup.css';

class AddComment extends React.Component {
    constructor (props) {
        super(props);
        this.state = { comment: '' };
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    static propTypes = {
        posts: PropTypes.array.isRequired,
        marks: PropTypes.array.isRequired,
        fotosType: PropTypes.string.isRequired,
        setPosts: PropTypes.func.isRequired,
        setMarks: PropTypes.func.isRequired,
        comments: PropTypes.number.isRequired,
        fotoId: PropTypes.number.isRequired
    };
    onChangeComment = (event) => {
        this.setState({ comment: event.target.value });
    };
    onSubmit = (fotoId, e) => {
        e.preventDefault();
        const { posts, marks, fotosType, comments } = this.props;
        const { comment } = this.state;
        if (fotosType === 'post' && comment !== '') {
            const newPosts = posts.map(post => {
                if (post.id === fotoId) {
                    post.commentsList.unshift({ commentId: comments + 1, commentText: comment });
                    post.comments = post.comments + 1;
                }
                return post;
            });
            this.props.setPosts(newPosts);
            this.setState({ comment: '' });
        } else if (fotosType === 'mark' && comment !== '') {
            const newMarks = marks.map(mark => {
                if (mark.id === fotoId) {
                    mark.commentsList.unshift({ commentId: comments + 1, commentText: comment });
                    mark.comments = mark.comments + 1;
                }
                return mark;
            });
            this.props.setMarks(newMarks);
            this.setState({ comment: '' });
        }
    };
    render () {
        const { fotoId } = this.props;
        return (
            <form>
                <input
                    className={styles.input}
                    onChange={this.onChangeComment}
                    value={this.state.comment}
                    type='text'
                    placeholder='Добавьте комментарий...'
                    maxLength='100'
                />
                <button className={styles.shareButton} onClick={(e) => this.onSubmit(fotoId, e)} type='submit'>Опубликовать</button>
            </form>
        );
    }
}

const mapStateToProps = ({ posts, marks }) => {
    return {
        posts: posts.posts,
        marks: marks.marks
    };
};

const mapDispatchToProps = (dispatch) => ({
    setPosts: (payload) => {
        dispatch(setPosts(payload));
    },
    setMarks: (payload) => {
        dispatch(setMarks(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
