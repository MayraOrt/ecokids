import Navbar from "../components/navbar.component"
import GlobalStyle from "../GlobalStyle"

const MainLayout = ({children}) => {
    return(
        <>
            <GlobalStyle /> {/* Füge GlobalStyle hier hinzu */}
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout