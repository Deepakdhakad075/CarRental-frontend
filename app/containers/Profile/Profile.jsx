import React, { useState } from 'react';
import Container from '@/components/custom-pages/container';
import Breadcrumb from '@/components/custom-pages/Breadcrumb';
import CustomField from '@/components/custom-pages/CustomField';
import CustomButton from '@/components/custom-button/Button';

function Profile() {
  const [activeTab, setActiveTab] = useState('update');
  const [profileImage, setProfileImage] = useState(null);

  // Form field states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    const formData = {
      firstName,
      lastName,
      phone,
      email,
      dob,
      gender,
      state,
      pincode,
      address,
      profileImage,
    };
    console.log('Saved Profile Data:', formData);
  };

  return (
    <Container
      variant="white"
      header={
        <>
          {/* Header Section */}
          <div className="w-full bg-indigo-50 p-4 sm:p-6 mt-6 sm:mt-10 font-montserrat">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              {/* Left: Profile Image + Name */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 relative rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-2xl sm:text-3xl text-white font-bold">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span>👤</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    title="Upload Profile Image"
                  />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-indigo-900">
                  {firstName || lastName ? `${firstName} ${lastName}` : 'Rinki Sharma'}
                </h1>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-indigo-800 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 88599 46950</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>rinkii20sharma@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="w-full bg-indigo-100 text-base sm:text-lg pl-2 py-2">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Users' }]} />
          </div>

          {/* Tabs */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 p-2 sm:p-0">
            {['update', 'documents', 'bookings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 sm:px-4 sm:py-3 rounded-md font-medium w-full text-sm sm:text-base ${
                  activeTab === tab
                    ? 'bg-indigo-700 text-white'
                    : 'bg-white border border-indigo-700 text-indigo-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Profile Section */}
          <div className="w-full bg-white py-6 sm:py-8">
            <div className="flex flex-col md:flex-row items-start gap-6 w-full max-w-7xl mx-auto px-4 sm:px-0">
              {/* Profile Image */}
              <div className="flex-[1] flex flex-col items-center bg-indigo-50 p-4 rounded-md">
                <div className="w-36 h-36 sm:w-44 sm:h-44 relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl sm:text-5xl text-gray-500">👤</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    title="Upload Profile Image"
                  />
                </div>
                <h2 className="mt-4 text-lg sm:text-xl font-semibold text-indigo-800 text-center">
                  {firstName || lastName ? `${firstName} ${lastName}` : 'Rinki Sharma'}
                </h2>
              </div>

              {/* Personal Details Form */}
              <div className="flex-[2] border border-indigo-200 rounded-xl bg-white w-full">
                <h1 className="text-xl sm:text-2xl px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 font-semibold text-indigo-900 border-b border-indigo-300">
                  Personal Details
                </h1>

                <div className="p-4 sm:p-6">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base text-indigo-900">
                    <CustomField label="First Name*" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <CustomField label="Last Name*" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <CustomField label="Phone No." type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <CustomField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <CustomField label="DOB*" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                    <CustomField label="Gender*" type="select" value={gender} onChange={(e) => setGender(e.target.value)} options={['Female', 'Male', 'Other']} />
                    <CustomField label="State" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    <CustomField label="Pincode" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <CustomField label="Address" type="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} spanFull />
                  </form>

                  {/* Save Button */}
                  <div className="mt-6 text-left">
                    <CustomButton
                      variant="primary"
                      onClick={handleSave}
                      className="bg-purple-700 text-white hover:bg-purple-800 px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md transition !rounded-full text-base sm:text-lg"
                    >
                      Save
                    </CustomButton>
                  </div>

                  {/* Delete Section */}
                  <div className="mt-8 sm:mt-10 border-t pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-indigo-900 font-medium text-base sm:text-lg">Delete your profile</p>
                      <CustomButton
                        variant="primary"
                        className="bg-red-600 text-white hover:bg-red-700 px-6 sm:px-8 py-2 sm:py-3 font-semibold shadow-md transition !rounded-full text-base sm:text-lg"
                      >
                        Delete
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}

export default Profile;
