import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'
console.log(Data)


const App = () => {
  const cards = Data.map((item) => {
    return(
      
      <Card key={item.id}
            item={item}
         
       
      />
      
    )
  })
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards-list'>
      {cards}
      </section>
      
    </div>
  )
}

export default App
