import React, { useState } from "react";

const userdetails = ({user = {}}) => {
    const
    return (
        <div>
            <h3>{user.name}</h3>
            <h5>
                Email: {user.email}
                <br />
                phone Number: {user.phonenumber}
            </h5>
            <h1>This is demo Component</h1>
            <button>onClick={(e) => {
               console.log(e);
             }}
              clicke me!</button>
        </div>
    );
}; 

// class userdetails extends Component {
//     user = this.props.user;
//     render() {
//         this.props.user = {
//             name: "Sikha",
//             email: "sikha@gmail.com",
//             phonenumber: "+919234453467",
//         };
//         return (
//             <div>
//             <h3>{this.props.user.name}</h3>
//             <h5>
//                Email: {this.props.user.email}
//                 <br />
//                 phone Number: {this.props.user.phonenumber}
//             </h5>
//          </div>
//         );
//     }
// }
export default userdetails;