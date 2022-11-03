import React from 'react'

function Contact() {
  return (
    <main>
        <form>
            <div>
                <label>First Name</label>
                <input type="text" id="first_name" placeholder="" className=""/>
            </div>
            <div>
                <button type="submit" id="btn__submit">Submit</button>
            </div>
        </form>
    </main>
  )
}

export default Contact