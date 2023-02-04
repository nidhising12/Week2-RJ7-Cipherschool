// import React from 'react';
// import SignUpForm from './components/SignUpForm';
// import SumNumbers from "./components/SumNumber";

// const App = () => {
//   return (
//     <div>
//     <h1>This is App Component</h1>
//     <SignUpForm/>
//     </div>
//   );
// }

// export default App; 

import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import Header from "./components/Header";
import TaskScreen from "./components/TaskScreen";
import CounterComponent from "./components/CounterComponent";
import Photos from "./components/Photos";
import higherOrderComponent from "./components/HOC";

const App = () => {
  const TestApp = higherOrderComponent (() => {
    return <div>Test App</div>;
  });
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path={"/"} element={<h1>This is on HOme page</h1>} />
        <Route path={"/contact"} element={<h1>This is on contact page</h1>} />
        <Route path={"/about"} element={<h1>This is on about page</h1>}  />
        <Route path={"/signup"} element={<SignUpForm/>} />
        </Routes>
        <Route path={"/tasks"} element={<TaskScreen/>} />
        <Route path ={"/photos"} element={<Photos/>} />
         <Route path={"/test"} element={<TestApp />} />``
      </BrowserRouter>
    </div>
  )
}
export default App;
//export default app

