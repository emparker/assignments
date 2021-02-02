
import { Link } from "react-router-dom"

export default function LandingPage() {

    return (
        <div>
            <h1>DOGCAT</h1>

            <Link className="link" to={{
                pathname: "/form",
                state: { type : "dog" }
            }}>Woof</Link>
            
            <Link className="link" to={{
                pathname: "/form",
                state: { type : "cat" } 
            }}>Meow</Link>
        </div>
    )
}
