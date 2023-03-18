import logo from './logo.svg';
import './App.css';
import React from 'react';

import Timer from './components/Timer';



// class App extends React.Component {
// state= {
//     name: "Sara"
//   };
//   handleClick=()=>this.setState({name:'Arya'})
//   render() {
//     return(
//       <>
//       <h1>Hello {this.state.name}</h1>
//       <button onClick={this.handleClick}> ClickMe</button>
//       </>
//     )
//   }
//  }
class App extends React.Component {
  state= {
    fullName: "Jihene lahbibi",
    bio :"futur developer",
    imgSrc: "/photo.jpg",
    profession :"ingénieur agro",
    shows :true
    
  };
  
  handleClick=()=>{
  this.setState({shows:!this.state.shows});
  console.log(this.state.shows);

}

  render(){

  return (
    <div className="App">
      <button onClick={this.handleClick}>ClickMe</button>
       {this.state.shows? 
       <div>
       <img src={this. state.imgSrc}/>
       <h4>{this. state.fullName}</h4>
       <h4>{this. state.bio}</h4>
       <h4>{this. state.profession}</h4>
       </div> :<h1>No person</h1> }
       {this.state.shows && <Timer/>}
    </div>
  );

  }
}

export default App;

