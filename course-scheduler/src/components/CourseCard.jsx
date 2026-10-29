function CourseCard(props) {
    return (
        <>
            <div className="card" style={{width: "100%"}}>
                <div className="card-header">
                    {props.course.number}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <h5 >{props.course.title}</h5>
                        <p style = {{fontSize: "85%", color : "Grey"}}>{props.course.credits} credits</p>
                        <p>{props.course.description}</p>
                        <p><span style={{fontWeight: "bold", fontSize: "85%"}}>Prerequisites:</span> {props.course.prerequisites}</p>
                    </li>
                    <li className="list-group-item">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="completed"
                            />
                            <label className="form-check-label" htmlFor="completed">
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