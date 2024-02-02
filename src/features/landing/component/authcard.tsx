import React, { useState } from "react";

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthCard: React.FC<IProps> = ({ setModalOpen }) => {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };
  return (
    <div
      className="flex min-h-full flex-col justify-center
    px-6 pb-12 pt-6 lg:px-8 bg-white w-[90%] max-w-[425px] rounded-[16px]"
    >
      <div className="flex flex-col">
        <button
          className="self-end mb-6"
          onClick={() => setModalOpen(false)}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#333"
            height={18}
            width={18}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
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
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthCard;
