import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' exact Component={StreamList}/>
            <Route path='/streams/new' Component={StreamCreate} />
            <Route path='/streams/edit' Component={StreamEdit} />
            <Route path='/streams/delete'  Component={StreamDelete} />
            <Route path='/streams/show'  Component={StreamShow} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App