import Navbar from "../components/navbar.component"
import GlobalStyle from "../GlobalStyle"

const MainLayout = ({children}) => {
    return(
        <>
            <GlobalStyle /> 
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout