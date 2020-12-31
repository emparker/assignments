import React, {useState} from "react"
import {UglyContextConsumer} from "../uglyContext"

function UglyThing(props) {
  const [showModal,
    setShowModal] = useState(false);
  // console.log(props)
  const {title, imgUrl, description, _id} = props.uglyData

//   const handleModClick = (e) => {

//     let element = e.target.parentElement
//     element
//       .classList
//       .add("hidden")

//   }

    //toggles a boolean value
    // const toggle =()=>{
    //     setShowModal(prev => !prev)
    // }
  return (
    <UglyContextConsumer>
      {({
        deleteThing,
        submitEditedThing,
        modalTitle,
        modalDescription,
        modalWindow,
        handleModalChange
      }) => (
        <div className="ugly-div">
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={imgUrl} alt={description}/>
          <br/>
          <button onClick={() => deleteThing(_id)}>Delete</button>
          <br/>
          <button
            onClick={() => {
                setShowModal(true)
                console.log(showModal)
                modalWindow(title, description)
          }}>Edit</button>
          {showModal
            ? <div className="modal-div">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    submitEditedThing(e, _id, modalTitle, modalDescription)
                    setShowModal(false)
                }}>
                  <h1>Edit Me</h1>
                  <br/>
                  <input
                    value={modalTitle}
                    placeholder="Title"
                    name="modalTitle"
                    onChange={handleModalChange}/>
                  <br/>
                  <input
                    value={modalDescription}
                    placeholder={"description"}
                    name="modalDescription"
                    onChange={handleModalChange}/>
                  <br/>
                  <button>Save</button>
                </form>
              </div>
            : null}
        </div>
      )}
    </UglyContextConsumer>

  )
}

export default UglyThing
