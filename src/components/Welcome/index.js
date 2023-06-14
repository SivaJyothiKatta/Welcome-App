// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onStatus = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="welcome-description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button
            className="subscribed-button"
            type="button"
            onClick={this.onStatus}
          >
            Subscribe
          </button>
        ) : (
          <button
            className="subscribed-button"
            type="button"
            onClick={this.onStatus}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
