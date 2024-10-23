import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Navbar from "../../components/common/UserCommon/Navbar";
import Footer from "../../components/common/UserCommon/Footer";
import TutorNav from "../../components/common/TutorCommon/TutorNav";
import userAxiosInstance from "../../config/axiosInstance/userInstance";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAccountBox } from "react-icons/md";

const validationSchema = Yup.object({
  accountHolderName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Account Holder's Name is required"),
  bankName: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Bank Name is required"),
  accountNumber: Yup.string()
    .matches(/^\d+$/, "Account Number must be numeric")
    .required("Bank Account Number is required"),
  accountType: Yup.string().required("Please select an account type"),
  ifscCode: Yup.string()
    .matches(/^[A-Z0-9]+$/, "Invalid IFSC/SWIFT/BIC code")
    .required("IFSC Code is required"),
  branchName: Yup.string().optional(),
  currency: Yup.string().required("Account Currency is required"),
  panCard: Yup.string().optional(),
});

const KycPage: React.FC = () => {
  const [isKycApproved, setIsKycApproved] = useState<boolean | null>(null);
  const { userInfo } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const checkKycStatus = async () => {
      try {
        const { data } = await userAxiosInstance.get(
          `/tutor/kyc-status/${userInfo?.email}`
        );
        setIsKycApproved(data);
      } catch (error: any) {
        toast.error("Error fetching KYC status");
        setIsKycApproved(false);
      }
    };

    checkKycStatus();
  }, []);

  const formik = useFormik({
    initialValues: {
      accountHolderName: "",
      bankName: "",
      accountNumber: "",
      accountType: "",
      ifscCode: "",
      branchName: "",
      currency: "",
      panCard: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await userAxiosInstance.post(
          `/tutor/kyc-verification/${userInfo?.email}`,
          values
        );
        const promise = () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Sonner" }), 2000)
          );

        toast.promise(promise, {
          loading: "verifying...",
          success: () => {
            setIsKycApproved(true);
            return `Verification completed`;
          },
          error: "Error",
        });
      } catch (error: any) {
        toast.error(error.message);
      }
    },
  });

  if (isKycApproved === null) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading KYC status...</p>
      </div>
    );
  }

  return (
    <>
      <TutorNav />
      <div className="min-h-screen bg-gray-200 flex flex-col">
        <div
          className="bg-[url('https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241199.jpg?t=st=1729063164~exp=1729066764~hmac=bf1de80399484caa95521c66a7597a346c4f7304ca83ce1574d368203e31c8cb&w=1060')] 
          bg-cover bg-center flex items-center justify-center text-green-500 h-[350px]"
        >
          <h1 className="text-3xl font-bold text-center font-sans">
            Verify KYC to receive money
          </h1>
        </div>

        <div className="w-full py-8  h-full">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {isKycApproved ? (
             
      
                <div className="w-full max-w-md mx-auto mt-16 p-8 text-center font-poppins">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/012/528/063/non_2x/verified-icon-illustration-guaranteed-stamp-or-verified-badge-trendy-design-vector.jpg"
                    alt="Confirmation"
                    className="mx-auto mb-6 w-24 h-24 object-cover"
                  />
                  <h1 className="text-2xl font-bold text-gray-800">
                  KYC Completed!
                  </h1>
                  <h3 className="text-gray-600 mt-4">
                    You can now login to your Dashboard.
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                  Your KYC has been verified and approved. You can now receive payments.
                  </p>

                  <button
                    className="mt-8 px-6 py-2 text-white bg-green-500 rounded-md hover:bg-green-700 transition duration-300 flex ml-20"
                    onClick={() => (window.location.href = "/tutor")}
                  >
                    Back to Home <FaHome className="ml-2 mt-1 w-5" />
                  </button>
                </div>
             
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  KYC Verification Form
                </h2>
                <form
                  onSubmit={formik.handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Left Column */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="accountHolderName"
                    >
                      Account Holder's Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="accountHolderName"
                      type="text"
                      {...formik.getFieldProps("accountHolderName")}
                    />
                    {formik.touched.accountHolderName &&
                    formik.errors.accountHolderName ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.accountHolderName}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="bankName"
                    >
                      Bank Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="bankName"
                      type="text"
                      {...formik.getFieldProps("bankName")}
                    />
                    {formik.touched.bankName && formik.errors.bankName ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.bankName}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="accountNumber"
                    >
                      Bank Account Number
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="accountNumber"
                      type="text"
                      {...formik.getFieldProps("accountNumber")}
                    />
                    {formik.touched.accountNumber &&
                    formik.errors.accountNumber ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.accountNumber}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="accountType"
                    >
                      Account Type
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="accountType"
                      {...formik.getFieldProps("accountType")}
                    >
                      <option value="">Select account type</option>
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                    </select>
                    {formik.touched.accountType && formik.errors.accountType ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.accountType}
                      </div>
                    ) : null}
                  </div>

                  {/* Right Column */}
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="ifscCode"
                    >
                      IFSC Code (or SWIFT/BIC for international)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="ifscCode"
                      type="text"
                      {...formik.getFieldProps("ifscCode")}
                    />
                    {formik.touched.ifscCode && formik.errors.ifscCode ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.ifscCode}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="branchName"
                    >
                      Bank Branch Name (Optional)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="branchName"
                      type="text"
                      {...formik.getFieldProps("branchName")}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="currency"
                    >
                      Account Currency
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="currency"
                      type="text"
                      {...formik.getFieldProps("currency")}
                    />
                    {formik.touched.currency && formik.errors.currency ? (
                      <div className="text-red-500 text-sm">
                        {formik.errors.currency}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="panCard"
                    >
                      PAN Card/TIN/SSN (Optional)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="panCard"
                      type="text"
                      {...formik.getFieldProps("panCard")}
                    />
                  </div>

                  <div className="flex items-center justify-between md:col-span-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit KYC Information
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KycPage;
