import React, {Component} from 'react'
export default class Button extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            {this.state.count%2===0?"Show":"Hide"}
          </button>
        </div>
      );
    }
  }