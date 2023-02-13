import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/Home">Accueil</Link>
            <Link to="/logements">Questionnaire</Link>
        </nav>
    )
}

export default Header