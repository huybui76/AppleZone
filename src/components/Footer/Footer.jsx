import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer_container'>
            <div className="footer_content_container">
                <p className="footer_notice">
                    1. Your bank may charge you fees if your debit card account contains insufficient funds to make loan repayments.
                    Apple Pay Later loans are subject to eligibility and approval. Available only in the U.S. May not be available
                    in all states. Not available in U.S. territories. Loans made by Apple Financing LLC, NMLS #2154940. CA loans
                    made or arranged pursuant to a California Financing Law license. To use Apple Pay Later, you must have an
                    iPhone or iPad updated to the latest version of iOS or iPadOS. Update to the latest version by going to
                    Settings {'>'} General {'>'} Software Update. Tap Download and Install. For more eligibility details,
                    see <a href="https://support.apple.com/en-us/HT212967" className="support-apple-link">https://support.apple.com/en-us/HT212967</a>.
                    <br />
                    <br />
                    2. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
                    Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for
                    credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or
                    added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the
                    description provided when estimate was made.
                    <br />
                    <br />
                    Apple Vision Pro has not been authorized as required by the rules of the Federal Communications Commission.
                    This device is not, and may not be, offered for sale or lease, or sold or leased, until authorization is obtained.
                    <br />
                    <br />

                </p>

                <hr />

                <div className="container_1">

                    <div className="footer-column">

                        <div className="footer_header-content">
                            Shop and Learn
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Store</div>
                            <div className='quick-links' id=''>Mac</div>
                            <div className='quick-links' id=''>iPad</div>
                            <div className='quick-links' id=''>iPhone</div>
                            <div className='quick-links' id=''>Watch</div>
                            <div className='quick-links' id=''>Vision</div>
                            <div className='quick-links' id=''>AirPods</div>

                        </div>

                        <div className="footer_header-content">
                            Apple Wallet
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Wallet</div>
                            <div className='quick-links' id=''>Apple Card</div>

                        </div>

                    </div>

                    <div className=''>
                        <div className="footer_header-content">
                            Account
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Manage Your Apple ID</div>
                            <div className='quick-links' id=''>Apple Store Account</div>
                            <div className='quick-links' id=''>iCloud.com</div>
                        </div>

                        <div className="footer_header-content">
                            Entertainment
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Apple One</div>
                            <div className='quick-links' id=''>Apple TV+</div>

                            <div className='quick-links' id=''>Apple Postcasts</div>
                            <div className='quick-links' id=''>Apple Books</div>
                            <div className='quick-links' id=''>Apple Store</div>
                        </div>
                    </div>

                    <div className="footer-column">
                        <div className="footer_header-content">
                            Apple Store
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Find a Store</div>
                            <div className='quick-links' id=''>Genius Bar</div>

                            <div className='quick-links' id=''>Financing</div>
                            <div className='quick-links' id=''>Carrier Deals at Apple</div>
                            <div className='quick-links' id=''>Order Status</div>
                            <div className='quick-links' id=''>Shopping Help</div>
                        </div>



                    </div>

                    <div className="footer-column">
                        <div className="footer_header-content">
                            For Business
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Apple and Business</div>
                            <div className='quick-links' id=''>Shop for Business</div>
                        </div>

                        <div className="footer_header-content">
                            For Education
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Apple and Education</div>
                            <div className='quick-links' id=''>Shop for K-12</div>
                            <div className='quick-links' id=''>Shop for College</div>
                        </div>

                        <div className="footer_header-content">
                            For Healthcare
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Apple in Healthcare</div>
                            <div className='quick-links' id=''>Health on Apple Watch</div>
                            <div className='quick-links' id=''>Health Records on iPhone</div>
                        </div>


                    </div>


                    <div className="footer-column">
                        <div className="footer_header-content">
                            Apple Value
                        </div>

                        <div className="footer_content">
                            <div className='quick-links' id=''>Accessibility</div>
                            <div className='quick-links' id=''>Education</div>
                            <div className='quick-links' id=''>Environment</div>
                            <div className='quick-links' id=''>Inclusion and Diversity</div>
                            <div className='quick-links' id=''>Privacy</div>
                            <div className='quick-links' id=''>Racial Equity and Justice</div>
                            <div className='quick-links' id=''>Supplier Responsibility</div>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer