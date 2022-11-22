import styles from '../styles/SectionVI.module.css'

const SectionVI = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className="col"></div>
                    <div className="col">
                        <p className={styles.heading}>HYPEINDUSTRY</p>
                        <p className={styles.para}>Concept</p>
                        <p className={styles.para}>Buyers guide</p>
                        <p className={styles.para}>sellers guide</p>
                    </div>
                    <div className="col">
                        <p className={styles.heading}>HYPE OFFER</p>
                        <p className={styles.para}>Footwear</p>
                        <p className={styles.para}>Apparel</p>
                        <p className={styles.para}>Accessories</p>
                    </div>
                    <div className="col">
                        <p className={styles.heading}>SHIPPING</p>
                        <p className={styles.para}>Buyers</p>
                        <p className={styles.para}>Sellers</p>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                        <p className={styles.heading}>CONTACT US</p>
                        <p className={styles.para}>shipping@hypeindustry.com</p>
                        <p className={styles.para}>sales@hypindustry.com</p>
                    </div>
                    <div className="col"></div>
                </div>
                <hr />
                <p className={styles.para1}>© 2022 HypeIndustry</p>
            </div>
        </div>
    )
}
export default SectionVI