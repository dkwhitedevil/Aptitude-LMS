"use client";
import Header from "../components/Header";

const DashboardPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <Header/>
        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Welcome & Stats */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight">Welcome back, Dinesh!</p>
                <p className="text-[#4c739a] text-sm font-normal leading-normal">"The only way to do great work is to love what you do." - Steve Jobs</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 p-4">
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7edf3]">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Quizzes Completed This Week</p>
                <p className="text-[#0d141b] tracking-light text-2xl font-bold leading-tight">12</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7edf3]">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Accuracy Rate</p>
                <p className="text-[#0d141b] tracking-light text-2xl font-bold leading-tight">85%</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7edf3]">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Time Spent</p>
                <p className="text-[#0d141b] tracking-light text-2xl font-bold leading-tight">4h 30m</p>
              </div>
            </div>
            {/* Progress Overview */}
            <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Progress Overview</h2>
            <div className="flex flex-wrap gap-4 px-4 py-6">
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#cfdbe7] p-6">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Weekly Performance</p>
                <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight truncate">+15%</p>
                <div className="flex gap-1">
                  <p className="text-[#4c739a] text-base font-normal leading-normal">Last 7 Days</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+15%</p>
                </div>
                {/* Chart Placeholder */}
                <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
                  <svg width="100%" height="148" viewBox="-3 0 478 150" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
                      fill="url(#paint0_linear_1131_5935)"
                    ></path>
                    <path
                      d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                      stroke="#4c739a"
                      stroke-width="3"
                      stroke-linecap="round"
                    ></path>
                    <defs>
                      <linearGradient id="paint0_linear_1131_5935" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#e7edf3"></stop>
                        <stop offset="1" stop-color="#e7edf3" stop-opacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="flex justify-around">
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Mon</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Tue</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Wed</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Thu</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Fri</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Sat</p>
                    <p className="text-[#4c739a] text-[13px] font-bold leading-normal tracking-[0.015em]">Sun</p>
                  </div>
                </div>
              </div>
              <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#cfdbe7] p-6">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Topics Mastered</p>
                <p className="text-[#0d141b] tracking-light text-[32px] font-bold leading-tight truncate">10</p>
                <div className="flex gap-1 mb-2">
                  <p className="text-[#4c739a] text-base font-normal leading-normal">All Time</p>
                  <p className="text-[#078838] text-base font-medium leading-normal">+20%</p>
                </div>
                {/* Topics Bar Chart */}
                <div className="flex items-end gap-16 h-40 w-full">
                  <div className="flex flex-col items-center w-12">
                    <div className="bg-[#4c739a] w-8 rounded-t-md" style={{ height: "75%", minHeight: 98 }} />
                    <span className="text-[#4c739a] text-xs font-bold mt-2">Quant</span>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <div className="bg-[#4c739a] w-8 rounded-t-md" style={{ height: "50%", minHeight: 116 }} />
                    <span className="text-[#4c739a] text-xs font-bold mt-2">Verbal</span>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <div className="bg-[#4c739a] w-8 rounded-t-md" style={{ height: "70%", minHeight: 94 }} />
                    <span className="text-[#4c739a] text-xs font-bold mt-2">Logical</span>
                  </div>
                  <div className="flex flex-col items-center w-12">
                    <div className="bg-[#4c739a] w-8 rounded-t-md" style={{ height: "100%", minHeight: 64 }} />
                    <span className="text-[#4c739a] text-xs font-bold mt-2">Reasoning</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Leaderboard */}
            <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Leaderboard</h2>
            <div className="px-4 py-3">
              <div className="flex overflow-hidden rounded-xl border border-[#cfdbe7] bg-slate-50">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="px-4 py-3 text-left text-[#0d141b] w-[120px] text-sm font-medium leading-normal">Rank</th>
                      <th className="px-4 py-3 text-left text-[#0d141b] w-[240px] text-sm font-medium leading-normal">Name</th>
                      <th className="px-4 py-3 text-left text-[#0d141b] w-[120px] text-sm font-medium leading-normal">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">1</td>
                      <td className="h-[72px] px-4 py-2 w-[240px] text-[#0d141b] text-sm font-normal leading-normal">Dinesh</td>
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">950</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">2</td>
                      <td className="h-[72px] px-4 py-2 w-[240px] text-[#0d141b] text-sm font-normal leading-normal">Thiru</td>
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">920</td>
                    </tr>
                    <tr className="border-t border-t-[#cfdbe7]">
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">3</td>
                      <td className="h-[72px] px-4 py-2 w-[240px] text-[#0d141b] text-sm font-normal leading-normal">Kishore</td>
                      <td className="h-[72px] px-4 py-2 w-[120px] text-[#4c739a] text-sm font-normal leading-normal">880</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Recent Activity */}
            <h2 className="text-[#0d141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Recent Activity</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3">
                <div className="text-[#0d141b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cfdbe7] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Completed Quiz: Quantitative Aptitude</p>
                <p className="text-[#4c739a] text-base font-normal leading-normal">2 hours ago</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#cfdbe7] h-2"></div>
                <div className="text-[#0d141b]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#cfdbe7] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#0d141b] text-base font-medium leading-normal">Scored 90% in Verbal Reasoning</p>
                <p className="text-[#4c739a] text-base font-normal leading-normal">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
