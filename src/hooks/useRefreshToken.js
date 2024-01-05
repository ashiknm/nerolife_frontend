import axios from "../api/axios";
import useAuth from "./useAuth";


function useRefreshToken() {
    const {auth, setAuth} = useAuth();

    const refresh = async ()=>{
        console.log("refresh token",localStorage.getItem('refreshToken'))
        const response = await axios.post('/refresh',{},{
            withCredentials : true,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('refreshToken')}`,  // Include access token in the Authorization header
                'Content-Type': 'application/json',  // Set Content-Type if needed
            },
        } );

        setAuth(prev =>{
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, accessToken : response.data.accessToken}
        });
        return response.data.accessToken;
    } 
    return refresh;
}

export default useRefreshToken;