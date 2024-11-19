import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider
} from "react-router-dom"; 
import Login from './components/login/login';
import App from './App';
import MovieDetails from './components/movies/details';
 
const route = createBrowserRouter([
  {
    path : "/",
    Component : App,
    children : [],  
  },
  {
    path : "login", 
    Component : Login
  },
  {
    path : "movie/:movieId", 
    Component : MovieDetails,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render( 
  <RouterProvider router={route} /> 
)
