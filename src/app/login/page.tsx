import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="gradient-form h-full bg-neutral-200">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="lg:flex lg:flex-wrap">
                {/* Left-column */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <Image
                        src="/logo.webp"
                        alt="logo"
                        width={200}
                        height={200}
                        className="mx-auto w-48"
                      ></Image>
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Vu Tu <span className="text-accent text-sm">.Blog</span>
                      </h4>
                    </div>
                    {/* Form */}
                    <form action="">
                      <p className="mb-4">Please login to your account</p>
                      {/* username */}
                      <div className="relative mb-4">
                        <input
                          type="text"
                          placeholder="Username"
                          id="username"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[3.2px] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        />
                        <Label
                          htmlFor="usernameLabel"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[3.7px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[9px] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[9px] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Username
                        </Label>
                      </div>
                      {/* Password */}
                      <div className="relative mb-4">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[3.2px] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <Label
                          htmlFor="PasswordLabel"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[3.7px] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[9px] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[9px] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Password
                        </Label>
                        {/* Submit */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <Button
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 "
                          >
                            Login
                          </Button>

                          {/* forgot */}
                          <Link href="#!">Forgot password?</Link>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            <Link href="/register">Register</Link>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none">
                  <Image
                    src="/assets/login.jpg"
                    alt="logo"
                    width={200}
                    height={200}
                    quality={100}
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
