import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { postReq } from '@/utils/apiHandlers';
import { Loading } from '@/components';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';
import { Navigate, useNavigate } from 'react-router-dom';

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = 'Phone number is required';
    else if (!/^\d{7,15}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';
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

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
      phone: formData.phoneNumber,
    };

    try {
      const res = await postReq('auth/register', payload);
      console.log(res, 'response of api');

      if (res.status && res.data?.success) {
        const { token, user } = res.data;
        toast.success('Registration successful! 🎉');

        // ✅ Save user data in Redux and persist
        dispatch(setUser({ user, token }));
        navigate('/');
      } else {
        const msg = res?.error?.message || 'Registration failed';
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
      <div className="min-h-screen font-montserrat  bg-gradient-to-br from-[#0f1c4d] via-[#3f2a85] to-[#7e3ff2] flex md:items-start items-center justify-center md:justify-end px-2 md:px-8 py-2 md:py-10">
        <div className="bg-white rounded-xl md:mt-8 md:mr-8 shadow-2xl p-4 md:p-10 w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-4 text-center">
            Sign Up
          </h1>
          <p className="text-base text-center text-gray-600 mb-1 md:mb-6">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here!
            </a>
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                disabled={loading}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number*
              </label>
              <div
                className={`flex items-center border rounded-md overflow-hidden mt-1 ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <select
                  name="phoneCountryCode"
                  value={formData.phoneCountryCode}
                  onChange={handleChange}
                  className="bg-gray-100 text-sm px-2 py-2 border-r border-gray-300 focus:outline-none"
                  disabled={loading}
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 focus:outline-none"
                  disabled={loading}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Password*
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className={`mt-1 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500 ${
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
                    Registering...
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
