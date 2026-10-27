function ProgressSummary(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">X of X course completed Y available Z locked </h4>
                    <div className="progress">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{width: "25%"}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            25%
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProgressSummary;