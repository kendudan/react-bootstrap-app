import React from 'react';
import styles from './Popup.css';
import PropTypes from 'prop-types';

class Popup extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        image: PropTypes.string,
        likes: PropTypes.number,
        comments: PropTypes.number,
        closePopup: PropTypes.func
    };
    constructor (props) {
        super(props);
        this.state = {
            image: '',
            likes: 0,
            comments: []
        };
    }
    componentDidMount () {
        window.addEventListener('keydown', this.keyDownHandler);
    }
    componentWillUnmount () {
        window.removeEventListener('keydown', this.keyDownHandler);
    }

    keyDownHandler = (e) => {
        const { closePopup } = this.props;
        if (e.keyCode === 27) {
            closePopup();
        }
    };
    render () {
        const { id, image, likes, comments, closePopup } = this.props;
        return (
            <div className={styles.modal}>
                <div className={styles.cover} onClick={() => closePopup()} onKeyDown={this.keyDownHandler} />
                <div className={styles.container}>
                    <img className={styles.img} id={id} src={image} alt='foto'/>
                    <div className={styles.fotoInfo}>
                        <div className={styles.header}>
                            Leo
                        </div>
                        <div className={styles.comments}>
                            Comments {comments}
                        </div>
                        <div className={styles.likeInfo}>
                            {likes}
                        </div>
                        <div className={styles.commentInput}>
                            Add comment
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popup;
