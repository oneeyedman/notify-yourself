import React, {Component} from "react";

class Notification extends Component {
  render() {
    const {label, active, position} = this.props;
    return (
      <div className={`notification notification--${position} ${ active ? 'notification--current':''}`}>
        {label}
      </div>
    );
  }
}

export default Notification;