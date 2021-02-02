import { useHistory, useLocation } from "react-router-dom"
import { useState, useContext } from "react"  
import { context } from "../AnimalDataProvider"


export default function FormPage() {
    const location = useLocation()
    console.log(location.state.type)
    // const dogOrCat = location.state

    const [ formData, setFormData ] = useState({
        type: location.state.type,  //needs to be versitale dog or cat- ues incoming props from landing page or history?
        place: "",
        age: "",
        gender: "",
        size: ""
    })

    const animalsAPI = useContext(context)
    let history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        // utility func?
        const convertToURLQueryParams = (obj) => {
            let queryString = ""
            
            queryString = Object.keys(obj).map(key => key + "=" + obj[key]).join('&')
            
            return queryString
        }
        console.log(convertToURLQueryParams(formData))
//formData.animal, formData.place, formData.age, formData.gender, formData.size
            animalsAPI
            .getAnimals(convertToURLQueryParams(formData))
            .then(()=> {

                // console.log("FORM PG- this is the data:", data)
                history.push("/list") // THIS
                // history.push("/list", animalsAPI.animals) NOT THIS
            })

}

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevFormData) => {
			return {
                ...prevFormData,
                [name]: value,
			};
		});
        console.log({name, value})
    }



    return (
        <div>
            <h1>Let's find you the perfect Doggo!</h1>

            <form onSubmit = {handleSubmit}>

            <h5>What state would you like to search?</h5>
            <input 
                className="place"
                placeholder="AZ"
                type="text"
                value={formData.place}
                name="place"
                onChange={handleChange}
            />
            <br/>

            <h5>Would you like a young dog or an adult dog?</h5>
            <label>
            <input 
                type="radio" 
                name="age" 
                value="young" 
                checked={formData.age === "young"} 
                onChange={handleChange}
            />
            Young
            </label>
            
            <br/>

            <label>
            <input 
                type="radio" 
                name="age" 
                value="adult"
                checked={formData.age === "adult"}
                onChange={handleChange}
            />
            Adult
            </label>

            <br/>

            <h5>What gender do you prefer</h5>
            <label>
            <input 
                type="radio" 
                name="gender" 
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
            />
            Male
            </label>

            <br/>

            <label>
            <input 
                type="radio" 
                name="gender" 
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
            />
            Female
            </label>

            <br/>

            <h5>Choose a size</h5>
            <label>
            <input 
                type="radio" 
                name="size" 
                value="small"
                checked={formData.size === "small"}
                onChange={handleChange}
            />
            Small
            </label>

            <br/>

            <label>
            <input 
                type="radio" 
                name="size" 
                value="medium"
                checked={formData.size === "medium"}
                onChange={handleChange}
            />
            Medium
            </label>

            <br/>

            <label>
            <input 
                type="radio" 
                name="size" 
                value="large"
                checked={formData.size === "large"}
                onChange={handleChange}
            />
            Large
            </label>

            <br/>

            <button>Submit</button>

            </form>
        </div>
    )
}