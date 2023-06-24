import React from 'react'

function jobDescription() {

  const [jobDescription, setJobDescription] = useState('Jr. Software Engineer position open at Google');
  return (
    <div>{jobDescription}</div>
  )
}

export default jobDescription