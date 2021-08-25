import {Component} from 'react';
import './App.css';

class TempInput extends Component{
  constructor(props){
    super(props);
    this.state={temp : this.props.temp}
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      temp: e.target.value
    });
    this.props.handlerFunc(this.props.type, e.target.value);
    
  }

  render(){
    if(this.props.type!=='c' && this.props.type!=='f'){
      return null;
    }
    if(this.props.type === 'c'){
      var placeholder = "Enter temp in C";
    }else if(this.props.type === 'f'){
      placeholder = "Enter temp in F";
    } 
    return(
      <>
        <p>Enter temp in {this.props.type}</p>
        <input placeholder={placeholder} value={this.props.temp} onChange={this.handleChange}/>
      </>
    );
  }
}


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      inputtype: 'c',
      inputvalue: 0
    }
  }

  cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    return cToFahr;
  }

  fToC(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
  } 

  Celcius = (type, temp) => {
    console.log(type, temp);
    this.setState({
      inputtype: type,
      inputvalue: temp,
    });
  }

  Fahrenheit = (type, temp) => {
    console.log(type, temp);
    this.setState({
      inputtype: type,
      inputvalue: temp,
    });
  }
  
  render(){
    var ctemp = this.state.inputvalue === 'c' ? this.state.inputvalue : this.fToC(this.state.inputvalue);
    var ftemp = this.state.inputvalue === 'f' ? this.state.inputvalue : this.cToF(this.state.inputvalue);
    return(
    <>
      <TempInput type='c' handlerFunc={this.Celcius} temp={ctemp}/>
      <br/>
      <TempInput type='f' handlerFunc={this.Fahrenheit} temp={ftemp}/>
    </>
    );
  }
}

export default App;
