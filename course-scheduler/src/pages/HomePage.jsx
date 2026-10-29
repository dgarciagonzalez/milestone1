import CourseList from '../components/CourseList.jsx';
import ProgressSummary from '../components/ProgressSummary.jsx';
import CourseCard from '../components/CourseCard.jsx';



function HomePage(props) {
    let style = {textAlign: "left", fontSize: 22, color: "black", paddingLeft: 20, letterSpacing: 0, margin:"20px auto 0"}
    return (
        <>
            <h1 style={style}>
                CS Developer Track
            </h1>
            <div className="container mt-9">
                <ProgressSummary />
                <CourseList courses={props.courses}/>
            </div>
        </>

    );
}

export default HomePage;