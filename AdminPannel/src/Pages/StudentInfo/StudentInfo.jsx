import React, { useMemo, useState } from "react";
import "./StudentInfo.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaUpload,
  FaUserGraduate,
  FaFileAlt,
  FaCheckCircle,
} from "react-icons/fa";

const StudentInfo = () => {
  const base = "studentInfoForm";

  const initialForm = useMemo(
    () => ({
      studentDetails: {
        admissionPrefix: "NLFT",
        admissionNo: "1",
        className: "",
        rollNumber: "",
        admissionDate: "2026-03-28",
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        category: "",
        religion: "",
        mobile: "",
        email: "",
        bloodGroup: "",
        nationalId: "",
        asOnDate: "",
        referralBy: "",
        studentPhoto: null,
        studentPhotoPreview: "",
      },

      customField: {
        srNo: "",
        behaviour: [],
        test: [],
      },

      parentGuardian: {
        fatherName: "",
        fatherPhone: "",
        fatherDob: "",
        fatherOccupation: "",
        marriageAnniversaryDate: "",
        fatherPhoto: null,
        fatherPhotoPreview: "",

        motherName: "",
        motherPhone: "",
        motherDob: "",
        motherOccupation: "",
        motherPhoto: null,
        motherPhotoPreview: "",

        guardianType: "Father",
        guardianName: "",
        guardianRelation: "",
        guardianEmail: "",
        guardianPhone: "",
        guardianOccupation: "",
        guardianAddress: "",
        guardianPhoto: null,
        guardianPhotoPreview: "",
      },

      otherDetails: {
        guardianAddressIsCurrent: false,
        permanentAddressIsCurrent: false,
        currentAddress: "",
        permanentAddress: "",
        feeGroup: "",
        discountList: "",
        discountMonth: "",
        bankAccountNumber: "",
        bankName: "",
        branchCode: "",
        rte: "No",
        previousSchoolDetails: "",
        note: "",
      },

      uploadDocuments: [
        { title: "Aadhaar Card", file: null },
        { title: "Passport Photo", file: null },
        { title: "School ID", file: null },
        { title: "DOB Certificate", file: null },
        { title: "Income Certificate", file: null },
        { title: "Caste Certificate", file: null },
        { title: "Father's Aadhaar Card", file: null },
      ],
    }),
    []
  );

  const [formData, setFormData] = useState(initialForm);
  const [submitMsg, setSubmitMsg] = useState("");
  const [openSections, setOpenSections] = useState({
    studentDetails: true,
    customField: false,
    parentGuardian: false,
    otherDetails: false,
    uploadDocuments: false,
  });

  const classOptions = ["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5"];
  const genderOptions = ["Male", "Female", "Other"];
  const categoryOptions = ["General", "OBC", "SC", "ST"];
  const bloodGroupOptions = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const feeGroupOptions = ["Monthly Fee", "Quarterly Fee", "Half-Yearly Fee", "Annual Fee"];
  const discountOptions = ["No Discount", "Sibling Discount", "Merit Discount", "Staff Discount"];
  const monthOptions = [
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
  ];

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const updateSectionField = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleCheckboxGroup = (section, field, item) => {
    setFormData((prev) => {
      const current = prev[section][field];
      const updated = current.includes(item)
        ? current.filter((v) => v !== item)
        : [...current, item];

      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: updated,
        },
      };
    });
  };

  const handlePhotoUpload = (section, field, previewField, file) => {
    if (!file) return;
    const preview = URL.createObjectURL(file);

    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: file,
        [previewField]: preview,
      },
    }));
  };

  const handleDocumentUpload = (index, file) => {
    setFormData((prev) => ({
      ...prev,
      uploadDocuments: prev.uploadDocuments.map((doc, i) =>
        i === index ? { ...doc, file } : doc
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Admission Form Data:", formData);
    setSubmitMsg("Student admission form submitted successfully.");
  };

  const handleReset = () => {
    setFormData(initialForm);
    setSubmitMsg("Form reset successfully.");
  };

  const renderInput = (label, name, section, type = "text", required = false) => (
    <div className={`${base}__field`}>
      <label className={`${base}__label`}>
        {label} {required && <span>*</span>}
      </label>
      <input
        type={type}
        className={`${base}__input`}
        value={formData[section][name]}
        onChange={(e) => updateSectionField(section, name, e.target.value)}
      />
    </div>
  );

  const renderSelect = (label, name, section, options, required = false) => (
    <div className={`${base}__field`}>
      <label className={`${base}__label`}>
        {label} {required && <span>*</span>}
      </label>
      <select
        className={`${base}__input`}
        value={formData[section][name]}
        onChange={(e) => updateSectionField(section, name, e.target.value)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  const renderTextArea = (label, name, section, rows = 4) => (
    <div className={`${base}__field ${base}__field--full`}>
      <label className={`${base}__label`}>{label}</label>
      <textarea
        rows={rows}
        className={`${base}__textarea`}
        value={formData[section][name]}
        onChange={(e) => updateSectionField(section, name, e.target.value)}
      />
    </div>
  );

  const renderPhotoUploader = (title, section, field, previewField) => (
    <div className={`${base}__photoPanel`}>
      <div className={`${base}__photoPanelHead`}>
        <p className={`${base}__photoTitle`}>{title}</p>
        <span className={`${base}__photoBadge`}>Upload</span>
      </div>

      <label className={`${base}__photoCard`}>
        {formData[section][previewField] ? (
          <img
            src={formData[section][previewField]}
            alt={title}
            className={`${base}__photoPreview`}
          />
        ) : (
          <div className={`${base}__photoPlaceholder`}>
            <FaUserGraduate />
            <span>No Image Available</span>
          </div>
        )}

        <span className={`${base}__photoUploadIcon`}>
          <FaUpload />
        </span>

        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(e) =>
            handlePhotoUpload(section, field, previewField, e.target.files?.[0])
          }
        />
      </label>

      <p className={`${base}__photoHint`}>Click here to upload image</p>
    </div>
  );

  return (
    <div className={base}>
      <div className={`${base}__topbar`}>
        <div className={`${base}__pageTitle`}>
          <FaFileAlt />
          <span>Student Admission</span>
        </div>

        <div className={`${base}__breadcrumb`}>
          <span>Student Info</span>
          <span>/</span>
          <strong>Student Admission</strong>
        </div>
      </div>

      <form className={`${base}__wrapper`} onSubmit={handleSubmit}>
        <div className={`${base}__head`}>
          <div className={`${base}__headTitle`}>
            <FaFileAlt />
            <span>Student Admission Form</span>
          </div>
        </div>

        <div className={`${base}__section`}>
          <button
            type="button"
            className={`${base}__sectionHeader`}
            onClick={() => toggleSection("studentDetails")}
          >
            <span>Student Details</span>
            {openSections.studentDetails ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSections.studentDetails && (
            <div className={`${base}__sectionBody`}>
              <div className={`${base}__studentDetailsWrap`}>
                <div className={`${base}__studentFormArea`}>
                  <div className={`${base}__grid ${base}__grid--studentTop`}>
                    <div className={`${base}__fieldGroup`}>
                      <label className={`${base}__label`}>
                        Admission No. <span>*</span>
                      </label>
                      <div className={`${base}__doubleInput`}>
                        <input
                          className={`${base}__input`}
                          value={formData.studentDetails.admissionPrefix}
                          onChange={(e) =>
                            updateSectionField("studentDetails", "admissionPrefix", e.target.value)
                          }
                        />
                        <input
                          className={`${base}__input`}
                          value={formData.studentDetails.admissionNo}
                          onChange={(e) =>
                            updateSectionField("studentDetails", "admissionNo", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    {renderSelect("Class", "className", "studentDetails", classOptions, true)}
                    {renderInput("Roll Number", "rollNumber", "studentDetails")}
                    {renderInput("Admission Date", "admissionDate", "studentDetails", "date")}
                    {renderInput("First Name", "firstName", "studentDetails", "text", true)}
                    {renderInput("Last Name", "lastName", "studentDetails")}
                    {renderSelect("Gender", "gender", "studentDetails", genderOptions, true)}
                    {renderInput("Date of Birth", "dob", "studentDetails", "date", true)}
                    {renderSelect("Category", "category", "studentDetails", categoryOptions)}
                    {renderInput("Religion", "religion", "studentDetails")}
                    {renderInput("Mobile Number", "mobile", "studentDetails")}
                    {renderInput("Email", "email", "studentDetails", "email")}
                    {renderSelect("Blood Group", "bloodGroup", "studentDetails", bloodGroupOptions)}
                    {renderInput("National ID Number", "nationalId", "studentDetails")}
                    {renderInput("As on Date", "asOnDate", "studentDetails", "date")}
                    {renderInput("Referral By", "referralBy", "studentDetails")}
                  </div>
                </div>

                <div className={`${base}__studentPhotoArea`}>
                  {renderPhotoUploader(
                    "Student Photo",
                    "studentDetails",
                    "studentPhoto",
                    "studentPhotoPreview"
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${base}__section`}>
          <button
            type="button"
            className={`${base}__sectionHeader`}
            onClick={() => toggleSection("customField")}
          >
            <span>Custom Field</span>
            {openSections.customField ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSections.customField && (
            <div className={`${base}__sectionBody`}>
              <div className={`${base}__grid ${base}__grid--1`}>
                {renderInput("SR NO", "srNo", "customField", "number")}
              </div>

              <div className={`${base}__checkboxBlock`}>
                <p className={`${base}__label`}>Students Behaviour</p>
                <div className={`${base}__checkRow`}>
                  {["Good", "Average", "Bad"].map((item) => (
                    <label key={item} className={`${base}__checkItem`}>
                      <input
                        type="checkbox"
                        checked={formData.customField.behaviour.includes(item)}
                        onChange={() =>
                          handleCheckboxGroup("customField", "behaviour", item)
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={`${base}__checkboxBlock`}>
                <p className={`${base}__label`}>Test</p>
                <div className={`${base}__checkRow`}>
                  {["1", "2", "3", "4", "5"].map((item) => (
                    <label key={item} className={`${base}__checkItem`}>
                      <input
                        type="checkbox"
                        checked={formData.customField.test.includes(item)}
                        onChange={() =>
                          handleCheckboxGroup("customField", "test", item)
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${base}__section`}>
          <button
            type="button"
            className={`${base}__sectionHeader`}
            onClick={() => toggleSection("parentGuardian")}
          >
            <span>Parent / Guardian Details</span>
            {openSections.parentGuardian ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSections.parentGuardian && (
            <div className={`${base}__sectionBody`}>
              <div className={`${base}__photoGrid`}>
                <div className={`${base}__photoGridContent`}>
                  <div className={`${base}__grid ${base}__grid--3`}>
                    {renderInput("Father Name", "fatherName", "parentGuardian")}
                    {renderInput("Father Phone", "fatherPhone", "parentGuardian")}
                    {renderInput("Father Dob", "fatherDob", "parentGuardian", "date")}
                    {renderInput("Father Occupation", "fatherOccupation", "parentGuardian")}
                    {renderInput(
                      "Marriage Anniversary Date",
                      "marriageAnniversaryDate",
                      "parentGuardian",
                      "date"
                    )}
                  </div>
                </div>

                {renderPhotoUploader(
                  "Father Photo",
                  "parentGuardian",
                  "fatherPhoto",
                  "fatherPhotoPreview"
                )}
              </div>

              <div className={`${base}__photoGrid`}>
                <div className={`${base}__photoGridContent`}>
                  <div className={`${base}__grid ${base}__grid--2`}>
                    {renderInput("Mother Name", "motherName", "parentGuardian")}
                    {renderInput("Mother Phone", "motherPhone", "parentGuardian")}
                    {renderInput("Mother Dob", "motherDob", "parentGuardian", "date")}
                    {renderInput("Mother Occupation", "motherOccupation", "parentGuardian")}
                  </div>
                </div>

                {renderPhotoUploader(
                  "Mother Photo",
                  "parentGuardian",
                  "motherPhoto",
                  "motherPhotoPreview"
                )}
              </div>

              <div className={`${base}__radioBlock`}>
                <p className={`${base}__label`}>
                  If Guardian Is <span>*</span>
                </p>
                <div className={`${base}__checkRow`}>
                  {["Father", "Mother", "Other"].map((item) => (
                    <label key={item} className={`${base}__checkItem`}>
                      <input
                        type="radio"
                        name="guardianType"
                        checked={formData.parentGuardian.guardianType === item}
                        onChange={() =>
                          updateSectionField("parentGuardian", "guardianType", item)
                        }
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={`${base}__photoGrid`}>
                <div className={`${base}__photoGridContent`}>
                  <div className={`${base}__grid ${base}__grid--3`}>
                    {renderInput("Guardian Name", "guardianName", "parentGuardian", "text", true)}
                    {renderInput("Guardian Relation", "guardianRelation", "parentGuardian")}
                    {renderInput("Guardian Email", "guardianEmail", "parentGuardian")}
                    {renderInput("Guardian Phone", "guardianPhone", "parentGuardian", "text", true)}
                    {renderInput("Guardian Occupation", "guardianOccupation", "parentGuardian")}
                  </div>
                  {renderTextArea("Guardian Address", "guardianAddress", "parentGuardian", 3)}
                </div>

                {renderPhotoUploader(
                  "Guardian Photo",
                  "parentGuardian",
                  "guardianPhoto",
                  "guardianPhotoPreview"
                )}
              </div>
            </div>
          )}
        </div>

        <div className={`${base}__section`}>
          <button
            type="button"
            className={`${base}__sectionHeader`}
            onClick={() => toggleSection("otherDetails")}
          >
            <span>Other Details</span>
            {openSections.otherDetails ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSections.otherDetails && (
            <div className={`${base}__sectionBody`}>
              <div className={`${base}__subCard`}>
                <h4 className={`${base}__subTitle`}>Student Address Details</h4>
                <div className={`${base}__grid ${base}__grid--2`}>
                  <label className={`${base}__checkBoxInline`}>
                    <input
                      type="checkbox"
                      checked={formData.otherDetails.guardianAddressIsCurrent}
                      onChange={(e) =>
                        updateSectionField(
                          "otherDetails",
                          "guardianAddressIsCurrent",
                          e.target.checked
                        )
                      }
                    />
                    <span>If Guardian Address is Current Address</span>
                  </label>

                  <label className={`${base}__checkBoxInline`}>
                    <input
                      type="checkbox"
                      checked={formData.otherDetails.permanentAddressIsCurrent}
                      onChange={(e) =>
                        updateSectionField(
                          "otherDetails",
                          "permanentAddressIsCurrent",
                          e.target.checked
                        )
                      }
                    />
                    <span>If Permanent Address is Current Address</span>
                  </label>
                </div>

                <div className={`${base}__grid ${base}__grid--2`}>
                  {renderTextArea("Current Address", "currentAddress", "otherDetails", 3)}
                  {renderTextArea("Permanent Address", "permanentAddress", "otherDetails", 3)}
                </div>
              </div>

              <div className={`${base}__subCard`}>
                <h4 className={`${base}__subTitle`}>Student Fee Assign</h4>
                <div className={`${base}__grid ${base}__grid--1`}>
                  {renderSelect("Fee Group", "feeGroup", "otherDetails", feeGroupOptions)}
                </div>
              </div>

              <div className={`${base}__subCard`}>
                <h4 className={`${base}__subTitle`}>Assign Discount</h4>
                <div className={`${base}__grid ${base}__grid--2`}>
                  {renderSelect("Discount List", "discountList", "otherDetails", discountOptions)}
                  {renderSelect("Month", "discountMonth", "otherDetails", monthOptions)}
                </div>
              </div>

              <div className={`${base}__subCard`}>
                <h4 className={`${base}__subTitle`}>Miscellaneous Details</h4>
                <div className={`${base}__grid ${base}__grid--2`}>
                  {renderInput("Bank Account Number", "bankAccountNumber", "otherDetails")}
                  {renderInput("Bank Name", "bankName", "otherDetails")}
                  {renderInput("Branch Code", "branchCode", "otherDetails")}

                  <div className={`${base}__field`}>
                    <label className={`${base}__label`}>RTE</label>
                    <div className={`${base}__checkRow`}>
                      {["Yes", "No"].map((item) => (
                        <label key={item} className={`${base}__checkItem`}>
                          <input
                            type="radio"
                            name="rte"
                            checked={formData.otherDetails.rte === item}
                            onChange={() => updateSectionField("otherDetails", "rte", item)}
                          />
                          <span>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {renderTextArea(
                    "Previous School Details",
                    "previousSchoolDetails",
                    "otherDetails",
                    3
                  )}
                  {renderTextArea("Note", "note", "otherDetails", 3)}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={`${base}__section`}>
          <button
            type="button"
            className={`${base}__sectionHeader`}
            onClick={() => toggleSection("uploadDocuments")}
          >
            <span>Upload Documents</span>
            {openSections.uploadDocuments ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {openSections.uploadDocuments && (
            <div className={`${base}__sectionBody`}>
              <div className={`${base}__tableWrap`}>
                <table className={`${base}__table`}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Documents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.uploadDocuments.map((doc, index) => (
                      <tr key={doc.title}>
                        <td>{index + 1}</td>
                        <td>
                          <input
                            type="text"
                            className={`${base}__tableInput`}
                            value={doc.title}
                            readOnly
                          />
                        </td>
                        <td>
                          <label className={`${base}__fileUpload`}>
                            <span className={`${base}__fileBtn`}>Choose File</span>
                            <span className={`${base}__fileName`}>
                              {doc.file ? doc.file.name : "No file chosen"}
                            </span>
                            <input
                              type="file"
                              hidden
                              onChange={(e) =>
                                handleDocumentUpload(index, e.target.files?.[0] || null)
                              }
                            />
                          </label>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        <div className={`${base}__footer`}>
          <div className={`${base}__footerLeft`}>
            <button type="button" className={`${base}__resetBtn`} onClick={handleReset}>
              Reset Form
            </button>
          </div>

          <div className={`${base}__footerRight`}>
            <button type="submit" className={`${base}__submitBtn`}>
              Submit
            </button>
          </div>
        </div>

        {submitMsg && (
          <div className={`${base}__message`}>
            <FaCheckCircle />
            <span>{submitMsg}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentInfo;