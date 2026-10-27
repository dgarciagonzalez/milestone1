function ProgressSummary(props) {
    return (
        <>
            <div className="progress">
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    25%
                </div>
            </div>
        </>
    );
}

export default ProgressSummary;