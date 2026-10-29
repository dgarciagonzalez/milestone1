function ProgressSummary(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.completed} of {props.total} course completed Y available Z locked </h4>
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