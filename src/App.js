import React from 'react';
import AppRouter from './router'
import './App.scss';
import Auth from './components/auth';

function App() {
  return (
      <Auth>
          <div className="app">
              <AppRouter />
          </div>
      </Auth>
  );
}

export default App;