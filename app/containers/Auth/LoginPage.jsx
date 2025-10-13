import React, { useState } from 'react';

export default function LoginPage() {
  // State for the country code and phone number
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, like making API call
    // Example: console.log(`Country: ${countryCode}, Phone: ${phone}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1c4d] via-[#3f2a85] to-[#7e3ff2] flex items-start justify-end px-8 py-10">
      <div className="bg-white rounded-xl mt-8 mr-8 shadow-2xl p-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Sign in
        </h1>
        <p className="text-base text-center text-gray-600 mb-6">
          If you don’t have an account,{' '}
          <a
            href="/registration"
            className="text-purple-600 font-semibold hover:underline"
          >
            Register here!
          </a>
        </p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number*
          </label>
          <div className="flex items-center border border-purple-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-purple-500">
            <select
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="bg-gray-100 text-sm px-3 py-2 border-r border-purple-300 focus:outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md border border-purple-700 hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
