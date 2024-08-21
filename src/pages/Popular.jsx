import React from 'react'
import { Item } from './Item'
import popular from '../assets/popular'

export const Popular = () => {
  return (
    <section>
        <div>
            <h3>Popular Products</h3>
            <hr />
            {/* Container */}
            <div>
                {popular.map((item)=>(
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} />
                ))}
            </div>
        </div>
    </section>
  )
}
