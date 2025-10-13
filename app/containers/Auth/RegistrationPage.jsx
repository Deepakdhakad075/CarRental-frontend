import React, { useState } from 'react';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountryCode: '+91',
    phoneNumber: '',
    dob: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number is invalid';
    }

    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dob)) {
      newErrors.dob = 'Date of Birth must be in DD/MM/YYYY format';
    }

    if (!formData.gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    if (!validate()) return;

    setLoading(true);

    try {
      // Simulate async OTP send action
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess('OTP sent successfully!');
    } catch (err) {
      setErrors({ submit: 'Failed to send OTP. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1c4d] via-[#3f2a85] to-[#7e3ff2] flex items-start justify-end px-8 py-10">
      <div className="bg-white rounded-xl mt-8 mr-8 shadow-2xl p-10 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Sign up</h1>
        <p className="text-base text-center text-gray-600 mb-6">
          If you already have an account,{' '}
          <a href="/login" className="text-purple-600 font-semibold hover:underline">
            Login here!
          </a>
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name*</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={loading}
            />
            {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name*</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={loading}
            />
            {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email ID*</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={loading}
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number*</label>
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
            {errors.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth*</label>
            <input
              type="text"
              name="dob"
              placeholder="DD/MM/YYYY"
              value={formData.dob}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.dob ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={loading}
            />
            {errors.dob && <p className="text-red-600 text-sm mt-1">{errors.dob}</p>}
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender*</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                errors.gender ? 'border-red-500' : 'border-gray-300'
              }`}
              disabled={loading}
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-600 text-sm mt-1">{errors.gender}</p>}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-purple-600 text-white py-2 rounded-md border border-purple-700 hover:bg-purple-700 transition ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending OTP...' : 'Send OTP'}
            </button>
          </div>
          {errors.submit && (
            <p className="md:col-span-2 text-red-600 text-center text-sm mt-1">{errors.submit}</p>
          )}
          {success && (
            <p className="md:col-span-2 text-green-600 text-center text-sm mt-1">{success}</p>
          )}
        </form>
      </div>
    </div>
  );
}
