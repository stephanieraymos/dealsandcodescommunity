import React, { Component } from 'react'

export class DealsComp extends Component {
    constructor(props) {
        super();
        this.state = {
            deal: {
                link: this.link,
                description: this.description,
                discount: this.discount,
                dealType: this.dealType,
                dealPrice: this.dealPrice
            },
            dealPost: this.deal
        };
      }
      dealPost(link, description, discount, dealType, dealPrice) {
        this.setState({ deal: this.dealPost });
      }
    render() {
        return (
            <div>
                {this.state.DealsPosted}
            </div>
        )
    }
}

export default DealsComp

