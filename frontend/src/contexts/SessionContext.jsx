import { createContext, useCallback, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";

export const SessionContext = createContext({
    session: null,
    isLoggedIn: false,
    isLoading: false,
    setSession: () => {},
    checkSession: () => {},
})

export const SessionProvider = ({children}) => {
    const [session, setSession] = useState({
        active: false,
        firstName: null,
        lastName: null,
    })

    const [isLoading, setIsLoading] = useState(true);

    const checkSession = useCallback(() => {
        setIsLoading(true);
        const token = localStorage.getItem('ecotoken');
        let decoded = null;

        try {
            decoded = jwtDecode(token || '');
        } catch (e) {
            console.log('no valid token found');
        }

        if (decoded) {
          setSession({
            active: true,
            firstName: decoded.firstName || 'user',
            lastName: decoded.lastName || ''
          });

        } else {
          setSession({
            active: false,
            firstName: null,
            lastName: null,
          });
        }
        setIsLoading(false);
      }, []);

    useEffect(() => {
        checkSession();
    },
    [checkSession])

    const isLoggedIn = !!session.active;
    
    return (
      <SessionContext.Provider value={{ isLoggedIn, session, isLoading, setSession, checkSession }}>
        {children}
      </SessionContext.Provider>
    );
}