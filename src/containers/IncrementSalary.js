

import React from 'react'
import {connect} from 'react-redux'
import {incSal} from '../actions/actionCreator';

class IncrementSalary extends React.Component{
    constructor(props)
    {
    super(props)
    }

    render(  ){
        return(
            <div>
<button onClick={this.props.incSal}>Inc-Sal</button>

            </div>
        )
    }
}

const mapDisptachProps =dispatch =>({
    incSal:()=>dispatch(incSal())
})


export default connect(null,mapDisptachProps)(IncrementSalary);