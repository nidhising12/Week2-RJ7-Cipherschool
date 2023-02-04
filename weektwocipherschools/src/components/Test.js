import React from "react"; 
import PropTypes from "prop-types";

const test = ({name =" " , setName}) => {
  return (
    <input>
      <h1>The name is: {name}</h1>
      <input
      type = "text"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
     </input>
  );
};
test.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
}
export default test;
