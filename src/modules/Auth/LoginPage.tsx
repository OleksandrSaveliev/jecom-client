import React, { useState } from "react";
import Button from "../../components/Button";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center h-screen-minus-header px-4">
      <div className="w-full max-w-xl p-10 border border-gray-200 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Sign in to your account
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <Button
            color="primary"
            size="lg"
            type="submit"
          >
            Sign In
          </Button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Or continue with{" "}
          <a
            href="/oauth2/authorization/github"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="/oauth2/authorization/google"
            className="text-blue-600 hover:underline"
          >
            Google
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
