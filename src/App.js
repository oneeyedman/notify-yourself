import React, { Component } from 'react';
import Notifications from './components/Notifications';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    const fakeFetchResult= [
      {
        label: "🦄 App.js sabe cuál es el mejor arcoiris"
      },
      {
        label: "🦄🦄 App.js tiene los mejores colores"
      },
      {
        label: "🦄🦄🦄 App.js conoce el camino"
      },
      {
        label: "🦄🦄🦄🦄 App.js tiene la cerveza más fresquita"
      }
    ];

    const oneFakeFetchResult= [
      {
        counter: 1,
        label: "🦄 App.js sabe cuál es el mejor arcoiris"
      }
    ];

    const zeroFakeFetchResults = [];

    const random = Math.round(Math.random() * 2);
    if (random === 0) {
      console.log('Sin actualizaciones');
      this.setState({notifications: zeroFakeFetchResults});
    } else if (random === 1) {
      console.log('Solo 1');
      this.setState({notifications: oneFakeFetchResult});
    } else {
      console.log('Varias');
      this.setState({notifications: fakeFetchResult});
    }
  }

  render() {
    const {notifications} = this.state;
    return (
      <div className="page">
        <div className="page__main"></div>
        <div className="page__footer">
          <Notifications notifications={notifications} />
        </div>
      </div>   
      
    );
  }
}

export default App;
