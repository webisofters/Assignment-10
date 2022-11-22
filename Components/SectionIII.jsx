import styles from '../styles/SectionIII.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SectionIII = ( ) => {
    return (
        <div className={styles.containerFluid}>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                <div className={styles.all}>
            <h1 className={styles.heading}>Selling on HypeIndustry</h1><br />
            <div className={styles.data}>
                <div className={styles.btngrp}>
                    <button className={styles.btn}>BECOME A SELLER</button>
                    <button className={styles.btn}>CREATE A LISTING</button>
                    <button className={styles.btn}>SELLING FEES</button>
                    <button className={styles.btn}>CONDITION OF ITEMS</button>
                </div><br /><br />
                <div>
                    <h1 className={styles.heading1}>How do I sell on HypeIndustry?</h1>
                    <p className={styles.para}>----------------------------------------------------------------------------------------------</p>
                    <p className={styles.para1}>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that <br /> have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all <br /> the required information. We will notify you as soon as your request has been approved.</p>
                </div>
                <div>
                    <h1 className={styles.heading2}>I requested to become a SELLER, how long will it take to get approved?</h1>
                    <h1 className={styles.heading2}>How do I delete my Account?</h1>
                    <h1 className={styles.heading2}>Can I share my seller privileges with others?</h1>
                    <h1 className={styles.heading2}>Can I create several Seller Accounts?</h1>
                </div>
            </div>
        </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
export default SectionIII