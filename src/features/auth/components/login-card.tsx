"use client";
import { login } from "@/lib/apis/request";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginCard = () => {
  const router = useRouter();
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    login(formField).then((res) => {
      if (res?.success) {
        router.push("/");
      }
    });
  };
  return (
    <div className="h-[100vh] flex flex-col gap-2 justify-center font-merri">
      <div className="w-[100%] px-8 py-6">
        <div className="flex justify-center items-center">
          <p className="text-2xl text-center font-[700]">JudiCMS</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="flex min-h-[50%] flex-col justify-center
          px-6 pb-12 pt-8 lg:px-8 bg-white w-[90%] max-w-[425px] rounded-[16px]"
        >
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login
            </h2>
          </div>

          <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formField.email}
                    onChange={(e) =>
                      setFormField({ ...formField, email: e.target.value })
                    }
                    required
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1
                    ring-inset ring-gray-300 placeholder:text-gray-400
                    focus:ring-1 focus:ring-inset focus:ring-indigo/10 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={formField.password}
                    onChange={(e) =>
                      setFormField({ ...formField, password: e.target.value })
                    }
                    required
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo/10 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="flex w-full justify-center bg-[#262626] px-3 py-1.5 text-sm max-w-[300px] mx-auto
              font-semibold leading-6 text-white shadow-sm hover:bg-[#444] outline-none rounded-full"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
