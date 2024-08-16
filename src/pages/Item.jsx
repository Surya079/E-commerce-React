import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, name, image, new_price, old_price}) => {
  return (
    <div>
        <div>
            <Link to={`products/${id}`}></Link>
        </div>
    </div>
  )
}

