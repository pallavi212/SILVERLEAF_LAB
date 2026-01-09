import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to SilverLeaf Diagnostic Center</h1>
          <p className="text-xl text-gray-600">Admin Dashboard</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pathology Records */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Pathology Records</h2>
            <p className="text-gray-600 mb-6">Manage and secure all pathology test records</p>
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
              View Records
            </button>
          </div>

          {/* Blood Bank Inventory */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">🩸</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Blood Bank Inventory</h2>
            <p className="text-gray-600 mb-6">Track and manage blood bank stock</p>
            <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600">
              Manage Inventory
            </button>
          </div>

          {/* Payment Gateway */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">💳</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Payment Gateway</h2>
            <p className="text-gray-600 mb-6">UPI & Bank Settlement Portal</p>
            <button className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">
              Process Payment
            </button>
          </div>

          {/* User Management */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">👥</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">User Management</h2>
            <p className="text-gray-600 mb-6">Manage staff and patient accounts</p>
            <button className="w-full bg-purple-500 text-white font-semibold py-2 rounded-lg hover:bg-purple-600">
              Manage Users
            </button>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Reports</h2>
            <p className="text-gray-600 mb-6">Generate and view analytics reports</p>
            <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600">
              View Reports
            </button>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] hover:shadow-xl transition">
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Settings</h2>
            <p className="text-gray-600 mb-6">Configure system settings and preferences</p>
            <button className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600">
              Go to Settings
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p>SilverLeaf Diagnostic Center © 2026 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
