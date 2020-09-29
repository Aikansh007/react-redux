import React from 'react'
import {connect} from 'react-redux'
import {decSal} from '../actions/actionCreator';
class DecrementSalary extends React.Component{
    constructor(props)
    {
    super(props)
    }

    render(  ){
        return(
            <div>
<button onClick={this.props.decSal}>Dec-Sal</button>

            </div>
        )
    }
}

const mapDisptachProps = ({decSal})

export default connect(null,mapDisptachProps)(DecrementSalary);