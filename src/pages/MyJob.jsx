import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useTheme } from '../themes/ThemeContext';

const MyJob = () => {

        const { theme } = useTheme()

    return (
        <div className={`App ${theme}`}>
            <nav>
                <Link to='/'>Home</Link>
                <span> - </span>
                <Link to='/profile'>Profile</Link>
            </nav>
            <Button />
            <h1>Esta página es MyJob</h1>
        </div>
    )
}

export default MyJob