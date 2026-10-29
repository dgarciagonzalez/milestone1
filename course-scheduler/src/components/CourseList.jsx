import {useState} from "react";
import CourseCard from "./CourseCard";

function CourseList(props) {
    const btnGroupStyle = {
        maxWidth: "500px",
    }

    const [selected, setSelected] = useState("All Courses");
    const options = ["All Courses", "Completed Only", "Remaining"];

    return (
        <>
            <div className="btn-group" style={btnGroupStyle} onClick={() => setSelected(option)}>
                {options.map((option) => (
                    <a
                        key={option}
                        className={`btn ${selected === option ? "course-btn-selected" : "course-btn"}`}
                        onClick={() => setSelected(option)}
                    >
                        {option}
                    </a>
                ))}
            </div>
            <div className="row g-3 mt-3">
                {props.courses?.map((course) => (
                    <div className="col-12 col-md-6 col-lg-4" key={course.id}>
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </>
    )
}
export default CourseList;