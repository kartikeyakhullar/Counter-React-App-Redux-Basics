import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as action from "../../store/actions"

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((res)=>{
                        return <li key={res.id} onClick={()=>this.props.onDeleteResult(res.id)}>{res.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = state=>{
    return {
        ctr : state.counter,
        storedResults : state.result
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter : ()=>dispatch(action.increment()),
        onDecrementCounter : ()=>dispatch(action.decrement()),
        onAddCounter : ()=>dispatch(action.add(10)),
        onSubtractCounter : ()=>dispatch(action.subtract(10)),
        onStoreResult : ()=>dispatch(action.storeResult()),
        onDeleteResult : (id)=>dispatch(action.deleteResult(id)),
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(Counter);