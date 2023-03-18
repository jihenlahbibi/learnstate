import React from "react";
class Timer extends React.Component {
 state = {
   interval:0,
   time:0
 };
 componentDidMount(){
 this.setState({
    interval:setInterval(()=>{
        this.setState({time:this.state.time+1})},1000)

 })
}
componentWillUnmount(){
clearInterval(this.state.interval)
}
 render() {
   return <h3>interval:{this.state.time}</h3>;
 }
}
export default Timer;