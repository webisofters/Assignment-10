import styles from '../styles/SectionIV.module.css'
const SectionIV = () => {
    return (
        <div className={styles.containerFluid}>
            <div className={styles.row}>
                <h1 className={styles.heading}>Buying on Hypeindustry is simple!</h1>
                <div className={styles.all}>
                    <div className="col one">
                        <div className="col">
                            <ul>
                                <li className={styles.aaa}>Create a buyer account / profile, with all required <br/> fields: Full name, Company name or Store Name, <br/> Address, Credit Card info etc...</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                            <li className={styles.aaa}>The offer can either be: an “open stock inventory”, <br/> meaning you can select any sizes you want from the <br/> seller stock with of course a minimum quantity <br/> imposed by the seller (if he wants to), or a “buy all / <br/> take all offer”, which means that the seller wants <br/> you to buy all the quantities in that specific model. <br/> Usually “buy all deals” have a higher discounted <br/> purchase price. Keep in mind, once you place an <br/> order on an open stock model, the stock is live and <br/> updated right away for the next buyer, which will <br/> reflect less quantities in the inventory...until <br/> it reaches a: “sold out” status.</li>  
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                            <li className={styles.aaa}>Once the seller approves the order, (this might take <br/> 10 min or up to to 3 days) your credit card will be <br/> charged, and you will receive an email with a <br/> tracking number. NO charges will be done unless <br/> orders are APPROVED ! We created a dashboard for <br/> buyers so you can see all the information you need: <br/> invoice number, tracking number, carrier /shipper, <br/> pdf downloadable invoices etc...Now, you have your <br/> own excel accounting sheet with you all the time.</li>  
                            </ul>
                        </div>
                    </div>
                    <div className="col two">
                        <div className="col">
                            <ul>
                                <li className={styles.aaa}>You will then receive email alerts whenever any <br/> seller posts an offer on the platform. Then it is <br/> up to you to click on the link to view the offer or <br/> not. Of course, each email alert contains the <br/> offer details and models, so you know what <br/> has been posted, and if it is in any of your <br/> interest to purchase or not.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className={styles.aaa}>Once logged in, simply view the offer and click <br/> on any of the models you wish to order by <br/> clicking on the “open stock / or buy all” <br/> buttons.</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li className={styles.aaa}>Please keep in mind: there are no refunds, no returns, no <br/> order cancellations, all sales are <br/> finals unless the wrong items were shipped! <br/> This is a B2B Platform.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <button type='button' className={styles.btn}>Learn more</button>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}
export default SectionIV