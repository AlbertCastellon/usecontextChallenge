import { Link } from 'react-router-dom';
import Button from '../components/Button';

const MyJob = () => {
    return (
        <>
        <Link to='/'>Home</Link>
        <span> - </span>
        <Link to='/profile'>Profile</Link>
        <Button />
        <h1>Esta página es MyJob</h1>
        </>
    )
}

export default MyJob