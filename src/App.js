import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    Person: {
      fullName: "Aya Hamzaoui",
      bio: "I will be a web developer",
      imgSrc: "https://art.pixilart.com/67623cedae3d4ef.png",
      profession: "Student"
    },
    show: false,
    mountedTime: 0,
  };

  show=()=> {
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - this.startTime) / 1000);
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className='card'>
        {this.state.show && (
          <div className='profile'>
            <img src={this.state.Person.imgSrc} style={{width:250 , height:250 , marginLeft:100 , borderRadius:150}}  ></img>
            <h1>{this.state.Person.fullName}</h1>
            <h3>{this.state.Person.bio}</h3>
            <h3>Profession: {this.state.Person.profession}</h3>
          </div>
        )}
        <button onClick= {()=>{this.show();this.componentDidMount()}}> {this.state.show ? 'Hide Profile' : 'Show Profile'}</button>
        <p style={{color:'red'}}>Time since last mount: {this.state.elapsedTime} seconds</p>
      </div>
    )
  }
}
