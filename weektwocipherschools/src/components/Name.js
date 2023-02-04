import React, { useState } from "react";  

// class Name extends Component {
//     state = { name: "Nidhi singh" };

//     constructor(props) {
//         super(props);
//         this.setName = this.setName.bind(this);
//     }
    setName = (name) => {
        this.setState({ ...this.state, name });
        // this.setState({ ...this.state, name: "Amrit Anand" });
    };

    testHandler = () => {
        console.log("testHandler");
    };

    render() {
        return (
            <>
                <h1>The name is: {this.state.name}</h1>
                {/* <button onClick={this.setName("Amrite Anand")}>click me</button> */}
                <button onClick={this.setName}
                onClick={() => {
                    this.setName("Amrit Anand");
                    this.testHandler();
                }}
                >
                click me
                </button>
            </>
        )
    }


// const Name = () => {
//     const [state, setState] = useState("nidhi Singh");
//     let setName = (e) => {
//         setState({ ...state,name: "Amrit Anand" });
//     };
//     return (
//         <>
//             <h1>The name is: {state.name}</h1>
//             <button onClick={setName}>Click me</button>
//         </>
//     );
// };
export default Name;