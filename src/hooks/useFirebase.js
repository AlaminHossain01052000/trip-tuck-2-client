import initializeFirebase from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState("");
    const [admin,setAdmin]=useState(false);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const registerNewUser = (name, email, password, navigate) => {
        setLoading(true);
        console.log(name,email,password,auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const newUser = { displayName: name, email: email };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Set User Display Name

                }).catch((error) => {
                    // An error occurred At the time of setting user displayName

                });

                fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                setLoading(false)
                navigate("/");
            })
            .catch((error) => {

                console.log(error)
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const loginUser = (email, password, navigate, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log(userCredential)
                setError("");
                const redirect_url = location?.state?.from || "/";
                navigate(`../${redirect_url}`, { replace: true })
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const googleLogIn = (navigate, location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError("");
                const newUser = { displayName: result.user.displayName, email: result.user.email };

                fetch("http://localhost:5000/users", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()

                const redirect_url = location?.state?.from || "/home";
                navigate(`../${redirect_url}`, { replace: true })
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const handleLogOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setUser({})
            setLoading(false);
        })
    }
   
    useEffect(() => {
        setLoading(true);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user.email)
                if(user.email==="siyam@gmail.com")setAdmin(true)
                else setAdmin(false)
            }
            else {
                setUser({});

            }
            setLoading(false);
        });
    }, [auth])

    return {
        user,
        googleLogIn,
        handleLogOut,
        loading,
        setLoading,
        registerNewUser,
        loginUser,
        error,
        admin
    }
}
export default useFirebase;