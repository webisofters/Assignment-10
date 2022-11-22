// R.jgp" alt="hghggh" width="230" height="230"
import styles from "../styles/Hero.module.css"
import Image from "next/image"
import A from '../Assets/A.jpg'
const Hero = () => {
    return (
        <div className={styles.all}>
            <div className={styles.row}>
                <div className={styles.data1}>
                    <h1 className={styles.heading1}>New marketplace that <br /> allows you to buy in bulk</h1>
                    <p className={styles.para1}>Hypeindustry is a one-of-a-kind Platform Marketplace offering Bulk/ <br /> Wholesale goods from Stores, Boutiques,Wholesalers & Resellers for the <br /> Footwear,Apparel & Accessory industry.</p>
                    <button type="button" className={styles.btn}>Read More</button>
                </div>
                <div className={styles.data2}>
                    <Image src={A} alt="pic" width={600} />
                </div>
            </div>
        </div>
    )
}
export default Hero