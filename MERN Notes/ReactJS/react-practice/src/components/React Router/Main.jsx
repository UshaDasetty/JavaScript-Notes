import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home'
import About from './About'
import Contact from './Contact'

const Main = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout/> }>
                <Route index element={< Home />} />
                <Route path='/about' element={< About />} />
                <Route exact path='/contact' element={< Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main