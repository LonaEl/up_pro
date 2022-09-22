import axios from "axios";
import React, {useState, useEffect, Fragment} from "react";
import { useParams } from "react-router-dom";

const PasswordReset = () => {
    const [validUrl, setValidUrl] = useState(false);
    const [password, setPassword] = useState("");
    const param = useParams();
    const url = `http://localhost:5000/api/password-reset/${param.id}/${param.token}`

  useEffect(() => {
    const verifyUrl = async() => {
        try {
            await axios.get(url);
            setValidUrl(true)
        } catch (error) {
            setValidUrl(false)
        }
    };
    verifyUrl()
  }, [param, url]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const { data } = await axios.post(url, { password });
        window.location = "/auth"
    } catch (error) {
        console.log(error)
    }
  };

    return (
       <Fragment>
        {validUrl ? (
            <div>
                <form onSubmit={handleSubmit} >
                    <h1>Create new password</h1>
                    <input 
                    type="password"
                    placeholder="Enter password"
                    name="name"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </form>
            </div>
        ) : (
            <h1>404 Not Found</h1>
        )}
       </Fragment>
    )
};

export default PasswordReset;