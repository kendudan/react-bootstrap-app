import React from 'react';
import Popup from '../Popup/Popup';
import styles from './Foto.css';
import PropTypes from 'prop-types';

class Foto extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        fotosType: PropTypes.string.isRequired
    };
    constructor (props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }
    togglePopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        });
    };
    render () {
        const { id, image, likes, comments, fotosType } = this.props;
        return (
            <li key={id}>
                <div className={id % 3 === 0 ? styles.imgWrapper3 : styles.imgWrapper}>
                    <img className={styles.img} src={image} alt='leo' />
                    <div className={styles.spans} onClick={() => this.togglePopup()}>
                        <span className={styles.likes} /><p className={styles.p}>{likes}</p>
                        <span className={styles.comments} /><p className={styles.p}>{comments}</p>
                    </div>
                </div>
                {
                    this.state.showPopup &&
                        <Popup
                            id={id}
                            image={image}
                            likes={likes}
                            comments={comments}
                            closePopup={() => this.togglePopup()}
                            fotosType={fotosType}
                        />
                }
            </li>
        );
    }
}

export default Foto;
