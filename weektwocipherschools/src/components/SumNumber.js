import React, { Component } from "react"; 
 class SumNumbers extends Component {
    state = {
        firstnumber: 0,
        secondNumber: 0,
        sum: 0,
        sumString: "The compoent has not updated the state ",
    };
   componentDidMount() {
    console.log("we are in componenet did mount ouf sumnumber");
    testAPI(5,6).then((sum) => {
        this.setSum(sum);
    });
   }

   componentDidUpdate() {
    console.log("Componenet has updated");
    this.setState({...this.state, sumString: `the sum is : ${this.state.sum}`});
   }
    setSum = (sum) => {
        if(typeof sum !== "undefined") {
            this.setState({ ...this.state, sum });
        }else {
            this.setState({
                ...this.state,
                sum: this.state.firstnumber + this.state.secondNumber
            })
        };
        this.setState({ ...this.state, sum});
    }
    render() {
        return (
            <div>
                <input type="Number"
                placeholder="enter first number"
                 onChange={(e) => {
                    this.setState({...this.state, 
                    firstnumber: parseInt(e.target.value),
                });
                }}
                value={this.state.firstnumber}
                />
                 <input type="Number"
                placeholder="enter second number"
                 onChange={(e) => {
                    this.setState({...this.state, 
                    secondnumber: parseInt(e.target.value),
                });
                }}
                value={this.state.secondNumber}
                />
                <button onClick={(e) => this.setSum()}>Add numbers</button>
                <h3>The sum is: {this.state.sum}</h3>
            </div>
        )
    }
 }
 export default SumNumbers;