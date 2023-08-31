import React from 'react'

export default function Information() {
  return (
   <section className=" flex py-14">
    <div className="absolute right-96 top-28 ">
        <img src="protection.png" className=" w-24 h-24 mr-96 ml-96"/>
        </div>

        <div className="text-5xl text-black absolute top-32">
          <p className=" flex ml-96 px-64 font-bold ">Personal Information</p>
          </div>


  <div className="flex py-40 ">
      <div className="absolute right-96 top-72">
        <div className=" w-56 h-14 flex mr-64 bg-gray-100 border border-green-300 rounded-2xl">
          <p className=" absolute text-center ml-14 py-3 text-gray-300 text-xl tracking-widest">First Name</p>
          </div>
          
          <div className=" w-56 h-14 flex ml-96 absolute top-0 bg-gray-100 border border-green-300 rounded-2xl">
          <p className=" absolute text-center ml-14 py-3 text-gray-300 text-xl tracking-widest">Last Name</p>
          </div>


          <div className=" w-[608px]  h-14 flex ml-1 absolute top-24 bg-gray-100 border border-green-300 rounded-2xl">
          <p className=" absolute text-center ml-14 py-3 text-gray-300 text-xl tracking-widest">Email.....</p>
          </div>


          <div className=" w-56  h-14 flex ml-1 absolute top-48 bg-gray-100 border border-green-300 rounded-2xl">
            <img src="India.png" className=" w-10 ml-2"/>
            <img src="sort-down.png" className=" w-3 h-2 absolute top-6 ml-12 "/>
          <p className=" absolute text-center ml-16 py-3 text-gray-300 text-xl tracking-widest">+91-----------</p>
          </div>

          <div className=" w-56  h-14 flex ml-96 absolute top-48 bg-green-200 border border-green-300 rounded-2xl">
            <img src="calendar.png" className=" w-10 h-8 ml-2 top-3 absolute"/>
          <p className=" absolute text-center ml-16 py-3 text-gray-500 text-xl tracking-widest">DD/MM/YY</p>
          </div>

           
           
          <div className=" w-44  h-28 flex ml-1 absolute top-72 bg-gray-100 border border-green-300 rounded-2xl">
            <img src="male-gender.png" className=" w-12 h-12 ml-16 top-3 absolute"/>
          <p className=" absolute text-center ml-14 py-16 text-gray-400 text-xl tracking-widest">Male</p>
          </div>

                
          <div className=" w-44  h-28 flex ml-60 absolute top-72 bg-green-200 border border-green-300 rounded-2xl">
            <img src="femenine.png" className=" w-12 h-12 ml-16 top-3 absolute"/>
          <p className=" absolute text-center ml-12 py-16 text-gray-500 text-xl tracking-widest">Female</p>
          </div>


                   
          <div className=" flex- py-96">
          <p className=" absolute text-center ml-1 py-3 text-gray-300 text-xs">
            In order to access some features of the Service,you have will to fill out account details you may use 
            it for buying thing also for shopping process for more details.
            <a className="text-blue-400 underline underline-offset-1">click here</a>
          </p>
          </div>

      
          <div className=" w-56 h-14 flex ml-1 absolute top-96 m-36 bg-green-200 border border-green-300 rounded-2xl">
          <p className=" absolute text-center ml-20 py-3 text-gray-500 text-xl tracking-widest">Save</p>
          </div>

              
          <div className=" w-56 h-14 flex ml-96 absolute top-96 m-36 bg-gray-100 border border-green-300 rounded-2xl">
          <p className=" absolute text-center ml-20 py-3 text-gray-400 text-xl tracking-widest">Cancel</p>
          </div>

                 </div>
             </div>
      
   </section>
  )
} 


 