import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }


  render() {
    return (
        <YMaps>
            <div>
                Карта дома
      <Map width='100%' height='500px' defaultState={{ center: [55.044, 82.93207], zoom: 15}} />
            </div>
        </YMaps>
    );
  }
}
