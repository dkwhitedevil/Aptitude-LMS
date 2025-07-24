"use client";

import { useRouter } from "next/navigation";
import Header from "../components/Header";

const tests = [
	{
		title: "Aptitude Test 1",
		description:
			"Assess your logical reasoning and problem-solving skills. 20 questions, 30 minutes.",
		image:
			"https://lh3.googleusercontent.com/aida-public/AB6AXuCSTD82PV9d0cIhdj8l0LN58TaEmcV5KGqD-3wz4n9boCKlTyehLbaoP-Ahv6D66RXCmY4cC6qYVjhuWnN1fm1WuWJFYKFhgpqWUF7xde7QJAFEIzUqahm9r76svoq0NTticw8xnz8sbedCbi38At0TW0mD_vDdZZY-UnH5QuOEZ3QKD37rtM6I6p8xysmE4xCly0S97EWbgIKsvgZ6hz6wYLa2dXGkazCa-grI0ik7qH5pbFaqsFA64AUhoTArN0JZKecnknd7-R7F",
	},
];

const TestsPage = () => {
	const router = useRouter();
	return (
		<div
			className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
			style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
		>
			<Header />
			<div className="layout-container flex h-full grow flex-col">
				<div className="px-40 flex flex-1 justify-center py-5">
					<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
						<div className="flex flex-wrap justify-between gap-3 p-4">
							<p className="text-[#0d141c] tracking-light text-[32px] font-bold leading-tight min-w-72">
								Available Aptitude Tests
							</p>
						</div>
						<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 p-4">
							{tests.map((test, idx) => (
								<div
									key={idx}
									className="flex flex-col gap-3 pb-3 rounded-xl border border-[#d3cfe7] bg-white shadow-sm p-6 max-w-sm"
								>
									<p className="text-[#0d141c] text-lg font-bold leading-normal mb-1">
										{test.title}
									</p>
									<p className="text-[#49719c] text-sm font-normal leading-normal mb-2">
										{test.description}
									</p>
									<button
										className="flex mt-1 px-2 py-2 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 md:h-12 md:px-5 bg-[#3713eb] text-[#f9f8fc] text-sm font-bold leading-normal tracking-[0.015em] md:text-base md:font-bold md:leading-normal md:tracking-[0.015em]"
										onClick={() => router.push("/question")}
									>
										Start Test
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
				<footer className="flex justify-center">
					<div className="flex max-w-[960px] flex-1 flex-col">
						<div className="flex items-center justify-center p-4">
							<a href="#" className="flex size-10 items-center justify-center">
								<div className="text-[#0d141c]">
									{/* CaretLeft Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18px"
										height="18px"
										fill="currentColor"
										viewBox="0 0 256 256"
									>
										<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
									</svg>
								</div>
							</a>
							<a
								className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#0d141c] rounded-full bg-[#e7edf4]"
								href="#"
							>
								1
							</a>
							<a
								className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d141c] rounded-full"
								href="#"
							>
								2
							</a>
							<a
								className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0d141c] rounded-full"
								href="#"
							>
								3
							</a>
							<a href="#" className="flex size-10 items-center justify-center">
								<div className="text-[#0d141c]">
									{/* CaretRight Icon */}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18px"
										height="18px"
										fill="currentColor"
										viewBox="0 0 256 256"
									>
										<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
									</svg>
								</div>
							</a>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default TestsPage;

