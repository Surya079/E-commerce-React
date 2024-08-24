import React from 'react'

const Offer = () => {
  return (
    <section className=" bg-[url('../src/assets/bg-men.jpeg')] bg-cover bg-center w-full px-4 py-24  mt-16">
        <div className='p-5 max-[400px]:p-2 flex flex-col  gap-2'>
            <h2 className='font-bold text-4xl max-[400px]:text-3xl  '>Super Sales 50%</h2>
            <h3 className=' text-lg font-bold'>Men's  leather  Formal  Wear Shoes</h3>
            <button className='bg-black text-white p-3 w-fit  rounded-full text-sm '>Go to store</button>
        </div>
    </section>
  )
}

export default Offer