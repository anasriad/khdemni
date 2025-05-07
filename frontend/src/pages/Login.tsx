import KhdemniLogo from "../assets/Khdemni.png";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../API/UserSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCurrentUser, Login_ } from "../states/authSlice";
export default function Login() {
    const navigate = useNavigate();
    const [login, { isLoading, error }] = useLoginMutation();
    const Dispatch = useDispatch()
    const user = useSelector(getCurrentUser)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                const userData = await login(values).unwrap();
                Dispatch(Login_({ user: userData }))
                console.log(user)
                navigate("/ProfilePage");
                toast.success('Welcome to Your Profile')
            } catch (err) {
                console.log(err)
                toast.error('Error Logging in')
            }
        },
    });

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div
                    className="sm:mx-auto sm:w-full sm:max-w-sm hover:cursor-pointer hover:scale-105 hover:duration-300"
                    onClick={() => navigate("/")}
                >
                    <img alt="Khdemni Logo" src={KhdemniLogo} className="mx-auto h-48 w-auto" />
                    <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        {error && <div className="text-red-500 text-sm">Login failed. Check your credentials.</div>}

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-indigo-600"
                            >
                                {isLoading ? "Signing in..." : "Sign in"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
