import { Outlet } from "react-router-dom";
import TopMenu from "./component/TopMenu";
import Header from "./component/Header";
import Footer from "./component/Footer"
const Layout=()=>{
    return(
        <>
<Header/>
<TopMenu/>
<hr />
<Outlet/>
<hr />
<Footer/>
        </>
    )
}
export default Layout;