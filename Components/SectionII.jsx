import {faGreaterThan} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import C from '../Assets/C.jpg'
import Image from "next/image"
import styles from '../styles/SectionII.module.css'

const SectionII = () => {
    return (
        <div className={styles.all}>
            <div className={styles.row}>
                <div className={styles.data1}>
                    <p className={styles.para}>Buy cheaper because of the bulk volume discount and resell <br/> worldwide to make a small margin and keep the volume and <br/> recurrence active! The key to make your money fast .</p>
                    <button type="button" className={styles.btn}>Read More</button> <FontAwesomeIcon icon={faGreaterThan} color="#67CBAB"/>
                </div>
                <div className={styles.data2}>
                    <Image src={C} alt="pic" width={600} />
                </div>
            </div>
        </div>
    )
}
export default SectionII