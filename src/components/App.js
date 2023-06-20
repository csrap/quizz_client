
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** React routes */

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Root Element </div>
  }
])

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  );
}

export default App;
