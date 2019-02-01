import React, { Component } from 'react'

class PrimaryButton extends Component {
    render() {
        const { onClick, text } = this.props
        return <button className="button primary-button primary-button" onClick={onClick}>
            {text}
          </button>;
    }
}

export { PrimaryButton }