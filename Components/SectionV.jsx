import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/SectionV.module.css'

const SectionV = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.col1}>
                        <FontAwesomeIcon icon={ faWallet } color="black" size="2x"/>
                        <h1 className={styles.heading}>Shipping for buyers</h1>
                        <p className={styles.para}>All of our items are being shipped from several warehouses/stores in the USA and worldwide, and usually ships within 24 H to 5 business days depending on the seller’s shipping time.</p>
                        <button type="button" className={styles.btn}>Read more</button> <FontAwesomeIcon icon={ faGreaterThan } color="#677088"/>
                    </div>
                    <div className={styles.col2}>
                    <FontAwesomeIcon icon={ faBox } color="black" size="2x"/>
                        <h1 className={styles.heading}>Shipping for sellers</h1>
                        <p className={styles.para}>Once you have approved the purchase, you can request for your labels by email at: shipping@hypeindustry.com! Make sure to include: Buyer’s details...</p>
                        <button type="button" className={styles.btn}>Read more</button> <FontAwesomeIcon icon={ faGreaterThan } color="#677088"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionV