import React, {Component} from 'react';

class ClassCompo extends Component{
    render(){
        return(
            <div id='classdiv'>
                <h1>This is created using Class component</h1>
                <p>This is done using External CSS</p>
                <p style={{color:"blue"}}>This is done using Internal CSS</p>
            </div>
        )
    }
}
export default ClassCompo;