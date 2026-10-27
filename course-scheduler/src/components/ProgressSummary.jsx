function ProgressSummary(props) {
    return (
        <>
            <div className="card" style="max-width: 320px;">
                <div className="card-body">
                    <h4 className="card-title">Example card title</h4>
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