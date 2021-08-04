// import logo from './logo.svg';
import React, { Component } from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import hornedAnimalArr from "./components/hornedbeats.json";
import myModal from './components/Selectedbeat.js';

class App extends Component {


  constructor(props){
      super(props)
      this.state ={
        hornedList :hornedAnimalArr,
        show : false ,
        animal : {}
      }
  }


  handlerShow=(data)=>{
     this.setState ({
      show : true ,
      animal :data

     })
  }

  handlerClose =()=>{
      this.setState({
          show : false 
  
         })
  }

  render() {
    return (

        <div>
            <Header/>
      <Main showDataList = {this.handlerShow} data ={this.state.hornedList} />
      <myModal animal = {this.state.animal} showModal ={this.state.show} closeData= {this.handlerClose}/>
      <Footer/>
               
      </div>
  )
}
}
export default App;
