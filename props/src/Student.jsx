// propTypes = a mechanism that ensues that the passed value
//            is of the correct datatype.
//            e.g. age: PropTypes.number
// propTypes and default Props are deprecated in React 19+

import PropTypes from 'prop-types' //no longer works in react 19

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Archived: No longer works in react 19
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }


export default Student