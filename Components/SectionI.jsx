import Image from "next/image"
import B from '../Assets/B.jpg'
import styles from '../styles/SectionI.module.css'

const SectionI = () => {
    return (
        <div className={styles.all}>
            <div className={styles.row}>
                <div className={styles.data1}>
                    <Image src={B} alt="pic" width={600} />
                </div>
                <div className={styles.data2}>
                    <h1 className={styles.heading2}>Why HypeIndustry and what is it</h1>
                    <p className={styles.para2}>Hypeindustry is a one-of-a-kind Platform Marketplace offering <br /> Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & <br /> Resellers for the Footwear, Apparel & Accessory industry! Basically <br /> a new marketplace that allows you to buy in bulk (only) footwear, <br /> apparel etc...</p>
                </div>
            </div>
        </div>
    )
}
export default SectionI