import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <>
      <div className="mt-4">
        <button
          onClick={() => signInWithGoogle()}
          className="flex flex-row justify-center items-center border border-blue-600 rounded p-1 mx-auto shadow-md"
        >
          <p className="mx-2 font-serif font-medium text-md">
            {loading ? "Loading..." : " Continue with Google"}
          </p>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
