import { useState } from "react";

export default function AddStudent() {
  const [step, setStep] = useState(1);

  // Student Data State
  const [studentData, setStudentData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    studentType: "Regular",
    primaryMobile: "",
    email: "",
    caste: "",
    religion: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    bloodGroup: "",
    aadharNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",

    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    fatherMobile: "",
    fatherEmail: "",
    fatherOccupation: "",
    fatherEducation: "",
    fatherAnnualIncome: "",
    fatherAadhar: "",

    motherFirstName: "",
    motherMiddleName: "",
    motherLastName: "",
    motherMobile: "",
    motherEmail: "",
    motherOccupation: "",
    motherEducation: "",
    motherAnnualIncome: "",
    motherAadhar: "",

    // Academic Info
admissionNumber: "",
admissionDate: "",
academicYear: "",
class: "",
section: "",
rollNumber: "",

// Previous School
previousSchool: "",
previousClass: "",
transferCertificate: "",

// Documents (file names ya object)
birthCertificate: null,
aadharCard: null,
transferCertificateDoc: null,
fatherAadharDoc: null,
motherAadharDoc: null,
addressProof: null,
  });

  const [studentImage, setStudentImage] = useState(null);

  // Handle Input Changes
  const handleChange = (e) => {
    setStudentData({ ...studentData, [e.target.id]: e.target.value });
  };

  // Image Upload Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setStudentImage(URL.createObjectURL(file));
  };

  // Validation for Step 1
  const validateStep1 = () => {
    if (!studentData.firstName || !studentData.lastName) {
      alert("Please enter First and Last Name");
      return false;
    }
    if (!studentData.primaryMobile) {
      alert("Enter Mobile Number");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSave = () => {
    console.log("Final Data:", studentData);
    alert("Student Profile Created Successfully ✅");
  };
const steps = [
  "Basic Details",
  "Parent Info",
  "Academic",
  "Documents"
];

const handleNextStep = () => {
  setStep((prev) => prev + 1);
};

const handlePrevStep = () => {
  setStep((prev) => prev - 1);
};

const handleFileChange = (e) => {
  const { id, files } = e.target;
  setStudentData({
    ...studentData,
    [id]: files[0],
  });
};
  return (
    <div className="p-6 w-full bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-900 mb-6 border-b pb-2">
        Add New Student
      </h1>

      {/* Steps Indicator */}
    <div className="flex justify-center mb-8">
  <div className="flex items-center gap-4 flex-wrap">

    {steps.map((label, index) => (
      <div key={index} className="flex items-center gap-2">

        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full
            ${
              step === index + 1
                ? "bg-blue-700 text-white"
                : step > index + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-500"
            }`}
        >
          {step > index + 1 ? "✓" : index + 1}
        </span>

        <span
          className={`text-sm ${
            step === index + 1
              ? "text-blue-700 font-bold"
              : step > index + 1
              ? "text-green-600"
              : "text-gray-400"
          }`}
        >
          {label}
        </span>

        {index < steps.length - 1 && (
          <div className="w-10 h-px bg-gray-300"></div>
        )}

      </div>
    ))}

  </div>
</div>

      {/* STEP 1: Personal Details */}
      {step === 1 && (
        <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold mb-6 text-gray-700">
            Personal Information
          </h2>

          {/* Image Upload */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 border-2 border-dashed rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
              {studentImage ? (
                <img src={studentImage} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-400 text-xs">No Image</span>
              )}
            </div>

            <input type="file" hidden id="photo" onChange={handleImageChange} />
            <button
              onClick={() => document.getElementById("photo").click()}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded"
            >
              Upload Image
            </button>
          </div>

          {/* Personal Details */}
          <div className="grid md:grid-cols-3 gap-5">
            <input id="firstName" placeholder="First Name *" value={studentData.firstName} onChange={handleChange} className="border p-2 rounded" />
            <input id="middleName" placeholder="Middle Name" value={studentData.middleName} onChange={handleChange} className="border p-2 rounded" />
            <input id="lastName" placeholder="Last Name *" value={studentData.lastName} onChange={handleChange} className="border p-2 rounded" />

            <input id="primaryMobile" placeholder="Mobile *" value={studentData.primaryMobile} onChange={handleChange} className="border p-2 rounded" />

            <select id="studentType" value={studentData.studentType} onChange={handleChange} className="border p-2 rounded">
              <option value="">Student Type</option>
              <option value="Regular">Regular</option>
              <option value="Scholarship">Scholarship</option>
              <option value="Hostel">Hostel</option>
            </select>

            <input id="caste" placeholder="Caste" value={studentData.caste} onChange={handleChange} className="border p-2 rounded" />

            <select id="religion" value={studentData.religion} onChange={handleChange} className="border p-2 rounded">
              <option value="">Religion</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
            </select>

            <input type="date" id="dateOfBirth" value={studentData.dateOfBirth} onChange={handleChange} className="border p-2 rounded" />

            <select id="gender" value={studentData.gender} onChange={handleChange} className="border p-2 rounded">
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>

            <input id="nationality" value={studentData.nationality} onChange={handleChange} className="border p-2 rounded" />

            <select id="bloodGroup" value={studentData.bloodGroup} onChange={handleChange} className="border p-2 rounded">
              <option value="">Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
            </select>

            <input id="aadharNumber" placeholder="Aadhar" value={studentData.aadharNumber} onChange={handleChange} className="border p-2 rounded" />
          </div>

          {/* Address */}
          <h3 className="mt-8 font-semibold text-gray-700">Address</h3>
          <div className="grid md:grid-cols-3 gap-5 mt-3">
            <input id="addressLine1" placeholder="Address Line 1" value={studentData.addressLine1} onChange={handleChange} className="border p-2 rounded" />
            <input id="addressLine2" placeholder="Address Line 2" value={studentData.addressLine2} onChange={handleChange} className="border p-2 rounded" />
            <input id="city" placeholder="City" value={studentData.city} onChange={handleChange} className="border p-2 rounded" />
            <input id="state" placeholder="State" value={studentData.state} onChange={handleChange} className="border p-2 rounded" />
            <input id="pincode" placeholder="Pincode" value={studentData.pincode} onChange={handleChange} className="border p-2 rounded" />
            <input id="country" placeholder="Country" value={studentData.country} onChange={handleChange} className="border p-2 rounded" />
          </div>

          {/* Next Button */}
          <div className="flex justify-end mt-8">
            <button onClick={handleNext} className="bg-blue-700 text-white px-6 py-2 rounded">
              Next →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Parent Information */}
      {step === 2 && (
        <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">
          <div div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Father Section */}
            <div className="col-span-2">
              <h3 className="font-bold text-blue-800 border-b pb-2 mb-4">Father's Details</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input id="fatherFirstName" placeholder="First Name *" value={studentData.fatherFirstName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherMiddleName" placeholder="Middle Name" value={studentData.fatherMiddleName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherLastName" placeholder="Last Name *" value={studentData.fatherLastName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherMobile" placeholder="Mobile Number *" value={studentData.fatherMobile} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherEmail" placeholder="Email Address" value={studentData.fatherEmail} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherOccupation" placeholder="Occupation" value={studentData.fatherOccupation} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherEducation" placeholder="Education" value={studentData.fatherEducation} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherAnnualIncome" placeholder="Annual Income" value={studentData.fatherAnnualIncome} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="fatherAadhar" placeholder="Aadhar Number" value={studentData.fatherAadhar} onChange={handleChange} className="border p-2.5 rounded-lg" />
              </div>
            </div>

            {/* Mother Section */}
            <div className="col-span-2 mt-8">
              <h3 className="font-bold text-pink-700 border-b pb-2 mb-4">Mother's Details</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <input id="motherFirstName" placeholder="First Name *" value={studentData.motherFirstName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherMiddleName" placeholder="Middle Name" value={studentData.motherMiddleName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherLastName" placeholder="Last Name *" value={studentData.motherLastName} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherMobile" placeholder="Mobile Number" value={studentData.motherMobile} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherEmail" placeholder="Email Address" value={studentData.motherEmail} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherOccupation" placeholder="Occupation" value={studentData.motherOccupation} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherEducation" placeholder="Education" value={studentData.motherEducation} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherAnnualIncome" placeholder="Annual Income" value={studentData.motherAnnualIncome} onChange={handleChange} className="border p-2.5 rounded-lg" />
                <input id="motherAadhar" placeholder="Aadhar Number" value={studentData.motherAadhar} onChange={handleChange} className="border p-2.5 rounded-lg" />
              </div>
            </div>

            {/* Save Button */}
          <div className="flex justify-between mt-8">
  <button onClick={handlePrevStep} className="border px-6 py-2 rounded">
    ← Back
  </button>

  <button
    onClick={handleNextStep}
    className="bg-blue-700 text-white px-6 py-2 rounded"
  >
    Next →
  </button>
</div>
        
         </div>
        </div>
      )}
      {step === 3 && (
  <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">

    <h3 className="font-bold text-blue-800 mb-4">Academic Information</h3>

    <div className="grid md:grid-cols-3 gap-4">

      <input id="admissionNumber" placeholder="Admission Number *" className="border p-2 rounded" onChange={handleChange} />

      <input type="date" id="admissionDate" className="border p-2 rounded" onChange={handleChange} />

      <select id="academicYear" className="border p-2 rounded" onChange={handleChange}>
        <option value="">Academic Year</option>
        <option>2023-24</option>
        <option>2024-25</option>
        <option>2025-26</option>
      </select>

      <select id="class" className="border p-2 rounded" onChange={handleChange}>
        <option value="">Class</option>
        {[...Array(10)].map((_, i) => (
          <option key={i+1}>Class {i+1}</option>
        ))}
      </select>

      <select id="section" className="border p-2 rounded" onChange={handleChange}>
        <option value="">Section</option>
        {["A","B","C","D"].map(sec => <option key={sec}>{sec}</option>)}
      </select>

      <input id="rollNumber" placeholder="Roll Number" className="border p-2 rounded" onChange={handleChange} />
    </div>

    {/* Previous School */}
    <h3 className="font-bold text-blue-800 mt-8 mb-4">Previous School</h3>

    <div className="grid md:grid-cols-3 gap-4">
      <input id="previousSchool" placeholder="Previous School" className="border p-2 rounded" onChange={handleChange} />
      <input id="previousClass" placeholder="Previous Class" className="border p-2 rounded" onChange={handleChange} />
      <input id="transferCertificate" placeholder="TC Number" className="border p-2 rounded" onChange={handleChange} />
    </div>

    <div className="flex justify-between mt-8">
      <button onClick={handlePrevStep} className="border px-6 py-2 rounded">
        ← Back
      </button>
      <button onClick={handleNextStep} className="bg-blue-700 text-white px-6 py-2 rounded">
        Next →
      </button>
    </div>

  </div>
)}
{step === 4 && (
  <div className="bg-white p-8 rounded-xl shadow-md max-w-5xl mx-auto">

    <h3 className="font-bold text-green-700 mb-4">Documents Upload</h3>

    <div className="grid md:grid-cols-3 gap-6">

      {/* Birth Certificate */}
      <div>
        <label className="text-sm font-medium">Birth Certificate</label>
        <input type="file" id="birthCertificate" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.birthCertificate && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.birthCertificate.name}
          </p>
        )}
      </div>

      {/* Aadhar Card */}
      <div>
        <label className="text-sm font-medium">Student Aadhar Card</label>
        <input type="file" id="aadharCard" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.aadharCard && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.aadharCard.name}
          </p>
        )}
      </div>

      {/* TC */}
      <div>
        <label className="text-sm font-medium">Transfer Certificate</label>
        <input type="file" id="transferCertificateDoc" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.transferCertificateDoc && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.transferCertificateDoc.name}
          </p>
        )}
      </div>

      {/* Father Aadhar */}
      <div>
        <label className="text-sm font-medium">Father Aadhar</label>
        <input type="file" id="fatherAadharDoc" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.fatherAadharDoc && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.fatherAadharDoc.name}
          </p>
        )}
      </div>

      {/* Mother Aadhar */}
      <div>
        <label className="text-sm font-medium">Mother Aadhar</label>
        <input type="file" id="motherAadharDoc" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.motherAadharDoc && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.motherAadharDoc.name}
          </p>
        )}
      </div>

      {/* Address Proof */}
      <div>
        <label className="text-sm font-medium">Address Proof</label>
        <input type="file" id="addressProof" onChange={handleFileChange} className="border p-2 rounded w-full" />
        {studentData.addressProof && (
          <p className="text-green-600 text-xs mt-1">
            ✅ {studentData.addressProof.name}
          </p>
        )}
      </div>

    </div>

    <div className="flex justify-between mt-8">
      <button onClick={handlePrevStep} className="border px-6 py-2 rounded">
        ← Back
      </button>

      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-8 py-2 rounded"
      >
        Save Student ✅
      </button>
    </div>

  </div>
)}
    </div>
  );
}