import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useTheme } from '../themes/ThemeContext';

const Profile = () => {

        const { theme } = useTheme()

    return (
        <div className={`App ${theme}`}>
            <nav>
                <Link to='/'>Home</Link>
                <span> - </span>
                <Link to='/myjob'>MyJob</Link>
            </nav>
            <Button />
            <h1>Esta página es Profile</h1>
        </div>
    )
}

export default Profile