"use client";

import AdminLogin from "@/components/AdminLogin";
import DoctorLogin from "@/components/DoctorLogin";
import { useAdminContext } from "@/context/AdminContext";
import { useDoctorContext } from "@/context/DoctorContext";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const adminContext = useAdminContext();
  const doctorContext = useDoctorContext();

  if (!adminContext || !doctorContext) {
    return null;
  }

  const { aToken } = adminContext;
  const { dToken } = doctorContext;

  if (aToken || dToken) {
    return null; // Will be redirected by middleware
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to CareVita
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please sign in to continue
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex justify-center items-center">
            <Link href="/admin-login">Admin Login</Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link href="/doctor-login">Doctor Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
