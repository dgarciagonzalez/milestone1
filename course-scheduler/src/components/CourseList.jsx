import {useState} from "react";
import CourseCard from "./CourseCard";

function CourseList(props) {
    const btnGroupStyle = {
        maxWidth: "500px",
    }

    const [selected, setSelected] = useState("All Courses");
    const options = ["All Courses", "Completed Only", "Remaining"];
    const [completedIds, setCompletedIds] = useState([]);

    const handleToggleCourse = (courseId, isChecked) => {
        setCompletedIds((prevIds) => isChecked ? [...prevIds, courseId] : prevIds.filter((id) => id !== courseId));
    };

    const filteredCourses = props.courses?.filter((course) => {
        const isCompleted = completedIds.includes(course.id);
        if (selected === "Completed Only") return isCompleted;
        if (selected === "Remaining") return !isCompleted;
        return true;
    });

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group" style={btnGroupStyle}>
                    {options.map((option) => (
                        <button
                            key={option}
                            type = "button"
                            className={`btn ${selected === option ? "course-btn-selected" : "course-btn"}`}
                            onClick={() => setSelected(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <button className="btn btn-success" >Save</button>
            </div>
            <div className="row g-3 mt-3">
                {filteredCourses?.map((course) => (
                    <div className="col-12 col-md-6 col-lg-4" key={course.id}>
                        <CourseCard course={course} courses={props.courses} checked={completedIds.includes(course.id)} onChange={(isChecked) => handleToggleCourse(course.id, isChecked)} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default CourseList;