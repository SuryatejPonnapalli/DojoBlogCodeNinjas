import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <p>The page you are looking for is not present.</p>
            <Link to='/'>Back to home</Link>
        </div>
     );
}
 
export default NotFound;