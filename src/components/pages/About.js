import React from 'react'

// if we type rfc, we get above line and following structure for functional component which is default
// export default function About() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// I have commented above default structure because we can write it as shown below too.
function About() {
  return (
    // in place of default div we can use React.Fragment which doesnot represent anything in the dom but acts as the placeholder for something that the component will return.
    <React.Fragment>
      <h1>About</h1>
      <p>This is a TodoList app v1.0.0. It is the part of a React Crash Course</p>
    </React.Fragment>
  )
}

export default About;
