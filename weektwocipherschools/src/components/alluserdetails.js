import React from "react";
import userdetails from "./userdetails";

// const AlluserList = () => {
//     let allusers = [
//        { name: "Nidhi", email: "nidhisingh@gmail.com", phone: "+918349576845"},
//        { name: "Neha", email: "nehasingh@gmail.com", phone: "+918349776845"},
//        { name: "khushi", email: "khushisingh@gmail.com", phone: "+918349546845"},
//     ];
class AlluserList extends React.Component {
    state ={
        allusers: [
        {name: "nidhi", email: "nishibgr@gmail.com" ,phone: "+918349576845"},
        {
            name: "Riya",
            email: "riya@gmail.com",
            phonenumber: "+918357486745",
        },
        {
            name: "arpi", 
            email: "arpi@gmail.com",
            phonenumber: "+916476847888",
        },
    ],
}

    // let array = [
    //     <userdetails user={allusers[0]} />,
    //     <userdetails user={allusers[1]} />,
    //     <userdetails user={allusers[2]} />,
    // ]
    // let array = allusers.map((user,index) => (
    //     <userdetails key={index} user={user} />
    // ));
    render() {
    return (
        <div>
        {this.allusers.map((user,index) => (
            <userdetails key={index} user={user} />
        ))}
        </div>
    );
  }
};
let setStateName = (name) => {
    setStateName({...state, name});
};
return (
    <div>
        <Test name={state.name} setStateName={5}/>
        {allusers.map((user,index) => (
            <userdetails key={index} user={user} />
        ))}
    </div>
);
export default userdetails;
