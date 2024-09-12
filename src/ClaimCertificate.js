import React, { useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import Certificate from "./Certificate";

const ClaimCertificate = () => {
  const [email, setEmail] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClaim = async () => {
    setLoading(true);
    setError(null);
    try {
      const collectionRef = collection(db, "certificates");
      const q = query(collectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docSnap = querySnapshot.docs[0];
        const data = docSnap.data();
        setCertificate({
          name: data.name,
          collegeName: data.college,
          department: data.department,
        });
      } else {
        setError(
          "Certificate not found for this email. Please check and try again."
        );
      }
    } catch (error) {
      console.error("Error fetching document: ", error);
      setError("Error fetching certificate. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const input = document.getElementById("certificate");
    if (!input) {
      setError("Certificate element not found. Please try again.");
      return;
    }
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("l", "mm", "a4");
        pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
        pdf.save("certificate.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF: ", error);
        setError("Error generating PDF. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
            Claim Your Certificate
          </h2>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your registered email"
              required
            />
          </div>
          <button
            onClick={handleClaim}
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold py-3 px-4 rounded-lg transition duration-300`}
          >
            {loading ? "Claiming..." : "Claim Certificate"}
          </button>
          {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

          {certificate && (
            <div className="mt-8">
              <div className="mb-4" id="certificate">
                <Certificate
                  name={certificate.name}
                  collegeName={certificate.collegeName}
                  department={certificate.department}
                />
              </div>
              <button
                onClick={downloadPDF}
                className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Download Certificate as PDF
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClaimCertificate;
