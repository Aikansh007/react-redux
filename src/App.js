import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to React Redux</h1>
    <div> Your salary is <span>{this.props.sal}</span> </div>
    <button onClick={this.props.onSalInc}>Inc Sal</button>
    <button onClick={this.props.onSalDec}>Dec Sal</button>
       </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
    sal:state.sal
  }
};

const mapDispatchProps=(dispatch)=>{
  return{
    onSalInc:()=>dispatch({type:"Inc_Sal",value:1000}),
    onSalDec:()=> dispatch({type:"Dec_Sal",value:1000})
  }
}
export default connect(mapStateToProps,mapDispatchProps)(App);
