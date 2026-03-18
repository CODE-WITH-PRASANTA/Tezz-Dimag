import React, { useEffect, useState } from "react";
import API from "../api/axios";

const AdmissionList = () => {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH DATA
  const fetchAdmissions = async () => {
    try {
      const res = await API.get("/admission");
      setAdmissions(res.data.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Admission Requests
        </h1>
        <p className="text-gray-500 text-sm">
          Manage all student admission forms
        </p>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

        {loading ? (
          <p className="p-6 text-center">Loading...</p>
        ) : admissions.length === 0 ? (
          <p className="p-6 text-center text-gray-500">
            No admissions found
          </p>
        ) : (
          <div className="overflow-x-auto">

            <table className="min-w-full text-sm text-left">

              {/* HEAD */}
              <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                <tr>
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">Child</th>
                  <th className="px-6 py-4">DOB</th>
                  <th className="px-6 py-4">Parent</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Updates</th>
                  <th className="px-6 py-4">Date</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y">

                {admissions.map((item, index) => (
                  <tr key={item._id} className="hover:bg-gray-50">

                    <td className="px-6 py-4 font-medium">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4">
                      {item.childName}
                    </td>

                    <td className="px-6 py-4">
                      {item.dob}
                    </td>

                    <td className="px-6 py-4">
                      {item.parentName}
                    </td>

                    <td className="px-6 py-4">
                      {item.email}
                    </td>

                    <td className="px-6 py-4">
                      {item.phone || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.updates
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {item.updates ? "Yes" : "No"}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}
      </div>
    </div>
  );
};

export default AdmissionList;