import React, { useState } from 'react';
import Container from '@/components/custom-pages/container';
import CustomField from '@/components/custom-pages/CustomField';
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
      case 'dlFront': setDlFront(file); break;
      case 'dlBack': setDlBack(file); break;
      case 'aadharFront': setAadharFront(file); break;
      case 'aadharBack': setAadharBack(file); break;
      default: break;
    }
  };

  const handleValidate = () => {
    console.log('Validating PAN:', panNumber);
    console.log('Validating DL:', dlNumber);
  };

  const handleSave = () => {
    console.clear();
    console.log('Saved DOB as per PAN:', dobPan);
    console.log('DL Front:', dlFront);
    console.log('DL Back:', dlBack);
    console.log('Aadhar Front:', aadharFront);
    console.log('Aadhar Back:', aadharBack);
  };

  return (
    <Container
      variant="white"
      header={
        <div className="bg-white p-6 rounded-xl shadow-md max-w-8xl mx-auto mt-10 w-full">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6 text-left">
            Document Verification
            <span className="text-sm font-semibold text-indigo-600 ml-2">
              (For faster processing of booking)
            </span>
          </h2>

          {/* DOB as per PAN */}
          <div className="flex items-center gap-4 mb-4">
            <CustomField
              label="Date of Birth as PAN*"
              type="text"
              value={dobPan}
              onChange={(e) => setDobPan(e.target.value)}
            />
            <CustomButton onClick={handleSave}>Save</CustomButton>
          </div>

          {/* PAN Number */}
          <div className="flex items-center gap-4 mb-4">
            <CustomField
              label="Pan Number*"
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="Enter PAN Number"
            />
            <CustomButton onClick={handleValidate}>Validate</CustomButton>
          </div>

          {/* DL Number */}
          <div className="flex items-center gap-4 mb-4">
            <CustomField
              label="Driving License (Optional)"
              type="text"
              value={dlNumber}
              onChange={(e) => setDlNumber(e.target.value)}
              placeholder="Enter DL Number"
            />
            <CustomButton onClick={handleValidate}>Validate</CustomButton>
          </div>

          {/* Upload Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col items-start">
              <label className="mb-2 font-medium text-indigo-900">Upload DL Front Side</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'dlFront')} />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-2 font-medium text-indigo-900">Upload DL Back Side</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'dlBack')} />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-2 font-medium text-indigo-900">Upload Aadhar Front Side (Optional)</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'aadharFront')} />
            </div>
            <div className="flex flex-col items-start">
              <label className="mb-2 font-medium text-indigo-900">Upload Aadhar Back Side (Optional)</label>
              <input type="file" accept="image/*" onChange={(e) => handleUpload(e, 'aadharBack')} />
            </div>
          </div>

          {/* DigiLocker Button */}
          <div className="mt-6">
            <CustomButton className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md">
              DigiLocker
            </CustomButton>
          </div>

          {/* Note */}
          <div className="mt-8 text-purple-700 font-medium text-sm">
            Note: You need to submit your Driving License and Aadhar Card after making payment to confirm your Car booking.
          </div>
        </div>
      }
    />
  );
}

export default Everification;