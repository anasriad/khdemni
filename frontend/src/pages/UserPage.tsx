import React from "react";
import Header from "../components/Header";
import { Mail, Phone, User, Key, UserCheck, Globe2, BadgeCheck } from "lucide-react";
import { getCurrentUser } from "../states/authSlice";
import { useSelector } from "react-redux";

type UserData = {
  user_id: number;
  full_name: string;
  email: string;
  phone_number: string;
  password_hash: string;
  role: string;
  language_pref: string;
  is_verified: boolean;
  created_at: string;
};

const UserPage: React.FC = () => {
{/*user page profile */}

  const user = useSelector(getCurrentUser)
  {/*getting the user from the store */}
  if (!user) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-700 text-xl">
          Loading user data...
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Profile</h1>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Full Name:</strong>&nbsp; {user.full_name}
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Email:</strong>&nbsp; {user.email}
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Phone Number:</strong>&nbsp; {user.phone_number}
            </div>
            <div className="flex items-center">
              <Key className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Password Hash:</strong>&nbsp; {user.password_hash}
            </div>
            <div className="flex items-center">
              <BadgeCheck className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Role:</strong>&nbsp; {user.role}
            </div>
            <div className="flex items-center">
              <Globe2 className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Language Preference:</strong>&nbsp; {user.language_pref}
            </div>
            <div className="flex items-center">
              <UserCheck className="w-5 h-5 mr-2 text-yellow-600" />
              <strong>Verified:</strong>&nbsp; {user.is_verified ? "Yes" : "No"}
            </div>
            <div className="flex items-center">
              <span className="w-5 h-5 mr-2 text-yellow-600">📅</span>
              <strong>Created At:</strong>&nbsp; {new Date(user.created_at).toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
