function CourseCard(props) {
    return (
        <>
            <div className={`card ${props.checked 
                ? "bg-success-subtle border-success" 
                : props.locked 
                    ? "bg-secondary-subtle border-secondary" 
                    : "border-primary" }`}
                 style={{width: "100%"}}>

                <div className="card-header d-flex justify-content-between align-items-center">
                    <span>{props.course.number}</span>

                    <span
                        className={`badge ${props.checked ? "bg-success" : props.locked ? "bg-secondary" : "bg-primary"}`}
                    >
                        {props.checked ? "Completed" : props.locked ? "Locked" : "Available"}
                    </span>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5 >{props.course.title}</h5>
                        <p style = {{fontSize: "85%", color : "Grey"}}>{props.course.credits} credits</p>
                        <p>{props.course.description}</p>
                        <p><span style={{fontWeight: "bold", fontSize: "85%"}}>Prerequisites:</span> {props.course.prerequisites?.length > 0 ?
                            props.course.prerequisites.map(prereqId =>
                                    props.courses.find(c => String(c.id) === String(prereqId))?.title
                                ).join(", ")
                            : "None"}</p>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={props.course.id}
                                checked={props.checked}
                                disabled={props.locked}
                                onChange={(e) => props.onChange(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor={props.course.id}>
                                Completed
                            </label>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CourseCard;