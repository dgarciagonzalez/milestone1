function ProgressSummary(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title mb-3">
                        <span className="text-success fs-4 fw-bold">
                            {props.completed}
                        </span>
                        <span className="fs-6 text-secondary">
                            { ` of ${props.total} courses completed `}
                        </span>

                        <span className="text-primary fs-4 fw-bold">
                            {props.available}
                        </span>
                        <span className="fs-6 text-secondary"> {` available`} </span>

                        <span className="text-secondary fs-4 fw-bold">
                            {props.locked}
                        </span>
                        <span className="fs-6 text-secondary"> locked</span>
                    </h4>

                    <div className="progress">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{width: `${props.progress}%`}}
                            aria-valuenow={props.progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {props.progress}%
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressSummary;