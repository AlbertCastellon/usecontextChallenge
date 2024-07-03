import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Profile = () => {
    return (
        <>
        <Link to='/'>Home</Link>
        <span> - </span>
        <Link to='/myjob'>MyJob</Link>
        <Button />
        <h1>Esta página es Profile</h1>
        </>
    )
}

export default Profile