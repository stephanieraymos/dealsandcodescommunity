import React from 'react'

export default function SellerTerms() {
    return (
        <div>
            <button onClick="">Amazon Seller</button>
            <button onClick="">Non-Amazon Seller</button>
            {/* Amazon Seller */}
            <button onClick="" tooltip="Your product reviews must be 3.5 stars or higher and must be shipped by Amazon">Good reviews and FBA</button>
            <button onClick="" tooltip="Select this option if your product reviews are 3.4 stars or less OR if your products are shipped by a third party">Poor reviews or FBM</button>
            {/* Non-Amazon Seller */}
            <h1>Is your site's domain at least 6 months old?</h1>
            <button onClick="" tooltip="If you select yes; you will be prompted to input your domain for review">Yes</button>
            <button onClick="">No</button>

            {/* Amazon Seller Good Reviews*/}
            <h1>Pricing for Products with Good Reviews</h1>
            <p>TERMS</p>

            {/* Amazon Seller Good Reviews*/}
            <h1>Pricing for Products with Poor Reviews/FBM</h1>
            <p>TERMS</p>

        </div>
    )
}
