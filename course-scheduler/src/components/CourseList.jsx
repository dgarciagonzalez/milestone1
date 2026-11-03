import {useState, useEffect} from "react";
import CourseCard from "./CourseCard";
import ProgressSummary from "./ProgressSummary";

function CourseList(props) {
    const btnGroupStyle = {
        maxWidth: "500px",
    }

    const [selected, setSelected] = useState("All Courses");
    const options = ["All Courses", "Completed Only", "Remaining"];
    const [completedIds, setCompletedIds] = useState(() => {
        const saved = localStorage.getItem("completedIds");
        return saved ? JSON.parse(saved) : [];
    });

    const [saveMessage, setSaveMessage] = useState("");

    const handleSave = () => {
        localStorage.setItem("completedIds", JSON.stringify(completedIds));
        setSaveMessage("Progress saved.");
    };

    const handleToggleCourse = (courseId, isChecked) => {
        setSaveMessage("");
        setCompletedIds((prevIds) => {
            if (isChecked) {
                return [...prevIds, courseId];
            }

            let updatedIds = prevIds.filter(
                (id) => String(id) !== String(courseId)
            );

            let changed = true;

            while (changed) {
                changed = false;

                props.courses.forEach((course) => {
                    const isCompleted = updatedIds.some(
                        (id) => String(id) === String(course.id)
                    );

                    const hasMissingPrerequisite =
                        !course.prerequisites.every((prereqID) =>
                            updatedIds.some(
                                (id) => String(id) === String(prereqID)
                            )
                        );

                    if (isCompleted && hasMissingPrerequisite) {
                        updatedIds = updatedIds.filter(
                            (id) => String(id) !== String(course.id)
                        );

                        changed = true;
                    }
                });
            }

            return updatedIds;
        });
    };

    const filteredCourses = props.courses?.filter((course) => {
        const isCompleted = completedIds.includes(course.id);
        if (selected === "Completed Only") return isCompleted;
        if (selected === "Remaining") return !isCompleted;
        return true;
    });

    const totalCourses = props.courses?.length ?? 0;
    const completedCourses = completedIds.length;
    const remainingCourses = totalCourses - completedCourses;

    const availableCourses = props.courses?.filter((course) =>
        !completedIds.includes(course.id) &&
        course.prerequisites.every((prereqID) => completedIds.includes(prereqID))
    )

    const lockedCourses = props.courses?.filter((course)=>
        !completedIds.includes(course.id) &&
        !course.prerequisites.every((prereqID) => completedIds.includes(prereqID))
    )

    const progress = totalCourses > 0 ? ((completedCourses/totalCourses) * 100).toFixed() : 0;

    return (
        <>
            <ProgressSummary
                completed={completedCourses}
                available={availableCourses?.length ?? 0}
                locked={lockedCourses?.length ?? 0}
                remaining={remainingCourses}
                total={totalCourses}
                progress={progress}
            />

            <div className="d-flex justify-content-between align-items-center gap-2">
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

                <div className="d-flex align-items-center gap-2">

                    {saveMessage && (
                        <span className="text-success">
            {saveMessage}
        </span>
                    )}

                    <button
                        className="btn btn-success"
                        onClick={handleSave}
                    >
                        Save
                    </button>

                </div>
            </div>

            <div className="row g-3 mt-3">
                {filteredCourses?.map((course)=>{
                    const isCompleted = completedIds.some((id) => String(id) === String(course.id));

                    const isAvailable = (course.prerequisites ?? [])
                        .every((prereqID) => completedIds.some((id) => String(id) === String(prereqID)));

                    return(
                        <div className="col-12 col-md-6 col-lg-4" key={course.id}>
                            <CourseCard
                                course={course}
                                courses={props.courses}
                                checked={completedIds.includes(course.id)}
                                locked={!isCompleted && !isAvailable}
                                onChange={(isChecked) => handleToggleCourse(course.id, isChecked)}
                            />
                        </div>
                    )

                })}
            </div>
        </>
    )
}

export default CourseList;