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
    console.clear();
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
          <div className="w-full bg-indigo-50 p-6 mt-10">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              {/* Left: Profile Image + Name */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-2xl text-white font-bold">
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
                <h1 className="text-2xl font-bold text-indigo-900">
                  {firstName || lastName ? `${firstName} ${lastName}` : 'Rinki Sharma'}
                </h1>
              </div>

              {/* Right: Contact Info */}
              <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 text-indigo-800 text-sm">
                <div className="flex flex-col items-start">
                  <label className="text-xl font-semibold text-indigo-900 mb-1">Phone</label>
                  <div className="flex items-center gap-2">
                    <span>📞</span>
                    <span>+91 88599 46950</span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <label className="text-xl font-semibold text-indigo-900 mb-1">Email</label>
                  <div className="flex items-center gap-2">
                    <span>📧</span>
                    <span>rinkii20sharma@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="w-full bg-indigo-100 text-xl pl-2">
            <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Users' }]} />
          </div>

          {/* Tabs */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-3 gap-4 mb-8 p-2">
            {['update', 'documents', 'bookings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-4 rounded-md font-medium w-full ${
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
          <div className="w-full bg-white py-8">
            <div className="flex flex-col md:flex-row items-start gap-6 w-full max-w-7xl mx-auto px-4">
              {/* Profile Image */}
              <div className="flex-[1] flex flex-col items-center bg-indigo-50 p-4 rounded-md">
                <div className="w-44 h-44 relative rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl text-gray-500">👤</span>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    title="Upload Profile Image"
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-indigo-800">
                  {firstName || lastName ? `${firstName} ${lastName}` : 'Rinki Sharma'}
                </h2>
              </div>

              {/* Personal Details Form */}
              <div className="flex-[2] border border-indigo-200 rounded-xl bg-white">
                <h1 className="text-2xl px-6 pt-6 pb-4 text-left font-semibold text-indigo-900 border-b border-indigo-300">
                  Personal Details
                </h1>

                <div className="p-6">
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-900">
                    <CustomField label="First Name*" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <CustomField label="Last Name*" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <CustomField label="Phone No." type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <CustomField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <CustomField label="DOB*" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                    <CustomField label="Gender*" type="select" value={gender} onChange={(e) => setGender(e.target.value)} options={['Female', 'Male', 'Other']} />
                    <CustomField label="State" type="text" value={state} onChange={(e) => setState(e.target.value)} />
                    <CustomField label="Pincode" type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    <CustomField label="Address Type" type="textarea" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} spanFull />
                  </form>

                  {/* Save Button */}
                  <div className="mt-6 text-left">
                    <CustomButton
                      variant="primary"
                      onClick={handleSave}
                      className="bg-purple-700 text-white hover:bg-purple-800 px-8 py-2 font-semibold shadow-md transition !rounded-full max-h-[60px] text-lg md:text-base"
                    >
                      Save
                    </CustomButton>
                  </div>

                  {/* Delete Section */}
                  <div className="mt-10 border-t pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <p className="text-indigo-900 font-medium text-base">Delete your profile</p>
                      <CustomButton
                        variant="primary"
                        className="bg-red-600 text-white hover:bg-red-700 px-8 py-2 font-semibold shadow-md transition !rounded-full max-h-[60px] text-lg md:text-base"
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