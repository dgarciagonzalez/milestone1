import CourseList from '../components/CourseList.jsx';
import ProgressSummary from '../components/ProgressSummary.jsx';
import CourseCard from '../components/CourseCard.jsx';



function HomePage() {
    return (
        <div className="container mt-9">
            <ProgressSummary />
            <CourseList />
            <CourseCard />
        </div>
    );
}

export default HomePage;