import React, { Component } from 'react'

class SecondaryButton extends Component {
    render() {
        const { onClick, text } = this.props
        return <button className="button secondary-button" onClick={onClick}>
            {text}
        </button>;
    }
}

export { SecondaryButton }