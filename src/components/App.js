
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** React routes */

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element </div>
  },
  {
    path: '/quiz',
    element: <div>Quiz Component </div>
  },
  {
    path: '/result',
    element: <div>Result Component </div>
  },

])

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
