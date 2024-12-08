import React from 'react'

const Offer = () => {
  return (
    <section className=" bg-[url('../src/assets/bg-men.jpeg')] bg-cover bg-center w-full px-4 py-24  mt-16">
        <div className='p-5 max-[400px]:p-2 flex flex-col  gap-2'>
            <h2 className='font-bold text-7xl max-[400px]:text-3xl  '>Super Sales 50%</h2>
            <h3 className=' text-2xl font-bold max-[400px]:text-xl' >Men's  leather  Formal  Wear Shoes</h3>
            <button className='bg-yellow-300 text-black font-bold p-3 w-fit  rounded-full text-sm '>Go to store</button>
        </div>
    </section>
  )
}

export default Offer