import React, { useMemo, useState } from "react";
import "./StudentDetails.css";
import {
  FaSearch,
  FaUserGraduate,
  FaFilter,
  FaListUl,
  FaEdit,
  FaEye,
  FaMoneyBillWave,
  FaChevronDown,
} from "react-icons/fa";

const StudentDetails = () => {
  const base = "studentDetailsPage";

  const students = useMemo(
    () => [
      {
        id: 1,
        admissionNo: "NLFT/45454",
        rollNumber: "1",
        name: "Aarav Sharma",
        className: "5th",
        batch: "Morning",
        gender: "Male",
        dob: "17-03-2014",
        fatherName: "Rakesh Sharma",
        motherName: "Pooja Sharma",
        guardianPhone: "9876543210",
        srNo: "SR101",
        behaviour: "Good",
        test: "1,3",
      },
      {
        id: 2,
        admissionNo: "NLFT/20620",
        rollNumber: "2",
        name: "Hetashvi Choudhary",
        className: "5th",
        batch: "Day",
        gender: "Female",
        dob: "01-01-2015",
        fatherName: "Dinesh Choudhary",
        motherName: "Kavita Choudhary",
        guardianPhone: "9123456780",
        srNo: "SR102",
        behaviour: "Average",
        test: "2",
      },
      {
        id: 3,
        admissionNo: "NLFT/10070",
        rollNumber: "3",
        name: "Ansh Sharma",
        className: "4th",
        batch: "Morning",
        gender: "Male",
        dob: "15-07-2016",
        fatherName: "Suresh Sharma",
        motherName: "Neha Sharma",
        guardianPhone: "9988776655",
        srNo: "SR103",
        behaviour: "Good",
        test: "1",
      },
      {
        id: 4,
        admissionNo: "NLFT/232327",
        rollNumber: "4",
        name: "Lavanya Das",
        className: "4th",
        batch: "Evening",
        gender: "Female",
        dob: "12-11-2015",
        fatherName: "Rohit Das",
        motherName: "Shweta Das",
        guardianPhone: "9090909090",
        srNo: "SR104",
        behaviour: "Good",
        test: "3",
      },
      {
        id: 5,
        admissionNo: "NEET/995588",
        rollNumber: "5",
        name: "Akshay Verma",
        className: "7th",
        batch: "Day",
        gender: "Male",
        dob: "09-10-2012",
        fatherName: "Ajay Verma",
        motherName: "Ritu Verma",
        guardianPhone: "7656789845",
        srNo: "SR105",
        behaviour: "Bad",
        test: "1,2",
      },
      {
        id: 6,
        admissionNo: "KPS/45465",
        rollNumber: "6",
        name: "Myra Sahu",
        className: "1st",
        batch: "Morning",
        gender: "Female",
        dob: "03-05-2019",
        fatherName: "Pradeep Sahu",
        motherName: "Sonali Sahu",
        guardianPhone: "1234567917",
        srNo: "SR106",
        behaviour: "Good",
        test: "2",
      },
      {
        id: 7,
        admissionNo: "KSV/418",
        rollNumber: "7",
        name: "Yash Jain",
        className: "7th",
        batch: "Evening",
        gender: "Male",
        dob: "13-01-2012",
        fatherName: "Ajit Jain",
        motherName: "Pallavi Jain",
        guardianPhone: "1234567895",
        srNo: "SR107",
        behaviour: "Average",
        test: "1,3",
      },
      {
        id: 8,
        admissionNo: "NLFT/232347",
        rollNumber: "8",
        name: "Vishal Sharma",
        className: "4th",
        batch: "Day",
        gender: "Male",
        dob: "24-11-2016",
        fatherName: "Nikhil Sharma",
        motherName: "Anita Sharma",
        guardianPhone: "1234568005",
        srNo: "SR108",
        behaviour: "Good",
        test: "2,3",
      },
      {
        id: 9,
        admissionNo: "KSV/416",
        rollNumber: "9",
        name: "Pihu Jain",
        className: "7th",
        batch: "Morning",
        gender: "Female",
        dob: "07-11-2013",
        fatherName: "Amit Jain",
        motherName: "Jaanti Jain",
        guardianPhone: "9772119901",
        srNo: "SR109",
        behaviour: "Good",
        test: "1",
      },
      {
        id: 10,
        admissionNo: "NLFT/300000",
        rollNumber: "10",
        name: "Diya Patel",
        className: "1st",
        batch: "Day",
        gender: "Female",
        dob: "03-04-2019",
        fatherName: "Kunal Patel",
        motherName: "Mina Patel",
        guardianPhone: "1234567890",
        srNo: "SR110",
        behaviour: "Average",
        test: "2",
      },
    ],
    []
  );

  const classOptions = ["1st", "4th", "5th", "7th"];
  const batchOptions = ["Morning", "Day", "Evening"];

  const [formData, setFormData] = useState({
    className: "",
    batch: "",
    keyword: "",
  });

  const [filteredStudents, setFilteredStudents] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [entries, setEntries] = useState(10);
  const [tableKeyword, setTableKeyword] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [actionMessage, setActionMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const runCriteriaFilter = () => {
    const classValue = formData.className.trim().toLowerCase();
    const batchValue = formData.batch.trim().toLowerCase();

    const result = students.filter((student) => {
      const classMatch = classValue
        ? student.className.toLowerCase() === classValue
        : true;

      const batchMatch = batchValue
        ? student.batch.toLowerCase() === batchValue
        : true;

      return classMatch && batchMatch;
    });

    setFilteredStudents(result);
    setShowTable(true);
    setTableKeyword("");
    setActionMessage(`${result.length} student record(s) found.`);
    setOpenMenuId(null);
  };

  const runKeywordFilter = () => {
    const keywordValue = formData.keyword.trim().toLowerCase();

    if (!keywordValue) {
      setFilteredStudents([]);
      setShowTable(true);
      setActionMessage("Please enter keyword to search.");
      return;
    }

    const result = students.filter((student) =>
      [
        student.admissionNo,
        student.rollNumber,
        student.name,
        student.className,
        student.batch,
        student.gender,
        student.dob,
        student.fatherName,
        student.motherName,
        student.guardianPhone,
        student.srNo,
        student.behaviour,
        student.test,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keywordValue)
    );

    setFilteredStudents(result);
    setShowTable(true);
    setTableKeyword("");
    setActionMessage(`${result.length} student record(s) found.`);
    setOpenMenuId(null);
  };

  const clearResults = () => {
    setFormData({
      className: "",
      batch: "",
      keyword: "",
    });
    setFilteredStudents([]);
    setShowTable(false);
    setEntries(10);
    setTableKeyword("");
    setOpenMenuId(null);
    setActionMessage("");
  };

  const handleRowAction = (type, student) => {
    setOpenMenuId(null);
    setActionMessage(`${type} clicked for ${student.name}`);
  };

  const displayedStudents = filteredStudents
    .filter((student) => {
      const keyword = tableKeyword.trim().toLowerCase();
      if (!keyword) return true;

      return [
        student.admissionNo,
        student.rollNumber,
        student.name,
        student.className,
        student.batch,
        student.gender,
        student.dob,
        student.fatherName,
        student.motherName,
        student.guardianPhone,
        student.srNo,
        student.behaviour,
        student.test,
      ]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .slice(0, Number(entries));

  return (
    <div className={base}>
      <div className={`${base}__topbar`}>
        <div className={`${base}__headingWrap`}>
          <span className={`${base}__headingIcon`}>
            <FaUserGraduate />
          </span>
          <h2 className={`${base}__heading`}>Student Details</h2>
        </div>

        <div className={`${base}__breadcrumb`}>
          <span>Student Information</span>
          <span>/</span>
          <strong>Student Details</strong>
        </div>
      </div>

      <div className={`${base}__card`}>
        <div className={`${base}__cardHeader`}>
          <div className={`${base}__cardTitleWrap`}>
            <FaFilter className={`${base}__cardIcon`} />
            <h3 className={`${base}__cardTitle`}>Select Criteria</h3>
          </div>
        </div>

        <div className={`${base}__cardBody`}>
          <div className={`${base}__searchGrid`}>
            <div className={`${base}__searchBlock`}>
              <div className={`${base}__fieldsGrid`}>
                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>
                    Class <span>*</span>
                  </label>
                  <select
                    className={`${base}__input`}
                    value={formData.className}
                    onChange={(e) => handleChange("className", e.target.value)}
                  >
                    <option value="">Select Class</option>
                    {classOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`${base}__field`}>
                  <label className={`${base}__label`}>Batch</label>
                  <select
                    className={`${base}__input`}
                    value={formData.batch}
                    onChange={(e) => handleChange("batch", e.target.value)}
                  >
                    <option value="">Select Batch</option>
                    {batchOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={`${base}__actions ${base}__actions--left`}>
                <button
                  type="button"
                  className={`${base}__searchBtn`}
                  onClick={runCriteriaFilter}
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>

            <div className={`${base}__searchBlock`}>
              <div className={`${base}__field`}>
                <label className={`${base}__label`}>Search by Keyword</label>
                <input
                  type="text"
                  className={`${base}__input`}
                  placeholder="Search by Admission no, Student Name, Phone, Father Name, Batch"
                  value={formData.keyword}
                  onChange={(e) => handleChange("keyword", e.target.value)}
                />
              </div>

              <div className={`${base}__actions`}>
                <button
                  type="button"
                  className={`${base}__searchBtn`}
                  onClick={runKeywordFilter}
                >
                  <FaSearch />
                  Search
                </button>
              </div>
            </div>
          </div>

          <div className={`${base}__bottomActions`}>
            <button
              type="button"
              className={`${base}__clearBtn`}
              onClick={clearResults}
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {showTable && (
        <div className={`${base}__resultCard`}>
          <div className={`${base}__resultHeader`}>
            <div className={`${base}__resultHeaderLeft`}>
              <div className={`${base}__resultTitleWrap`}>
                <FaListUl />
                <h3 className={`${base}__resultTitle`}>Student List</h3>
              </div>
            </div>

            <div className={`${base}__resultHeaderRight`}>
              <div className={`${base}__entriesWrap`}>
                <select
                  className={`${base}__entriesSelect`}
                  value={entries}
                  onChange={(e) => setEntries(e.target.value)}
                >
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>

              <div className={`${base}__tableKeywordWrap`}>
                <label className={`${base}__tableKeywordLabel`}>
                  Search by Keyword
                </label>
                <input
                  type="text"
                  className={`${base}__tableKeywordInput`}
                  placeholder="Search inside student list"
                  value={tableKeyword}
                  onChange={(e) => setTableKeyword(e.target.value)}
                />
              </div>

              <span className={`${base}__resultCount`}>
                {displayedStudents.length} Result{displayedStudents.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          <div className={`${base}__tableWrap`}>
            <table className={`${base}__table`}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>ADMISSION NO.</th>
                  <th>ROLL NUMBER</th>
                  <th>NAME</th>
                  <th>CLASS</th>
                  <th>BATCH</th>
                  <th>GENDER</th>
                  <th>DATE OF BIRTH</th>
                  <th>FATHER NAME</th>
                  <th>MOTHER NAME</th>
                  <th>GUARDIAN PHONE</th>
                  <th>SR NO</th>
                  <th>STUDENTS BEHAVIOUR</th>
                  <th>TEST</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                {displayedStudents.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.admissionNo}</td>
                    <td>{student.rollNumber}</td>
                    <td className={`${base}__nameCell`}>{student.name}</td>
                    <td>{student.className}</td>
                    <td>{student.batch}</td>
                    <td>{student.gender}</td>
                    <td>{student.dob}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.motherName}</td>
                    <td>{student.guardianPhone}</td>
                    <td>{student.srNo}</td>
                    <td>{student.behaviour}</td>
                    <td>{student.test}</td>
                    <td>
                      <div className={`${base}__actionWrap`}>
                        <button
                          type="button"
                          className={`${base}__actionBtn`}
                          onClick={() =>
                            setOpenMenuId(openMenuId === student.id ? null : student.id)
                          }
                        >
                          Action <FaChevronDown />
                        </button>

                        {openMenuId === student.id && (
                          <div className={`${base}__actionMenu`}>
                            <button
                              type="button"
                              className={`${base}__actionItem`}
                              onClick={() => handleRowAction("Edit", student)}
                            >
                              <FaEdit />
                              Edit
                            </button>

                            <button
                              type="button"
                              className={`${base}__actionItem`}
                              onClick={() => handleRowAction("View", student)}
                            >
                              <FaEye />
                              View
                            </button>

                            <button
                              type="button"
                              className={`${base}__actionItem`}
                              onClick={() => handleRowAction("Fee", student)}
                            >
                              <FaMoneyBillWave />
                              Fee
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {displayedStudents.length === 0 && (
                  <tr>
                    <td colSpan="15" className={`${base}__emptyState`}>
                      No student records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {actionMessage && (
            <div className={`${base}__messageBar`}>
              {actionMessage}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentDetails;