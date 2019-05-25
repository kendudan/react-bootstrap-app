import React from 'react';
import styles from './Foto.css';
import Foto from './Foto';
import PropTypes from 'prop-types';

class FotoWrap extends React.Component {
    static propTypes = {
        fotos: PropTypes.array
    };
    render () {
        const { fotos } = this.props;
        return (
            <ul className={styles.fotoRow}>
                {
                    fotos.map((foto) =>
                        <Foto id={foto.id} key={foto.id} image={foto.imgUrl} likes={foto.likes} comments={foto.comments}/>
                    )
                }
            </ul>
        );
    }
}

export default FotoWrap;
