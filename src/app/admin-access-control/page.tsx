"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Search,
  UserCog,
  UserPen,
  Eye,
  Ellipsis,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import AddUserButton from "./AddUserButton";

export default function AdminAccessControl() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const admins = [
    {
      id: 1,
      name: "Carlos Garcia",
      email: "carlosGarcia@gmail.com",
      image: "/images/img.jpg",
      role: "Admin",
    },
    {
      id: 2,
      name: "Mije, Rosendo",
      email: "bcc@gmail.com",
      image: "",
      role: "Viewer",
    },
    {
      id: 3,
      name: "Sian, Cris Amorsolo",
      email: "cpuUC@gmail.com",
      image: "",
      role: "Editor",
    },
  ];

  const handleBack = () => router.back();

  const roleConfig: Record<string, { color: string; icon: React.ReactNode }> = {
    Admin: {
      color: "bg-[#6F4E37]",
      icon: <UserCog className="w-4 h-4 mr-1" color="white" />,
    },
    Editor: {
      color: "bg-[#A67B5B]",
      icon: <UserPen className="w-4 h-4 mr-1" color="white" />,
    },
    Viewer: {
      color: "bg-[#B98965]",
      icon: <Eye className="w-4 h-4 mr-1" color="white" />,
    },
  };

  return (
    <div className="min-h-screen mx-auto">
      <div className="px-4 py-3 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          className="p-1 text-black hover:bg-gray-200 mr-3"
          onClick={handleBack}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1 flex justify-center">
          <h1 className="text-lg font-semibold text-black ">Access Control</h1>
        </div>
      </div>

      <div className="flex mx-auto max-w-3xl items-center gap-2">
        {/* Search */}
        <div className="w-full pb-4">
          <div className="relative w-full px-4">
            <Input
              type="text"
              placeholder="Search churches"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 bg-gray-100 border-0 rounded-md text-sm placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500 focus:bg-white"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none text-gray-400">
              <Search className="w-4 h-4" color="#6F4E37" />
            </span>
          </div>
        </div>

        {/* Add User Button */}
        <div className="pb-4 pr-4">
          <AddUserButton />
        </div>
      </div>

      {/* admin data */}
      <div className="relative w-full max-w-3xl mx-auto px-4">
        <div className="space-y-2">
          {admins.map((admin) => (
            <div key={admin.id}>
              <div className="flex flex-row gap-4 items-center border border-amber-950 p-4 rounded-lg">
                {/* Image */}
                <div className="relative w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden mx-auto sm:mx-0">
                  <Image
                    src={admin.image || "/placeholder.svg"}
                    alt={admin.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base text-black truncate">
                    {admin.name}
                  </h3>
                  <p className="text-gray-600 text-sm truncate">
                    {admin.email}
                  </p>
                </div>
                {/* Role */}
                <div className="flex-1 flex justify-center">
                  <button
                    className={`flex items-center rounded-xl px-2 sm:px-3 py-1 h-8 sm:h-10 text-xs sm:text-sm ${
                      roleConfig[admin.role]?.color || "bg-gray-400"
                    }`}
                    style={{
                      minWidth: "64px",
                      maxWidth: "100px",
                      width: "100%",
                    }}
                  >
                    {roleConfig[admin.role]?.icon}
                    <p className="text-amber-50 mx-auto">{admin.role}</p>
                  </button>
                </div>
                {/* Options */}
                <div className="flex-1 flex justify-center">
                  <button className="flex">
                    <Ellipsis color="#6F4E37" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
