
import { Link } from "react-router-dom"

export default function LandingPage() {
    
    
    return (
        <div>
            <h1>DOGCAT</h1>

            <Link to="/form"><button>Woof</button></Link>
            <Link to="/form"><button>Meow</button></Link>
        </div>
    )
}