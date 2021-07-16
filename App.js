import logo, { ReactComponent } from './logo.svg';
import './App.css';
import React, {useState} from "react";


class Checker extends React.Component{


  constructor(props){

    super(props)


    this.state={checked: this.props.checked}
     

    this.handleClick = this.handleClick.bind(this);

  }
  

  handleClick(){
       
    this.props.change_checked({checked:false} );
    this.setState({checked:true})
   
  }





  render(){
    return(

      <div onClick={this.handleClick} className="circle">
      <div className={this.props.checked|| this.state.checked ? "circle-dot" : "hidden" }></div>
      </div>
    )
  }
}

async function callMe(){
  var a = await callme2()
}



class App extends React.Component {

 constructor(){


    super()

    this.state = {
      checked: false
    }
  }



// сделать приложение с формой входа
// логин, пароль, кнопка очистки логина и пароля, кнопка входа
// при успешном логине, фетч с https://jsonplaceholder.typicode.com/posts?_limit=1 и показ

// const login = "grisha";
// const password="password"
  
componentDidMount(){
  

  fetch("https://jsonplaceholder.typicode.com/posts?_limit=1").then()
  console.log("privde");
}

render(){

    return(
<>
      <Checker checked={this.state.checked} change_checked={(e)=>{this.setState(e)}}/>
      <Checker checked={this.state.checked} change_checked={(e)=>{this.setState(e)}}/>
      <Checker checked={this.state.checked} change_checked={(e)=>{this.setState(e)}}/>
      <Checker checked={this.state.checked} change_checked={(e)=>{this.setState(e)}}/>
      
</>
    )

  }
}




// function App() {


// setChecked(checked+1)



//   const [checked, setChecked] = useState(false);

//   console.log(checked)

//   return (
//     <div onClick={()=>{setChecked(!checked)}} className="circle">
        
//         <div className={checked ? "circle-dot" : "hidden"}></div> 
        

//     </div>
//   )
// }

export default App;
