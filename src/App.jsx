import { useState } from 'react'
import './App.css';
import { FaCartArrowDown } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

const products = [ {
 id:1,
 category:"Redmi",
 img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962150/th_nksf2m.jpg",
 price:"20000",
 rating:"4.5",
 discription:" vivo Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.."


}
,{id:2,
  category:"vivo",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962375/th_1_pd8qqh.jpg",
  price:"40000",
  rating:"4.0",
  discription:" vivo Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.."

},

{
 id:3,
 category:"realme",
 img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962462/th_2_uiyiez.jpg",
 rating:"4.5",
 price:"20000",
 discription:" vivo Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.."


},
{
  id:1,
  category:"apple",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962150/th_nksf2m.jpg",
  price:"20000",
  rating:"4.5",
  discription:" vivo Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.."
 
 }
 ,{id:2,
   category:"iq00",
   img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962375/th_1_pd8qqh.jpg",
   price:"40000",
   rating:"4.0",
   discription:"  real me Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices..Redmi Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.." 
 },
 
 {
  id:3,
  category:"mobiles",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962462/th_2_uiyiez.jpg",
  rating:"4.9",
  price:"20000",
  discription:" Xiaomi Redmi Note 4 best price is Rs. 7,890 as on 6th November 2024. See full specifications, expert reviews, user ratings, and more. Compare Xiaomi Redmi Note 4 prices.."
 
 }
,
 
 {
  id:4,
  category:"labtops",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962680/th_3_lcindk.jpg",
  rating:"4.4",
  price:"20000",
  discription:"The Macintosh, or Mac, is Apple's line of personal computers. Its main product types are the iMac all-in-one desktop, Mac mini standard desktop, Mac Studio media-focused desktop, Mac Pro professional production workstation desktop, MacBook Air consumer laptop and MacBook Pro professional laptop. All Mac computers use the macOS operating system."
   

 }

,
{
  id:5,
  category:"labtops",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962726/th_4_sk8d24.jpg",
  rating:"4.6",
  price:"20000",
  discription:"The Macintosh, or Mac, is Apple's line of personal computers. Its main product types are the iMac all-in-one desktop, Mac mini standard desktop, Mac Studio media-focused desktop, Mac Pro professional production workstation desktop, MacBook Air consumer laptop and MacBook Pro professional laptop. All Mac computers use the macOS operating system."

 },

 {
  id:6,
  category:"labtops",
  img:"https://res.cloudinary.com/djexsyuur/image/upload/v1730962680/th_3_lcindk.jpg",
  rating:"4.7",
  price:"20000",
  discription:"The Macintosh, or Mac, is Apple's line of personal computers. Its main product types are the iMac all-in-one desktop, Mac mini standard desktop, Mac Studio media-focused desktop, Mac Pro professional production workstation desktop, MacBook Air consumer laptop and MacBook Pro professional laptop. All Mac computers use the macOS operating system."
  

}






]






  return (
     <div className='overall_container'>

      {/* navbar container */}

      <div className='  navbar flex justify-between items-center  sticky z-10 top-1 p-2 bg-red-200 rounded-lg border-sky-300 min-h-fit w-full overflow-hidden'> <h1 className='font-semibold'> Amazon.in </h1>  <div className='flex justify-center items-center gap-x-5'> <span className='font-bold'>sign in </span>  <FaCartArrowDown className='text-2xl'/></div> </div>


 {/* products container */}
 <div className='flex flex-row  flex-wrap gap-x-7 gap-y-3 justify-center'> 

     {
          products.map((element, index )=>(
            <div className='flex flex-row' key={element.id}>
              <div className='flex flex-col   items-center max-w-80 rounded-lg h-content border-4 gap-y-2'>
                        <span className='font-bold'> {element.category}</span>
                        <img className='w-full h-auto' src={element.img}/>
                        <p className='flex justify-between gap-x-2 items-center w-full'> <span  className='bg-blue-600 w-fit text-white p-2 rounded-lg '>Rating:{element.rating}  </span> <span className='bg-orange-400 text-white p-2 rounded-lg'> price{element.price} </span></p>
                        <p className='text-ellipsis'>{element.discription}</p>

              </div>

           </div>





          ))
      



     }

</div>




    </div>
  
  )
}

export default App






























