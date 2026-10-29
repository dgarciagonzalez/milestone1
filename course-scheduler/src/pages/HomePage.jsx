import CourseList from '../components/CourseList.jsx';
import ProgressSummary from '../components/ProgressSummary.jsx';
import CourseCard from '../components/CourseCard.jsx';



function HomePage(props) {
    return (
        <div className="container mt-9">
            <ProgressSummary />
            <CourseList courses={props.courses}/>
        </div>
    );
}

export default HomePage;