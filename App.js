import React from 'react'



import Header from './components/Header'
import Main from './components/Main'
import data from './data'


const App = () => {
   const mainSection = data.map(item => <Main  key={item.title} {...item}/>)
    return (
       <>
        <Header />
        {mainSection}
       </>
    )
}

export default App