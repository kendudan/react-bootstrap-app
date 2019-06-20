import React from 'react';
import styles from './Header.css';

class Header extends React.Component {
    state = {
        isScrolled: false
    };
    componentDidMount () {
        window.addEventListener('scroll', this.scrollDown);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.scrollDown);
    }

    scrollDown = () => {
        const { isScrolled } = this.state;

        if (isScrolled && window.pageYOffset === 0) {
            this.setState({
                isScrolled: false
            });
        } else if (!isScrolled && window.pageYOffset !== 0) {
            this.setState({
                isScrolled: true
            });
        }
    };
    render () {
        const { isScrolled } = this.state;
        return (
            <nav className={isScrolled ? styles.navScrolled : styles.nav}>
                <div className={styles.navMenus}>
                    <div>
                        <a className={styles.navBrandLogo} href="/" />
                    </div>
                    <div>
                        <input type="search" className={styles.search} placeholder="Поиск" />
                    </div>
                    <div>
                        <button className={styles.logInBtn}>Войти</button>
                        <button className={styles.signUpBtn}>Зарегистрироваться</button>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;
