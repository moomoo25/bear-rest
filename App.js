import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

    constructor(props){
        super(props)
       
    }
    componentDidMount(){
       
    }
    render() {

        let bears=this.props.bear;
    return (
      <div>
        {
            bears.map(bear=><div key={bear.id}>{bear.name}</div>)
        }
        </div>
    );
  }
}
let MapStateToProps = (state) =>({bear:state.bear})
export default connect(MapStateToProps)(App);


