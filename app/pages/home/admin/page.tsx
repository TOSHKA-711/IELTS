import React from "react";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-red-600">
          Admin Panel – Enter TRF Data
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm max-sm:flex max-sm:flex-col">
          <input
            name="centreNumber"
            placeholder="Centre Number"
            className="border p-2 rounded"
          />
          <input
            name="centreName"
            placeholder="Centre Name"
            className="border p-2 rounded"
          />
          <input
            name="candidateNumber"
            placeholder="Candidate Number"
            className="border p-2 rounded"
          />
          <input
            name="candidateId"
            placeholder="Candidate ID"
            className="border p-2 rounded"
          />
          <input
            name="familyName"
            placeholder="Family Name"
            className="border p-2 rounded"
          />
          <input
            name="givenName"
            placeholder="Given Name"
            className="border p-2 rounded"
          />
          <input
            name="dob"
            placeholder="Date of Birth"
            type="date"
            className="border p-2 rounded"
          />
          <input name="sex" placeholder="Sex" className="border p-2 rounded" />
          <input
            name="repeating"
            placeholder="Repeating IELTS"
            className="border p-2 rounded"
          />
          <input
            name="previousDate"
            placeholder="Previous Test Date"
            className="border p-2 rounded"
          />

          <hr className="col-span-2 my-4" />

          <input
            name="overall"
            placeholder="Overall Band"
            className="border p-2 rounded"
          />
          <input
            name="examDate"
            placeholder="Date of Examination"
            type="date"
            className="border p-2 rounded"
          />
          <input
            name="module"
            placeholder="Module"
            className="border p-2 rounded"
          />
          <input
            name="trfNumber"
            placeholder="TRF Number"
            className="border p-2 rounded"
          />
          <input
            name="listening"
            placeholder="Listening"
            className="border p-2 rounded"
          />
          <input
            name="reading"
            placeholder="Reading"
            className="border p-2 rounded"
          />
          <input
            name="writing"
            placeholder="Writing"
            className="border p-2 rounded"
          />
          <input
            name="speaking"
            placeholder="Speaking"
            className="border p-2 rounded"
          />

          <div className="col-span-2">
            <label className="block mb-1 text-gray-700">Candidate Photo</label>
            <input type="file" className="border p-2 rounded w-full" />
          </div>

          <button
            type="submit"
            className="col-span-2 mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
