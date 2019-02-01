import React, { Component } from "react";

class LargeInput extends Component {
    render() {
        const { onClick, type, placeholder, subClass  } = this.props;
        return <div>
            <div class="col-3">
              <input className={`effect-16 input-large ${subClass}`} type={type} id={type} onClick={onClick}/>
              <label htmlFor={type}>{placeholder}</label>
            </div>
          </div>;
    }
}

export { LargeInput };