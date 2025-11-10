import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [emailId, setEmailId] = useState("ohvy@gmail.com");
  const [password, setPassword] = useState("elTon2s87Vs@9038");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        { emailId, password },
        { withCredentials: true } // 👈 important
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text"> Email ID</span>
              </div>
              <input
                type="text"
                className="input input-bodered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-20">
              <div className="label">
                <span className="label-text"> Password</span>
              </div>
              <input
                type="text"
                className="input input-bodered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn bg-violet-600 hover:bg-violet-700 text-white border-none px-6 py-3 text-base"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
