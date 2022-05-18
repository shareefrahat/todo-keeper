import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SocialLogin from "../components/SocialLogin";
import auth from "../firebase.init";

const Signup = () => {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordInput, setPasswordInput] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const handlePassword = (e) => {
    const password = e.target.value;
    setPasswordInput(password);
  };

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (passwordInput !== confirmPassword) {
      setPasswordMatch(!true);
      return;
    } else {
      setPasswordMatch(true);
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      toast.success("Verification email sent", { id: "signup" });
    }
  };
  return (
    <>
      <div className="my-10 mx-10">
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <form onSubmit={handleSignUp} className="space-y-6">
            <section>
              <div className="flex flex-row justify-evenly items-center rounded bg-gray-200 font-serif font-medium mb-2">
                <Link
                  to="/login"
                  className="text-black px-4 py-2 w-full rounded hover:text-blue-700"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-700 text-white px-4 py-2 w-full rounded"
                >
                  <span>Signup</span>
                </Link>
              </div>
            </section>
            <div>
              {error ? <p className="text-red-700">{error?.message}</p> : ""}
            </div>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
              >
                Password
              </label>
              <input
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-left"
              >
                Confirm Password
              </label>
              <input
                onChange={handleConfirmPassword}
                type="password"
                name="ConfirmPassword"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <div>
                {!passwordMatch ? (
                  <p className="my-2 text-left text-red-700">
                    Password not matched
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with policy
                </label>
              </div>
              <a
                href="/"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Terms & conditions
              </a>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"
            >
              {loading ? "Loading..." : "Signup"}
            </button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-left">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login here
              </Link>
            </div>
          </form>
          <div className="mt-5">
            <div className="flex flex-row justify-center items-center">
              <div className="w-full bg-gray-400">
                <hr />
              </div>
              <span className="mx-2 text-gray-500 font-serif text-sm font-medium">
                Or
              </span>
              <div className="w-full bg-gray-400">
                <hr />
              </div>
            </div>
            <div className="mt-4">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
