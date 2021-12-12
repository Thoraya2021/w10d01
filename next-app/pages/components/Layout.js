import Nav from "./Navbar";
import Posts from "../Posts";
const Layout = ({childern}) => {
    return (  
<>

<Nav />
<Posts/>
{childern}

</>

    );
}
 
export default Layout; 