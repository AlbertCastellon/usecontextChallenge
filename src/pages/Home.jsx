import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {

    return (
        <>
        <Link to='/myjob'>MyJob</Link>
        <span> - </span>
        <Link to='/profile'>Profile</Link>
        <h1>Esta página es Home</h1>
        </>
    )
}

export default Home