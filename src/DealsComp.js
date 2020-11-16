import React, { Component } from 'react'
import { render } from 'react-dom'


const Deal = ({link, title, admin, discount}) => {
    return(
        <section className="deal-section">
            <p>{link}</p>
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
            title="Water Bottle"
            admin="Stephanie Raymos"
            discount={50}
        />
        <Deal 
            link="Link"
            title="Yoga Mat"
            admin="Audie Raymos"
            discount={60}
        />
        <Deal 
            link="Link"
            title="Kitchen Spatula Set"
            admin="Stephanie Raymos"
            discount={75}
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

