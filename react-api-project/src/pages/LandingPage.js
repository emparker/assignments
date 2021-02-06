
import { Link } from "react-router-dom"

export default function LandingPage() {

    return (
        <>
            <h1 className="header">DOGCAT</h1>
            <div className="div-links">
                <div className="div-dog">
                    <Link className="link-dog" to={{
                        pathname: "/form",
                        state: { type : "dog" }
                    }}>Woof</Link>
                </div>
                <h3 className="or">OR</h3>
                <div className="div-cat">
                    <Link className="link-cat" to={{
                        pathname: "/form",
                        state: { type : "cat" } 
                    }}>Meow</Link>
                </div>
            </div>
            
            
        </>
    )
}
