import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
// import {Redirect} from 'react-router'
import Main from './views/Main';
import Detail from './views/Detail'; // Make sure names match
import Update from './views/Update';
import SfhardForm from './components/SfhardForm';
import './App.css'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/sfhards" replace />} /> {/* Change line */}
        <Route element={<Main />} path="/sfhards" /> {/* Change line */}
        <Route element={<SfhardForm />} path="/sfhards/create" /> {/* Change line */}
        <Route element={<Detail />} path="/sfhards/:_id" /> {/* Change line */}
        <Route element={<Update />} path="/sfhards/:_id/edit" /> {/* Change line */}
      </Routes>
    </div>
  );
}
export default App;