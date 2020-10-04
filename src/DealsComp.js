import React, { Component } from 'react'

export class DealsComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPost: null,
            dealsPosted: this.dealsPosted
        };
      }
      dealsPosted(link, description, discount, dealType, dealPrice) {
        this.setState({ dealPosted: this.newPost });
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

