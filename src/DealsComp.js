import React from 'react'
import { render } from 'react-dom'
import bottle from './img/bottle.jpg'
import mat from './img/mat.jpg'
import ss from './img/ss.jpg'
import ts from './img/ts.jpg'



const Deal = ({link, image, title, admin, discount}) => {
    return(
        <section className="deal-section">
            <p>{link}</p>
            <img src={image} alt="Deal"/>
            <h2>{title}</h2>
            <p>Posted By: {admin}</p>
            <p>Total discount: {discount}%</p>
        </section>
    )
}

const DealsComp = () => {
  return (
    <div>
        <Deal 
            link="Link"
            image={bottle}
            title="Water Bottle"
            admin="Stephanie Raymos"
            discount={50}
        />
        <Deal 
            link="Link"
            image={mat}
            title="Yoga Mat"
            admin="Audie Raymos"
            discount={60}
        />
        <Deal 
            link="Link"
            image={ss}
            title="Kitchen Spatula Set"
            admin="Stephanie Raymos"
            discount={75}
        />
        <Deal 
            link="Link"
            image={ts}
            title="Kids toy tractor set"
            admin="Stephanie Raymos"
            discount={65}
        />
    </div>
  )
}

render (
  <DealsComp />,
  document.getElementById('root')
)



export default DealsComp



// import React, { Component } from 'react'
// import ReactDom from 'react-dom'

// export class DealsComp extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             deal: {
//                 link: this.link,
//                 description: this.description,
//                 discount: this.discount,
//                 dealType: this.dealType,
//                 dealPrice: this.dealPrice
//             },
//             dealPost: this.deal
//         };
//       }
//       dealPost(link, description, discount, dealType, dealPrice) {
//         this.setState({ deal: this.dealPost });
//       }
//     render() {
//         return (
//             <div>
//                 {this.state.DealsPosted}
//             </div>
//         )
//     }
// }

// ReactDOM.render {
//     <DealsComp />,
// }

// export default DealsComp

