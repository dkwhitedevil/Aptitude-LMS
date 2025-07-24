"use client";
import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import Header from "../components/Header";
Chart.register(ArcElement, Tooltip, Legend);

const ResultPage = () => {
  const [summary, setSummary] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = window.localStorage.getItem("testSummary");
    if (stored) {
      setSummary(JSON.parse(stored));
    }
  }, []);

  // Example values, replace with your logic
  const score = summary ? Math.round((summary.answered / summary.total) * 100) : 0;
  const accuracy = summary ? `${Math.round((summary.answered / summary.total) * 100)}%` : "0%";
  const completion = summary ? `${Math.round(((summary.answered + summary.skipped) / summary.total) * 100)}%` : "0%";
  const timeEfficiency = "High";
  const timeTaken = "18 mins";
  const correct = summary ? summary.answered : 0;
  const incorrect = summary ? summary.total - summary.answered - summary.skipped : 0;
  const name = "Dinesh"; // Replace with dynamic user name if available

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h2 className="text-[#111418] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Your Result</h2>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#111418] text-base font-medium leading-normal">Score</p>
                <p className="text-[#111418] text-sm font-normal leading-normal">{score}%</p>
              </div>
              <div className="rounded bg-[#dbe0e6]">
                <div className="h-2 rounded bg-[#111418]" style={{ width: `${score}%` }}></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch rounded-xl" style={{ minHeight: '300px' }}>
                <div className="flex flex-col gap-1 flex-1 justify-center pr-12">
                  <p className="text-[#111418] text-base font-bold leading-tight">Performance Summary</p>
                  <p className="text-[#60758a] text-sm font-normal leading-normal">
                    Total Questions: {summary ? summary.total : 0}<br />
                    Attempted: {summary ? summary.answered + summary.skipped : 0}<br />
                    Skipped: {summary ? summary.skipped : 0}<br />
                    Correct: {correct}<br />
                    Incorrect: {incorrect}<br />
                    Time Taken: {timeTaken}
                  </p>
                </div>
                <div className="flex items-center justify-end flex-1">
                  <div className="w-72 h-72">
                    <Pie
                      data={{
                        labels: ["Correct", "Incorrect", "Skipped"],
                        datasets: [
                          {
                            data: [correct, incorrect, summary ? summary.skipped : 0],
                            backgroundColor: ["#22c55e", "#ef4444", "#f0f3f4"], // green, red, gray
                            borderWidth: 0,
                          },
                        ],
                      }}
                      options={{ plugins: { legend: { display: true, position: "bottom" } } }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f2f5]">
                <p className="text-[#111418] text-base font-medium leading-normal">Accuracy</p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{accuracy}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f2f5]">
                <p className="text-[#111418] text-base font-medium leading-normal">Completion</p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{completion}</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#f0f2f5]">
                <p className="text-[#111418] text-base font-medium leading-normal">Time Efficiency</p>
                <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">{timeEfficiency}</p>
              </div>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">Great job, {name}! You're improving fast.</p>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f5] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em] grow"
                  onClick={() => router.push("/review")}
                >
                  <span className="truncate">Go to Dashboard</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#0c7ff2] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
                  onClick={() => router.push("/question")}
                >
                  <span className="truncate">Retake Test</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
