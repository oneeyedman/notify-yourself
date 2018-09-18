import React, {Component} from "react";
import Notification from './Notification';

class Notifications extends Component {
  constructor(props) {
    super(props);
    
    this.nextNotification = this.nextNotification.bind(this);

    this.state = {
      currentNotification: 0
    }
    this.speed = 3000;
  }


  componentDidUpdate() {
    const {notifications} = this.props;
    if (notifications.length > 1) {
      setTimeout(this.nextNotification, this.speed);
    }
  }

  setCurrentNotification(number) {
    this.setState({currentNotification: number});
  }

  createNotifications(array) {
    const {currentNotification} = this.state;
    return array.map((item, i)=>{
      return <Notification label={item.label} active={(i === currentNotification) ? true: false} key={i} position={i} />
    })
  }

  nextNotification() {
    const {notifications} = this.props;
    const {currentNotification} = this.state;
    const totalNotifications = notifications.length;
    if (currentNotification < totalNotifications - 1) {
     this.setCurrentNotification(currentNotification + 1);
    } else {
      this.setCurrentNotification(0);
    }
  }

  render() {
    const {notifications} = this.props;
    if (notifications.length > 0) {
      return (
        <div className="notifications">
          <div className="notifications__inner">
            {this.createNotifications(notifications)}
          </div>
        </div>
      );
    } else {
      return (
        <div className="notifications">
          <div className="notifications__inner">
            <div className="notification notification--default">No hay notificaciones</div>
          </div>
        </div>
      );
    }
    
  }
}

export default Notifications;