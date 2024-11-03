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
        isTeacher: false,
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

        let session;

        if (decoded) {
          session = {
            active: true,
            firstName: decoded.firstName || 'user',
            lastName: decoded.lastName || '',
            isTeacher: decoded.isTeacher ? true : false, 
          };
        } else {
          session = {
            active: false,
            firstName: null,
            lastName: null,
            isTeacher: false
          };
        }

        setSession(session)
        setIsLoading(false);
        return session;
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
