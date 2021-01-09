import React from 'react'
import './popup.css'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner' align='center'>
          <h5>{this.props.text}</h5>
          <br />
          <br />
          <button
            className={'btn btn-block ' + this.props.button}
            style={{
              width: '100px',
            }}
            onClick={this.props.closePopup}>
            Got it
          </button>
        </div>
      </div>
    )
  }
}

export default Popup
