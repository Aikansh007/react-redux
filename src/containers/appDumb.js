import React from 'react'

import  PrintSalary  from './PrintSalary'
import IncrementSalary from './IncrementSalary'
import DecrementSalary  from './DecrementSalary'
const AppDumb =()=>{
    return(
        <React.Fragment>

            <PrintSalary></PrintSalary><br/>
            <IncrementSalary>             
            </IncrementSalary>
            <DecrementSalary></DecrementSalary>
        </React.Fragment>
    )
}


export default AppDumb;
