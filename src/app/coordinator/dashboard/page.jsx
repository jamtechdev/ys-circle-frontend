"use client";
import {
  AccessAlarm,
  Add,
  CalendarMonth,
  ContactPage,
  Diversity3,
  Favorite,
  HeartBrokenSharp,
  Home,
  LocalActivity,
  People,
  PeopleAltOutlined,
  Settings,
  TaskAlt,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

import { useState } from "react";

const DashboardCard = ({ title, value, icon, bgColor }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
    <div className={`p-3 rounded-full ${bgColor}`}>{icon}</div>
  </div>
);

const MenuIcon = (props) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

export default function CoordinatorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`w-64 bg-gray-800 text-white flex-shrink-0 fixed md:relative h-full transition-all duration-300 ease-in-out
                            ${
                              isSidebarOpen
                                ? "translate-x-0"
                                : "-translate-x-full md:translate-x-0"
                            }
                            md:block`}
      >
        <div className="p-4 text-xl uppercase font-nunito font-bold border-b border-gray-700">
          <Favorite /> Support Circle
        </div>
        <nav className="mt-5">
          <a
            href="#"
            className="flex items-center gap-2 p-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
          >
            <Home /> Dashboad
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
          >
            <ContactPage /> Pages
          </a>

          <a
            href="#"
            className="flex items-center gap-2 p-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
          >
            <Diversity3 /> Helpers
          </a>

          <a
            href="#"
            className="flex items-center gap-2 p-4 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-200"
          >
            <Settings /> Setting
          </a>
        </nav>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 1st Row: Top Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md z-20">
          {/* Mobile Menu Button */}
          <button
            className="text-gray-500 hover:text-gray-700 md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuIcon />
          </button>
          <div className="text-xl font-semibold text-gray-800 hidden md:block">
            Dashboard Overview
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">John Doe</span>
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              👋 Welcome back, John!
            </h1>
            <p className="text-gray-600">Here is your snapshot for today.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <DashboardCard
              title="Active Support Pages"
              value="2,450"
              icon={<PeopleAltOutlined className="w-6 h-6 text-blue-500" />}
              bgColor="bg-blue-100"
            />

            <DashboardCard
              title="Total Helpers"
              value="5"
              icon={<Diversity3 className="w-6 h-6 text-red-500" />}
              bgColor="bg-red-100"
            />

            <DashboardCard
              title="Upcoming Tasks"
              value="10"
              icon={<CalendarMonth className="w-6 h-6 text-green-500" />}
              bgColor="bg-green-100"
            />

            <DashboardCard
              title="Completed fasks"
              value="40"
              icon={<TaskAlt className="w-6 h-6 text-orange-500" />}
              bgColor="bg-orange-100"
            />
          </div>
          <div className="flex justify-between flex-wrap items-center mb-4">
            <h2 className="text-xl font-semibold !mb-0">My Support Pages</h2>
            <button className="theme-btn-primary">
              <Add /> Create New Page
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className=" bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Typography className="!text-lg !font-semibold !mb-0">
                    The Johnson Family
                  </Typography>
                  <div className="bg-green-100 rounded-2xl text-green-500 text-sm px-4 py-1">
                    Active
                  </div>
                </div>
                <Typography>Cancer Treatment</Typography>
                <Typography>
                  Emily is undergoing chemotherapy tissatment and neecis support
                  with meas, transportation, and childcare for her thras
                  children.
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-6 mt-6">
                  <div className="bg-blue-100 p-6 rounded-lg border border-blue-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-blue-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Helper
                    </Typography>
                  </div>

                  <div className="bg-orange-100 p-6 rounded-lg border border-orange-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-orange-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Upcoming
                    </Typography>
                  </div>

                  <div className="bg-green-100 p-6 rounded-lg border border-green-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-green-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Completed
                    </Typography>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 mt-6">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="!shadow-none !min-h-[48px] !rounded-[30px] !font-semibold"
                  >
                    View Page
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="!shadow-none !min-h-[48px] !rounded-[30px] !font-semibold"
                  >
                    Manage
                  </Button>
                </div>
              </div>

              <div className=" bg-white p-6 rounded-lg shadow-lg mb-6">
                <div className="flex items-center justify-between mb-4">
                  <Typography className="!text-lg !font-semibold !mb-0">
                    The Johnson Family
                  </Typography>
                  <div className="bg-green-100 rounded-2xl text-green-500 text-sm px-4 py-1">
                    Active
                  </div>
                </div>
                <Typography>Cancer Treatment</Typography>
                <Typography>
                  Emily is undergoing chemotherapy tissatment and neecis support
                  with meas, transportation, and childcare for her thras
                  children.
                </Typography>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-6 mt-6">
                  <div className="bg-blue-100 p-6 rounded-lg border border-blue-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-blue-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Helper
                    </Typography>
                  </div>

                  <div className="bg-orange-100 p-6 rounded-lg border border-orange-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-orange-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Upcoming
                    </Typography>
                  </div>

                  <div className="bg-green-100 p-6 rounded-lg border border-green-500 flex flex-col items-center justify-between">
                    <Typography className="!text-3xl !font-bold text-green-400 mt-1">
                      12
                    </Typography>
                    <Typography className="!text-lg !font-bold !text-gray-900 mt-1">
                      Completed
                    </Typography>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 mt-6">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="!shadow-none !min-h-[48px] !rounded-[30px] !font-semibold"
                  >
                    View Page
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="!shadow-none !min-h-[48px] !rounded-[30px] !font-semibold"
                  >
                    Manage
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 pb-3 border-gray-300 border-b">
                  <div className="h-10 w-10 rounded-lg  bg-blue-100 flex items-center justify-center">
                    <AccessAlarm className="!text-blue-500" />
                  </div>
                  Recent Activity
                </h2>
                <ul className="space-y-3">
                  <li className="p-2 border-b">
                    <Typography className="!text-sm !font-semibold !mb-2">
                      New user **Jane** registered.
                    </Typography>
                    <Typography className="!text-sm !mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, repellendus!
                    </Typography>
                    <Typography className="!text-muted !text-sm">
                      25-11-22 at 18:00
                    </Typography>
                  </li>
                  <li className="p-2 border-b">
                    <Typography className="!text-sm !font-semibold !mb-2">
                      New user **Jane** registered.
                    </Typography>
                    <Typography className="!text-sm !mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quas, repellendus!
                    </Typography>
                    <Typography className="!text-muted !text-sm">
                      25-11-22 at 18:00
                    </Typography>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-3 pb-3 border-gray-300 border-b">
                  <div className="h-10 w-10 rounded-lg  bg-green-100 flex items-center justify-center">
                    <CalendarMonth className="!text-green-500" />
                  </div>
                  Upcoming Task
                </h2>
                <h2 className="text-xl font-semibold mb-4"></h2>
                <ul className="space-y-3">
                  <li className="p-2 border-b">
                    <Typography className="!text-sm !font-semibold !mb-2">
                      New user **Jane** registered.
                    </Typography>

                    <Typography className="!text-muted !text-sm">
                      25-11-22 at 18:00
                    </Typography>

                    <Typography className="!text-red-500 !text-sm">
                      Filled
                    </Typography>
                  </li>

                  <li className="p-2 border-b">
                    <Typography className="!text-sm !font-semibold !mb-2">
                      New user **Jane** registered.
                    </Typography>

                    <Typography className="!text-muted !text-sm">
                      25-11-22 at 18:00
                    </Typography>

                    <Typography className="!text-green-500 !text-sm">
                      Need volunteer
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
