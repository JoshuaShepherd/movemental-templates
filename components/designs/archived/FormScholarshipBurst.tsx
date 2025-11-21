"use client"

import { useState } from "react"

const steps = ["Profile", "Essay", "Budget", "Review"]

export default function FormScholarshipBurst() {
  const [currentStep, setCurrentStep] = useState(2)
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))
  }

  return (
    <div className="min-h-screen bg-[#fef7fb] text-rose-900">
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.5em] text-rose-500">About the Fund</p>
          <h1 className="text-4xl font-semibold">Scholarship Burst Application</h1>
          <p className="text-rose-700">
            Designed to showcase progress indicators, complex forms, currency inputs, toggles, and validation hints in one hero experience.
          </p>
        </header>

        <section className="rounded-[32px] border border-rose-100 bg-white shadow-lg p-8 space-y-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex-1 flex flex-col items-center text-sm">
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                    index <= currentStep ? "bg-rose-500 text-white" : "border-rose-200 text-rose-400"
                  }`}
                >
                  {index + 1}
                </div>
                <p className={`mt-2 ${index <= currentStep ? "text-rose-600 font-semibold" : "text-rose-300"}`}>{step}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-rose-600">Estimated budget required</label>
              <div className="mt-2 flex items-center gap-2">
                <span className="px-3 py-2 rounded-xl bg-rose-100 text-rose-700 font-semibold">$</span>
                <input type="number" className="flex-1 rounded-xl border border-rose-200 px-4 py-2" placeholder="10,000" />
              </div>
            </div>
            <div>
              <label className="text-sm text-rose-600">Proposed launch date</label>
              <input type="date" className="mt-2 w-full rounded-xl border border-rose-200 px-4 py-2" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-rose-600">Project overview</label>
              <textarea className="mt-2 w-full rounded-2xl border border-rose-200 p-4 h-32" placeholder="Explain your project focus..." />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <label className="flex items-center gap-3 border border-rose-200 rounded-2xl p-4 cursor-pointer">
              <input type="checkbox" className="accent-rose-500" /> Training materials
            </label>
            <label className="flex items-center gap-3 border border-rose-200 rounded-2xl p-4 cursor-pointer">
              <input type="checkbox" className="accent-rose-500" /> Travel stipend
            </label>
            <label className="flex items-center gap-3 border border-rose-200 rounded-2xl p-4 cursor-pointer">
              <input type="checkbox" className="accent-rose-500" /> Tech stack
            </label>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-rose-600">Upload proposal (PDF)</label>
            <input type="file" className="block w-full text-sm text-rose-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-rose-100 file:text-rose-600" />
            <p className="text-xs text-rose-400">Max 25MB</p>
          </div>

          <div className="flex justify-between items-center">
            <button
              className={`text-rose-500 underline transition-opacity ${isFirstStep ? "opacity-40 cursor-not-allowed" : ""}`}
              onClick={handlePrevious}
              disabled={isFirstStep}
            >
              Back
            </button>
            <div className="space-x-3">
              <button className="px-5 py-2 rounded-full border border-rose-200 text-rose-600">Save</button>
              <button
                className={`px-6 py-2 rounded-full bg-rose-500 text-white font-semibold transition-opacity ${
                  isLastStep ? "opacity-40 cursor-not-allowed" : ""
                }`}
                onClick={handleNext}
                disabled={isLastStep}
              >
                {isLastStep ? "Review" : "Next step"}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

