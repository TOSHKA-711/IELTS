import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen min-w-screen flex items-start justify-start bg-gray-100 p-8">
      <div className="bg-white shadow-md p-6 rounded-lg max-w-4xl ">
        <h1 className="text-2xl font-semibold text-red-600 mb-6 border-b pb-2">
          TRF Query : Match Found
        </h1>

        <p className="text-sm text-gray-700 mb-6">
          Institutions themselves are responsible for determining the IELTS Band
          Scores appropriate to their particular courses or requirements...
        </p>

        {/* Personal Details */}
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
          <div className="flex-1">
            <ul className="space-y-2 text-sm text-gray-800">
              <li>
                <strong>Centre Number:</strong> SA102
              </li>
              <li>
                <strong>Centre Name:</strong> BRITISH COUNCIL RIYADH
              </li>
              <li>
                <strong>Candidate Number:</strong> 004221
              </li>
              <li>
                <strong>Candidate ID:</strong> U0852445
              </li>
              <li>
                <strong>Family Name:</strong> MOHAMMED NIZAR
              </li>
              <li>
                <strong>Given Name:</strong> AMAL
              </li>
              <li>
                <strong>Date of Birth:</strong> 1984-05-20
              </li>
              <li>
                <strong>Sex:</strong> F
              </li>
              <li>
                <strong>Repeating IELTS:</strong> N
              </li>
              <li>
                <strong>Previous Test Date:</strong> N/A
              </li>
            </ul>
          </div>

          {/* Candidate Photo */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-40 border border-gray-300 relative mb-2">
              <Image
                src="/file.jpeg"
                alt="Candidate"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-700">Candidate Photo</span>
          </div>
        </div>

        {/* Test Results */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h2 className="text-lg font-semibold text-red-600 mb-3">
            Test Results
          </h2>

          <ul className="space-y-2 text-sm text-gray-800">
            <li>
              <strong>Overall Band:</strong>{" "}
              <span className="text-xl font-bold text-red-700">7.5</span>
            </li>
            <li>
              <strong>Date of Examination:</strong> 2020-08-29
            </li>
            <li>
              <strong>Module:</strong> IELTS Academic
            </li>
            <li>
              <strong>TRF Number:</strong> 205A004221MOHA102A
            </li>
            <li>
              <strong>Listening:</strong> 9.0
            </li>
            <li>
              <strong>Reading:</strong> 7.5
            </li>
            <li>
              <strong>Writing:</strong> 6.5
            </li>
            <li>
              <strong>Speaking:</strong> 6.5
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
