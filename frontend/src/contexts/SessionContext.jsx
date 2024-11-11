import { createContext, useCallback, useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode";
import { studentsService } from "../services/students.service";

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
        userClass: null
    })

    const [isLoading, setIsLoading] = useState(true);

    const checkSession = useCallback(async () => {
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
          let userClass;
          if (!decoded.isTeacher && decoded.userId) {
            userClass = await studentsService.getClassByStudentId(decoded.userId);
          }
          
          session = {
            active: true,
            firstName: decoded.firstName || 'user',
            lastName: decoded.lastName || '',
            isTeacher: decoded.isTeacher ? true : false, 
            userClass: userClass?.data || null
          };
        } else {
          session = {
            active: false,
            firstName: null,
            lastName: null,
            isTeacher: false,
            userClass: null
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
