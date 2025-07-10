
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <div className="min-h-screen w-full flex items-start justify-start bg-gray-100 p-8 max-sm:p-4">
        <div className="bg-white shadow-md p-6 rounded-lg w-full">
          <h1 className="text-2xl font-semibold text-red-600 mb-6 border-b pb-2">
            TRF Query : Match Found
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Institutions themselves are responsible for determining the IELTS
            Band Scores appropriate to their particular courses or requirements.
            Institutions should note that IELTS Band Scores reflect English
            language proficiency alone, which is one of the many factors
            relevant to academic success or failure. It is standard practice for
            the scores reported on an IELTS Test Report Form to be accepted by
            institutions as evidence of a candidate's English language ability
            for a two-year period from the date of the test.
          </p>

          {/* Details & Photo */}
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-6 w-full">
            {/* Left: Personal Details */}
            <div className="flex-1 rounded overflow-hidden text-lg w-full">
              <div className="flex justify-between px-4 py-2 bg-white w-full">
                <span className="font-semibold text-gray-700 ">
                  Centre Number :
                </span>
                <span className="text-gray-800">SA102</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">Centre Name :</span>
                <span className="text-gray-800">BRITISH COUNCIL RIYADH</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">
                  Candidate Number :
                </span>
                <span className="text-gray-800">004221</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">
                  Candidate ID :
                </span>
                <span className="text-gray-800">U0852445</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">Family Name :</span>
                <span className="text-gray-800">MOHAMMED NIZAR</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">Given Name :</span>
                <span className="text-gray-800">AMAL</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">
                  Date of Birth :
                </span>
                <span className="text-gray-800">1984-05-20</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">Sex :</span>
                <span className="text-gray-800">F</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">
                  Repeating IELTS :
                </span> 
                <span className="text-gray-800">N</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">
                  Previous Test Date :
                </span>
                <span className="text-gray-800">N/A</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">
                  Overall Band :
                </span> 
                <span className="text-xl font-bold text-red-700">7.5</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">
                  Date of Examination :
                </span>
                <span className="text-gray-800">2020-08-29</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">Module :</span>
                <span className="text-gray-800">IELTS Academic</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">TRF Number :</span>
                <span className="text-gray-800">205A004221MOHA102A</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">Listening :</span>
                <span className="text-gray-800">9.0</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">Reading :</span>
                <span className="text-gray-800">7.5</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-white">
                <span className="font-semibold text-gray-700 ">Writing :</span>
                <span className="text-gray-800">6.5</span>
              </div>
              <div className="flex max-sm:flex-col justify-between px-4 py-2 bg-gray-100">
                <span className="font-semibold text-gray-700 ">Speaking :</span>
                <span className="text-gray-800">6.5</span>
              </div>
            </div>
            {/* Right: Candidate Photo */}
            <div className="flex flex-1 flex-col items-start max-sm:items-center">
              <div className="w-32 h-40 border border-gray-300 relative mb-2 ">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
