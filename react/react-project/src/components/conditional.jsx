// import React from 'react'

// const conditional = () => {
//   let isLoggedIn = true;
//   if(isLoggedIn){
//     return <h1>Welcome back!</h1>
//   }
//   else{
//     return <h1>Please log in.</h1>
//   }
// }

// export default conditional


import React from 'react'
import { useState } from 'react'

const Conditional = () => {
    const [isVisible,setIsVisible]=useState(true)
  let isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        <button onClick={()=>setIsVisible(!isVisible)}>Toggle</button>
        {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus saepe culpa
             necessitatibus cupiditate dignissimos odio inventore labore quibusdam, molestiae, excepturi a libero expedita
              illum illo delectus veritatis nam voluptas eius hic laboriosam! Iure, dolores iusto facilis maiores ea quod
               numquam provident eum. Pariatur voluptatem similique, ipsa ea tempore hic maxime commodi quis libero dicta veritatis atque, 
               facilis consequuntur vitae labore nam provident! Quam error, iste consectetur eligendi labore odio maiores eum beatae maxime
                iusto nesciunt quos minima obcaecati eos necessitatibus, possimus quod enim inventore consequatur deleniti!
             Eaque laudantium sit suscipit asperiores commodi nostrum aliquam molestiae totam! Est, nesciunt eius!</p>}
    </>
    
  )
}

export default Conditional

