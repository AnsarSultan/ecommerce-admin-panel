import React, { useState } from 'react';
import { Moon, Sun, Bell, User, Store } from 'lucide-react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Admin Profile Settings */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center mb-4 text-gray-700 dark:text-gray-200">
          <User className="mr-2" />
          <h2 className="text-xl font-semibold">Admin Profile</h2>
        </div>
        <div className="space-y-4">
          <input type="text" placeholder="Admin Name" className="w-full p-2 border rounded-xl" />
          <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-xl" />
          <input type="password" placeholder="Change Password" className="w-full p-2 border rounded-xl" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">Update Profile</button>
        </div>
      </div>

      {/* Store Preferences */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center mb-4 text-gray-700 dark:text-gray-200">
          <Store className="mr-2" />
          <h2 className="text-xl font-semibold">Store Preferences</h2>
        </div>
        <div className="space-y-4">
          <input type="text" placeholder="Store Name" className="w-full p-2 border rounded-xl" />
          <select className="w-full p-2 border rounded-xl">
            <option>USD</option>
            <option>EUR</option>
            <option>PKR</option>
          </select>
          <input type="text" placeholder="Support Email" className="w-full p-2 border rounded-xl" />
        </div>
      </div>

      {/* Theme Mode */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow mb-6 flex items-center justify-between">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          {darkMode ? <Moon className="mr-2" /> : <Sun className="mr-2" />}
          <span className="text-lg font-medium">Dark Mode</span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl"
        >
          {darkMode ? 'Disable' : 'Enable'}
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow flex items-center justify-between">
        <div className="flex items-center text-gray-700 dark:text-gray-200">
          <Bell className="mr-2" />
          <span className="text-lg font-medium">Order Notifications</span>
        </div>
        <button
          onClick={() => setNotifications(!notifications)}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-xl"
        >
          {notifications ? 'Disable' : 'Enable'}
        </button>
      </div>
    </div>
  );
}
