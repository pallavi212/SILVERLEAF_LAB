import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SupportAccount() {
  const navigate = useNavigate();
  const [accountId, setAccountId] = useState("XP-9928-DEL-01");
  const [username, setUsername] = useState("admin_lab_south_delhi");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onLogin() {
    setError("");
    if (!accountId.trim() || !username.trim() || !password) {
      setError("Please fill Account ID, Username and Password.");
      return;
    }
    navigate("/home");
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] p-12 gap-12">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Card */}
        <div className="rounded-3xl bg-gradient-to-br from-gray-200 via-gray-300 to-gray-700 p-12 text-white shadow-xl min-h-[200px] text-center flex flex-col justify-center items-center
          transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
          <span className="text-sm opacity-80 tracking-wide animate-pulse">Modern Lab</span>
          <h1 className="text-4xl font-bold mt-4 drop-shadow-lg">
            SilverLeaf Diagnostic Center
          </h1>
          <p className="mt-4 text-base opacity-90 max-w-2xl">
            Managing secure pathology records, blood bank inventory, and integrated payment gateways.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Financial Hub */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[350px]
            transition duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div>
              <h2 className="text-2xl font-semibold">Financial Hub</h2>
              <p className="text-base text-gray-500 mb-6">
                Instant UPI & Bank Settlement Portal
              </p>

              <div className="space-y-5">
                {[
                  ["A/C HOLDER", "PATHOSERVE DIAGNOSTICS"],
                  ["A/C NUMBER", "50200012345678"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="bg-gray-50 p-6 rounded-xl min-h-[80px]
                    transition hover:bg-gray-100 hover:scale-[1.01]"
                  >
                    <p className="text-xs text-gray-500">{label}</p>
                    <p className="font-medium text-lg">{value}</p>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-5">
                  {[
                    ["IFSC CODE", "HDFC0001234"],
                    ["BANK", "HDFC BANK"],
                  ].map(([label, value], i) => (
                    <div
                      key={i}
                      className="bg-gray-50 p-6 rounded-xl min-h-[80px]
                      transition hover:bg-gray-100 hover:scale-[1.01]"
                    >
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="font-medium text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* QR */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl flex flex-col items-center justify-center text-white min-h-[350px]
              transition duration-500 hover:scale-[1.03]">
              <div className="bg-white p-6 rounded-xl animate-pulse">
                <div className="w-40 h-40 bg-gray-200 flex items-center justify-center text-black text-sm font-medium">
                  QR CODE
                </div>
              </div>
              <p className="mt-6 text-sm opacity-80 tracking-widest">
                SCAN TO PAY
              </p>
            </div>
          </div>

          {/* Admin Access */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow p-8 text-white min-h-[350px]
            flex flex-col justify-between transition duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Admin Access</h2>

              <div className="space-y-4">
                {[{
                  label: "ACCOUNT ID",
                  value: accountId,
                  setter: setAccountId
                }, {
                  label: "USERNAME",
                  value: username,
                  setter: setUsername
                }].map((field, i) => (
                  <label key={i} className="block">
                    <p className="text-xs opacity-80">{field.label}</p>
                    <input
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="mt-2 w-full p-3 rounded-xl bg-white/10 text-white
                        placeholder-white/70 outline-none
                        transition focus:ring-2 focus:ring-white/40"
                    />
                  </label>
                ))}

                <label className="block">
                  <p className="text-xs opacity-80">PORTAL PASSWORD</p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-2 w-full p-3 rounded-xl bg-white/10 text-white
                      placeholder-white/70 outline-none
                      transition focus:ring-2 focus:ring-white/40"
                  />
                </label>

                {error && (
                  <p className="text-sm text-red-200 animate-shake">
                    {error}
                  </p>
                )}
              </div>
            </div>

            <button
              className="mt-6 w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl
                transition duration-300 hover:scale-[1.02] hover:bg-gray-100"
            >
              UPDATE SECURITY KEY
            </button>

            <button
              onClick={onLogin}
              className="mt-4 w-full bg-indigo-400 text-white font-semibold py-3 rounded-xl
                transition duration-300 hover:scale-[1.03] hover:bg-indigo-300"
            >
              LOGIN
            </button>
          </div>
        </div>

        {/* Support Guidelines */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Support Guidelines</h2>
          <p className="text-base text-gray-500 mb-6">
            Standard operating procedures for patients & staff
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Fasting SOP", text: "8–12 hours fasting required." },
              { title: "Report TAT", text: "Routine tests: 24 hours." },
              { title: "Home Collection", text: "Arrival within 60 minutes." },
              { title: "Critical Support", text: "Blood bank support 24/7." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 min-h-[180px]
                  transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-base text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
