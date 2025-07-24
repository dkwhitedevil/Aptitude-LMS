"use client";
"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Header from "../components/Header";
Chart.register(ArcElement, Tooltip, Legend);

const SummaryPage = () => {
  const [summary, setSummary] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = window.localStorage.getItem("testSummary");
    if (stored) {
      setSummary(JSON.parse(stored));
    }
  }, []);

  // Dummy values for time and accuracy (replace with real logic if available)
  const timeTaken = "18 mins";
  const accuracy = summary ? `${Math.round((summary.answered / summary.total) * 100)}%` : "0%";

  // Pie chart data for answered/skipped only
  const pieData = summary
    ? {
        labels: ["Answered", "Skipped"],
        datasets: [
          {
            data: [summary.answered, summary.skipped],
            backgroundColor: ["#22c55e", "#ef4444"], // green, red
            borderWidth: 0,
          },
        ],
      }
    : {
        labels: ["Answered", "Skipped"],
        datasets: [
          {
            data: [0, 0],
            backgroundColor: ["#22c55e", "#ef4444"],
            borderWidth: 0,
          },
        ],
      };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Test Summary</p></div>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 items-center">
                <p className="text-[#111518] text-base font-medium leading-normal">Questions</p>
                <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight truncate">{summary ? summary.total : 0}</p>
                <p className="text-[#637988] text-base font-normal leading-normal">Total</p>
                <div className="w-64 h-64 flex items-center justify-center">
                  <Pie data={pieData} options={{ plugins: { legend: { display: true, position: "bottom" } } }} />
                </div>
              </div>
            </div>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce1e5] py-5">
                <p className="text-[#637988] text-sm font-normal leading-normal">Attempted</p>
                <p className="text-[#111518] text-sm font-normal leading-normal">{summary ? summary.answered : 0}</p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#dce1e5] py-5">
                <p className="text-[#637988] text-sm font-normal leading-normal">Skipped</p>
                <p className="text-[#111518] text-sm font-normal leading-normal">{summary ? summary.skipped : 0}</p>
              </div>
            </div>
            <div className="flex justify-center p-4">
              <div className="flex min-w-[158px] flex-col gap-2 rounded-xl p-6 border border-[#dce1e5] items-center">
                <p className="text-[#111518] text-base font-medium leading-normal">Time Taken</p>
                <p className="text-[#111518] tracking-light text-2xl font-bold leading-tight">{timeTaken}</p>
              </div>
            </div>
            <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Great effort! Every question is a step closer to mastery.</p>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#1993e5] text-white text-base font-bold leading-normal tracking-[0.015em] w-full"
                  onClick={() => router.push("/result")}
                >
                  <span className="truncate">End Test & View Result</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
