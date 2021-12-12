import Nav from "./Navbar";
import Posts from "./Post/Post";
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