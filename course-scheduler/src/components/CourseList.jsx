import {useState} from "react";

function CourseList(props) {
    const btnGroupStyle = {
        maxWidth: "500px",
    }

    const [selected, setSelected] = useState({})
    const options = ["All Courses", "Completed Only", "Remaining"];

    return (
        <div className="btn-group" style={btnGroupStyle} onClick={() => setSelected(e.target.value)}>
            <a className="btn course-btn-selected active" aria-current="page">All Courses</a>
            <a className="btn course-btn">Completed Only</a>
            <a className="btn course-btn">Remaining</a>
        </div>
    )
}
export default CourseList;