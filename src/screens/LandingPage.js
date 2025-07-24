"use client";
import { useRouter } from "next/navigation";
import Header from "../components/Header";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f9f8fc] group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-6 px-4 py-10 md:gap-8 md:flex-row">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl md:h-auto md:min-w-[400px] md:w-full"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDevk9iJ8rbmQBd3B-6iQQPBJ3yT6ZQz6OiccARdNIWo-Os1GRJHt3G2RxwbNRK77i_w3D1Fke8-mkLKaV7diYOi7s5KwZ-jDCovGw4JiigkkUAkXoUphFtDczsdDvizh3WPUfLzM8_bW3IYjkhVMhThcAzoPyPQzfpTf96Z9Ow8cylbdCDzaI5vqyAIZCqTnyMIhIF2jpY44Agyt_J1Kh6vj6LNGzOYflctza_khkGbq9C35ENCoCavDX5x8x7hfkbyWrMGGEYSq42")' }}
              ></div>
              <div className="flex flex-col gap-6 md:min-w-[400px] md:gap-8 md:justify-center">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-[#100d1b] text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl md:font-black md:leading-tight md:tracking-[-0.033em]">
                    Master Aptitude. Ace Every Exam.
                  </h1>
                  <h2 className="text-[#100d1b] text-sm font-normal leading-normal md:text-base md:font-normal md:leading-normal">
                    Practice with smart quizzes, get instant feedback, and track your progress visually.
                  </h2>
                </div>
                <div className="flex-wrap gap-3 flex">
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#3713eb] text-[#f9f8fc] text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em]"
                    onClick={() => router.push("/tests")}
                  >
                    <span className="truncate">Start Practicing</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#100d1b] tracking-light text-[32px] font-bold leading-tight md:text-4xl md:font-black md:leading-tight md:tracking-[-0.033em] max-w-[720px]">
                  Core Features
                </h1>
                <p className="text-[#100d1b] text-base font-normal leading-normal max-w-[720px]">
                  Aptitude LMS offers a suite of tools designed to enhance your learning experience and maximize your exam performance.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d3cfe7] bg-[#f9f8fc] p-4 flex-col">
                  <div className="text-[#100d1b]">
                    {/* Chart Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/></svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#100d1b] text-base font-bold leading-tight">Smart Quiz Engine</h2>
                    <p className="text-[#594c9a] text-sm font-normal leading-normal">Real-time scoring, adaptive difficulty</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d3cfe7] bg-[#f9f8fc] p-4 flex-col">
                  <div className="text-[#100d1b]">
                    {/* Progress Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z"/></svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#100d1b] text-base font-bold leading-tight">Progress Tracker</h2>
                    <p className="text-[#594c9a] text-sm font-normal leading-normal">Visual analytics and improvement stats</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d3cfe7] bg-[#f9f8fc] p-4 flex-col">
                  <div className="text-[#100d1b]">
                    {/* Feedback Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M229.33,98.21,53.41,33l-.16-.05A16,16,0,0,0,32.9,53.25a1,1,0,0,0,.05.16L98.21,229.33A15.77,15.77,0,0,0,113.28,240h.3a15.77,15.77,0,0,0,15-11.29l23.56-76.56,76.56-23.56a16,16,0,0,0,.62-30.38ZM224,113.3l-76.56,23.56a16,16,0,0,0-10.58,10.58L113.3,224h0l-.06-.17L48,48l175.82,65.22.16.06Z"/></svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#100d1b] text-base font-bold leading-tight">Instant Feedback</h2>
                    <p className="text-[#594c9a] text-sm font-normal leading-normal">Learn from mistakes immediately</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d3cfe7] bg-[#f9f8fc] p-4 flex-col">
                  <div className="text-[#100d1b]">
                    {/* Layout Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"/></svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#100d1b] text-base font-bold leading-tight">User-Friendly Interface</h2>
                    <p className="text-[#594c9a] text-sm font-normal leading-normal">Distraction-free and responsive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#594c9a]">
                    {/* Twitter Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"/></svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#594c9a]">
                    {/* Facebook Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"/></svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#594c9a]">
                    {/* Instagram Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"/></svg>
                  </div>
                </a>
              </div>
              <p className="text-[#594c9a] text-base font-normal leading-normal">© 2024 Aptitude LMS. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
