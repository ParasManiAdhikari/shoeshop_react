import React from 'react'

const User = (props) => {
  return (
    <section>
        <img src={props.img} alt="props.name" width={200} />
    </section>
  )
}

export default User