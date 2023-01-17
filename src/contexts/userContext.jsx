import { createContext, useEffect, useState } from "react";
import { Api } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userRepos, setUserRepos] = useState([]);
    const [windowWidth, setWindowWidth] = useState(0);

    window.addEventListener("resize", (e) => {
        setWindowWidth(e.target.innerWidth);
    });

    useEffect(() => {
        const getRepos = async () => {
            setWindowWidth(window.screen.width);

            try {
                const response = await Api.get("/users/Borchoski/repos");
                // console.log(response.data
                setUserRepos(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getRepos();
    }, []);

    return (
        <UserContext.Provider
            value={{
                userRepos,
                windowWidth,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
