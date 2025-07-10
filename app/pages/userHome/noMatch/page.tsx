

import React from 'react';

export default function NoMatchPage() {
  return (
     
    <div className="min-h-screen min-w-screen flex items-start justify-start bg-gray-100 p-8">
      <div className="bg-white shadow-md p-6 rounded-lg max-w-4xl border-t-8 border-red-600">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">TRF Query :</h1>

        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 mb-4">
          <strong>No Match Found</strong>
          <p className="text-sm mt-1">
            No match was found for the Test Report Form (TRF) number which you entered. Please enter the <span className="underline text-blue-600 cursor-pointer">TRF Number</span> again. Be very careful to make sure that you enter the correct details from the TRF.
          </p>
        </div>

        <div className="text-sm text-gray-700 space-y-3">
          <p>
            If you are certain that you have entered the TRF number correctly and there is still no match, then currently the system is unable to provide verification for this TRF.
          </p>
          <p>
            Please contact us by using the <a href="#" className="text-blue-600 underline">online enquiry form</a> and selecting <strong>Cambridge Assessment English</strong> from the list of IELTS organisations.
          </p>
          <p>
            Please provide the following information in the email: Test Report Form Number, centre number, name of candidate, date of birth, candidate number, ID/passport number, test scores and date of test.
          </p>
          <p>
            Please note, we will be unable to verify a result that you cannot find on the site that is more than two years old.
          </p>
          <p>
            More information regarding this can be found in the <a href="https://www.ielts.org" target="_blank" className="text-blue-600 underline">Information for Candidates Booklet</a> located on www.ielts.org
          </p>
        </div>

        <div className="text-right mt-6">
          <a href="#" className="text-sm text-red-600 underline">Data Protection & Privacy Statement</a>
        </div>
      </div>
    </div>
  );
}

