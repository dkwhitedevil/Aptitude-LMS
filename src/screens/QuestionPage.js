// QuestionPage.js
// Converted from provided HTML to React/Next.js component

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const QuestionPage = () => {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: value }
  // Removed dark mode logic
  const router = useRouter();

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch questions.json");
        return res.json();
      })
      .then((data) => setSections(data.sections))
      .catch((err) => {
        console.error("Error fetching questions.json:", err);
        setSections([]);
      });
  }, []);

  const handleSectionChange = (e) => {
    setSelectedSection(Number(e.target.value));
    setCurrentQuestion(0);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    if (!sections[selectedSection]) return;
    const q = section?.questions[currentQuestion];
    // If current question is unanswered, mark as skipped
    if (q && answers[q.id] === undefined) {
      setAnswers((prev) => {
        const updated = { ...prev, [q.id]: "skipped" };
        return updated;
      });
    }
    // If not last question in section, go to next question
    if (currentQuestion < sections[selectedSection].questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // If not last section, go to next section and reset question
      if (selectedSection < sections.length - 1) {
        setSelectedSection((prev) => prev + 1);
        setCurrentQuestion(0);
      }
      // If last question of last section, do nothing (Submit button will show)
    }
  }

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    // Calculate summary
    let answered = 0, skipped = 0, unanswered = 0;
    let total = 0;
    let skippedQuestions = [], answeredQuestions = [], unansweredQuestions = [];
    sections.forEach((section) => {
      section.questions.forEach((q) => {
        total++;
        if (answers[q.id] === undefined) {
          unanswered++;
          unansweredQuestions.push(q.question);
        } else if (answers[q.id] === "skipped") {
          skipped++;
          skippedQuestions.push(q.question);
        } else {
          answered++;
          answeredQuestions.push(q.question);
        }
      });
    });
    const summary = {
      total,
      answered,
      skipped,
      unanswered,
      answeredQuestions,
      skippedQuestions,
      unansweredQuestions,
    };
    // Store summary in localStorage and navigate
    window.localStorage.setItem("testSummary", JSON.stringify(summary));
    router.push("/test-summary");
  };

  const section = sections[selectedSection];
  const question = section?.questions[currentQuestion];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden pb-16 bg-white"
      style={{
        '--radio-dot-svg': "url('data:image/svg+xml,%3csvg viewBox=%270 0 16 16%27 fill=%27rgb(20,18,23)%27 xmlns=%27http://www.w3.org/2000/svg%27%3e%3ccircle cx=%278%27 cy=%278%27 r=%273%27/%3e%3c/svg%3e')",
        '--select-button-svg': "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724px%27 height=%2724px%27 fill=%27rgb(112,104,130)%27 viewBox=%270 0 256 256%27%3e%3cpath d=%27M181.66,170.34a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-48-48a8,8,0,0,1,11.32-11.32L128,212.69l42.34-42.35A8,8,0,0,1,181.66,170.34Zm-96-84.68L128,43.31l42.34,42.35a8,8,0,0,0,11.32-11.32l-48-48a8,8,0,0,0-11.32,0l-48,48A8,8,0,0,0,85.66,85.66Z%27%3e%3c/path%3e%3c/svg%3e')",
        fontFamily: 'Inter, Noto Sans, sans-serif',
      }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-row max-w-[2000px] flex-1 gap-16">
            {/* Main question area */}
            <div className="flex flex-col flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#141217] tracking-light text-[32px] font-bold leading-tight min-w-72">Aptitude Test</p>
                <select
                  className="flex h-10 min-w-[120px] max-w-[280px] cursor-pointer items-center justify-between overflow-hidden rounded-xl bg-[#f2f1f4] text-[#141217] text-sm font-bold leading-normal tracking-[0.015em] px-4"
                  value={selectedSection}
                  onChange={handleSectionChange}
                >
                  {sections.map((section, index) => (
                    <option key={index} value={index}>
                      {section.title}
                    </option>
                  ))}
                </select>
              </div>
              {question && (
                <>
                  <h2 className="text-[#141217] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-2 pt-4">
                    Question {currentQuestion + 1} of {section.questions.length}
                  </h2>
                  <div className="p-4">
                    <p className="text-black tracking-light text-2xl font-bold leading-tight flex-1">{question.question}</p>
                  </div>
                  <div className="flex flex-col gap-3 p-4">
                    {Object.entries(question.options).map(([key, value]) => (
                      <label key={key} className="flex items-center gap-4 rounded-xl border border-solid p-[15px] border-[#dfdde4]">
                        <input
                          type="radio"
                          className="h-5 w-5 border-2 bg-transparent text-transparent checked:border-[#141217] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#141217] border-[#dfdde4]"
                          name={question.id}
                          checked={answers[question.id] === key}
                          onChange={() => handleAnswer(question.id, key)}
                        />
                        <div className="flex grow flex-col"><p className="text-[#141217] text-sm font-medium leading-normal">{value}</p></div>
                      </label>
                    ))}
                  </div>
            
                </>
              )}
              {/* Test summary is now shown on a separate page */}
            </div>
            {/* Quiz navigation sidebar */}
            <div className="flex flex-col items-center min-w-[220px] bg-[#f7f7f7] rounded-xl p-4 border border-[#e0e0e0]">
              <h3 className="text-lg font-semibold mb-4">Quiz navigation</h3>
              <div className="grid grid-cols-8 gap-2">
                {sections.length > 0 && sections[selectedSection]?.questions.map((q, idx) => {
                  const isSkipped = answers[q.id] === "skipped";
                  const isAnswered = answers[q.id] !== undefined && !isSkipped;
                  const isUnanswered = answers[q.id] === undefined;
                  let colorClass = '';
                  if (isSkipped) colorClass = 'bg-red-500 text-white';
                  else if (isAnswered) colorClass = 'bg-green-600 text-white';
                  else if (isUnanswered) colorClass = 'bg-gray-200 text-gray-800';
                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={`flex flex-col items-center justify-center w-8 h-8 rounded border text-xs font-bold ${colorClass} ${currentQuestion === idx ? 'ring-2 ring-blue-500' : ''}`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => setCurrentQuestion(idx)}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[1200px] flex-1 flex-col">  
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#141217] text-base font-medium leading-normal">
                  {question ? `Question ${currentQuestion + 1} of ${section.questions.length}` : ""}
                </p>
              </div>
              <div className="rounded bg-[#dfdde4]"> 
                <div className="h-2 rounded bg-[#141217]" style={{width: question ? `${((currentQuestion + 1) / section.questions.length) * 100}%` : '0%'}}></div>
              </div>
            </div>
            <div className="flex justify-stretch">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between items-center">
                <button onClick={handlePrev} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f2f1f4] text-[#141217] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Previous</span>
                </button>
                {/* Centered Submit button only on last question of last section */}
                {selectedSection === sections.length - 1 && currentQuestion === section?.questions.length - 1 ? (
                  <button
                    className="px-6 py-2 rounded-xl bg-[#6c63ff] text-white font-bold text-base shadow hover:bg-[#5548c8] transition-colors duration-150 cursor-pointer"
                    onClick={handleSubmit}
                    style={{ margin: '0 auto' }}
                  >Submit</button>
                ) : null}
                <button onClick={handleNext} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#c0aee9] text-[#141217] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Next</span>
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QuestionPage;
