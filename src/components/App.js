
import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import components */
import Main from './Main';
import Quiz from './Quiz';

/** React routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/quiz',
    element: <Quiz></Quiz>
  },
  {
    path: '/result',
    element: <div>Result Component </div>
  },

])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
