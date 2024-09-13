import styles from './Header.module.css'

function Header(){
    return(
        <header classNames={styles.nav}>
            <h1>My website</h1>
            <nav >
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header