import React, { useState } from 'react';
import Container from '@/components/custom-pages/container';
import CustomButton from '@/components/custom-button/Button';

function Everification() {
  const [dobPan, setDobPan] = useState('10/10/2000');
  const [panNumber, setPanNumber] = useState('');
  const [dlNumber, setDlNumber] = useState('');
  const [dlFront, setDlFront] = useState(null);
  const [dlBack, setDlBack] = useState(null);
  const [aadharFront, setAadharFront] = useState(null);
  const [aadharBack, setAadharBack] = useState(null);

  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    switch (type) {
      case 'dlFront':
        setDlFront(file);
        break;
      case 'dlBack':
        setDlBack(file);
        break;
      case 'aadharFront':
        setAadharFront(file);
        break;
      case 'aadharBack':
        setAadharBack(file);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    console.clear();
    console.log('Saved DOB as per PAN:', dobPan);
    console.log('PAN Number:', panNumber);
    console.log('DL Number:', dlNumber);
    console.log('DL Front:', dlFront);
    console.log('DL Back:', dlBack);
    console.log('Aadhar Front:', aadharFront);
    console.log('Aadhar Back:', aadharBack);
  };

  return (
    <Container
      variant="white"
      header={
        <div className="bg-white p-6 rounded-xl max-w-4xl mx-auto mt-10 w-full">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-left">
            Document Verification
            <span className="text-sm font-semibold text-indigo-600 ml-2">
              (For faster processing of booking)
            </span>
          </h2>

          {/* DOB */}
          <div className="mb-4 text-left">
            <label className="block  text-indigo-900 font-medium  mb-1">
              Date of Birth as PAN*
            </label>
            <input
              type="text"
              value={dobPan}
              onChange={(e) => setDobPan(e.target.value)}
              className="w-full max-w-xl border px-3 py-2 rounded-md"
              placeholder="DD/MM/YYYY"
            />
          </div>

          {/* PAN Number */}
          <div className="mb-4 text-left">
            <label className="block  text-indigo-900 font-medium  mb-1">
              PAN Number*
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              className="w-full max-w-xl border px-3 py-2 rounded-md"
              placeholder="Enter PAN Number"
            />
          </div>

          {/* DL Number */}
          <div className="mb-4 text-left">
            <label className="block  text-indigo-900 font-medium  mb-1">
              Driving License (Optional)
            </label>
            <input
              type="text"
              value={dlNumber}
              onChange={(e) => setDlNumber(e.target.value)}
              className="w-full max-w-xl border px-3 py-2 rounded-md"
              placeholder="Enter DL Number"
            />
          </div>

          {/* Upload Section */}
          <div className="grid grid-cols-1 gap-8 mt-6">
            {/* Driving License Upload */}
            <div>
              <div className="grid grid-cols-2 gap-6">
                {/* DL Front */}
                <label className="w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M12 4v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  <span className="text-xs text-indigo-600 font-medium text-center">
                    Upload DL Front Side
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(e, 'dlFront')}
                    className="hidden"
                  />
                </label>

                {/* DL Back */}
                <label className="w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M12 4v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  <span className="text-xs text-indigo-600 font-medium text-center">
                    Upload DL Back Side
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(e, 'dlBack')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Aadhar Upload */}
            <div>
              <label className="block text-indigo-900 text-left font-medium mb-2">
                Aadhar Card (Optional)
              </label>
              <div className="grid grid-cols-2 gap-6">
                {/* Aadhar Front */}
                <label className="w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M12 4v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  <span className="text-xs text-indigo-600 font-medium text-center">
                    Upload Aadhar Front Side
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(e, 'aadharFront')}
                    className="hidden"
                  />
                </label>

                {/* Aadhar Back */}
                <label className="w-40 h-40 flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-lg cursor-pointer hover:border-indigo-500 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3M12 4v4m0 0l-3-3m3 3l3-3"
                    />
                  </svg>
                  <span className="text-xs text-indigo-600 font-medium text-center">
                    Upload Aadhar Back Side
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUpload(e, 'aadharBack')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6">
            <CustomButton
              onClick={handleSave}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-44 py-2 rounded-md"
            >
              Save
            </CustomButton>
          </div>

          {/* Note */}
          <div className="mt-8 text-purple-700 font-medium text-sm">
            Note: You need to submit your Driving License and Aadhar Card after
            making payment to confirm your Car booking.
          </div>
        </div>
      }
    />
  );
}

export default Everification;
