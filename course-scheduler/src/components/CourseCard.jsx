function CourseCard(props) {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-header">
                    Class
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="completed
                            />
                            <label className="form-check-label" htmlFor="completed">
                                Mark as completed
                            </label>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CourseCard;