import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';
import { postReq } from '@/utils/apiHandlers';
import { Loading } from '@/components';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await postReq('auth/login', formData);
      console.log(res, 'Login response');

      if (res.status && res.data?.success) {
        const { token, user } = res.data;

        // Save token in cookie
        Cookies.set('auth_token', token, { expires: 7 });

        // Save user in Redux
        dispatch(setUser({ user, token }));

        toast.success('Login successful! 🎉');
        navigate('/');
      } else {
        const msg = res?.data?.message || 'Login failed';
        toast.error(msg);
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className="min-h-screen font-montserrat bg-gradient-to-br from-[#0f1c4d] via-[#3f2a85] to-[#7e3ff2] flex md:items-start pt-[12vh] md:pt-0 md:justify-end px-2 md:px-8 py-2  md:py-10">
        <div className="bg-white h-[53vh] md:h-auto rounded-xl md:mt-8 md:mr-8 shadow-2xl p-4 md:p-10 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Sign in
          </h1>
          <p className="text-base text-center text-gray-600 mb-6">
            Don’t have an account?{' '}
            <a
              href="/registration"
              className="text-blue-600 font-semibold hover:underline"
            >
              Register here!
            </a>
          </p>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-purple-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
       <div className="md:col-span-2">
  <button
    type="submit"
    disabled={loading}
    className={`relative inline-flex justify-center items-center w-full py-2 rounded-md text-white font-semibold 
      bg-gradient-to-r from-blue-600 via-purple-600 to-red-500 
      bg-[length:200%_200%] bg-[position:0%_0%]
      transition-all duration-300 ease-in-out
      hover:bg-[position:100%_100%] hover:shadow-2xl hover:scale-[1.02]
      focus:outline-none focus:ring-4 focus:ring-purple-300 
      disabled:opacity-50 disabled:cursor-not-allowed
      ${loading ? 'cursor-wait' : ''}
    `}
  >
    {loading ? (
      <>
        <svg
          className="animate-spin mr-2 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
          />
        </svg>
        Logging in...
      </>
    ) : (
      'Login'
    )}
  </button>
</div>


          </form>
        </div>
      </div>
    </>
  );
}
