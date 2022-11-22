import styles from "../styles/Navbar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Logo from "../Assets/Logo.png"

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div>
                <ul className={styles.navlist}>
                    <li><Image src={Logo} alt="pic" height={30} width={30} /></li>
                    <li className={styles.listItem}>HYPE OFFER</li>
                    <li className={styles.listItem}>HYPEINDUSTRY</li>
                    <li className={styles.listItem}>SHIPPING</li>
                    <li className={styles.listItem}>SELLER RQUEST FORM</li>
                </ul>
            </div>
            <div>
                <FontAwesomeIcon icon={faUser} color="black" /><button>LOGIN</button>
                <FontAwesomeIcon icon={faSearch} color="black" /><input type="text" placeholder="Brands , Models ..." />
            </div>
        </nav>
    )
}
export default Navbar