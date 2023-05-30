import React from "react";
import Counter from "./counter";

export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counts: {
                one: 0
            }
        };
        this.countClicks = this.countClicks.bind(this);
    }

    countClicks(name){
        this.setState(state => {
            if(state.counts[name]){
                state.counts[name] += 1;
                console.log("hi");
            }
            else{
                state.counts[name] = 1;
                console.log("Stop" + state.counts + this.state.counts[name]);
                console.log(this.state);
                console.log(state);
            }
            return state
        })
    }

    render(){
        console.log(this.state);
        return(
            <div>
            <Counter
            name="one"
            count={this.state.counts.one}
            onClick={this.countClicks}
            />

            <Counter
            name="one"
            count={this.state.counts.one}
            onClick={this.countClicks}
            />

            <Counter 
            name="two"
            count={this.state.counts.two}
            onClick={this.countClicks}
            />

            </div>
        );
    }
}