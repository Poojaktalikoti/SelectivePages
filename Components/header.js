import { BsFillPersonFill ,BsFillCartFill ,BsSearch } from "react-icons/bs";

export default function header() {
  return (
    <header className=" bg-green-300">
       <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none flex justify-center">
            </div>
           <div className="w-80 order-3 flex justify-center">
            <div className="flex gap-6">
            <a><BsSearch/></a>
            <a><BsFillPersonFill/></a>
            <a><BsFillCartFill/></a> 
           
            </div>
            
            </div>  
        </div>

</header>

  )
}
