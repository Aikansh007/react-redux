
import React from 'react'
import {connect} from 'react-redux'

class PrintSalary extends React.Component{
    constructor(props)
    {
    super(props)
    }

    render(  ){
        return(
            <div>
    <h1>Counter at {this.props.sal}</h1>

            </div>
        )
    }
}
function  mapSttaeToProps  (state){
    return{sal:state.salaryReducer};
    
} 
export default connect(mapSttaeToProps)(PrintSalary);