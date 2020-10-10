import React from "react";
import DisplayClock from "./DisplayClock";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
    };
    this._update = this._updateTime.bind(this);
  }

  componentDidMount() {
    this._intervalId = setInterval(this._update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._intervalId);
  }

  _updateTime() {
    this.setState({
      time: new Date(this.state.time.getTime() + 1000),
    });
  }

  render() {
    return <DisplayClock time={this.state.time} />;
  }
}

export default Clock;
