import { useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'

// These arrays keep options in one place so the page is easier to read and edit.
const whoOptions = [
  'I am coming home / recently home',
  'I am helping someone coming home',
  'I am a caseworker / mentor',
  'I represent a reentry organization',
  'I represent a church or community group',
]

const reentryOptions = [
  'Still incarcerated',
  'Coming home soon',
  'Recently released',
  'Home more than 90 days',
  'Supporting someone else',
]

const housingOptions = ['Stable housing', 'Temporary housing', 'Unhoused / housing uncertain']
const transportOptions = ['Reliable transportation', 'Limited transportation', 'No transportation right now']

const documentOptions = [
  'Current State ID',
  'Social Security card or number',
  'Birth certificate',
  'Proof of residency',
  'Expired ID',
  'Need REAL ID',
]

const trackOptions = [
  'Probation / parole / supervision',
  'Children / custody / visitation / family connection',
  'Employment help',
  'Housing help',
  'Transportation help',
  'Paperwork help',
  'Appointment reminders',
]

export default function IntakeFlow() {
  // useState stores form choices locally in the browser (no backend in Sprint 2).
  const [whoAreYou, setWhoAreYou] = useState('')
  const [reentryStatus, setReentryStatus] = useState('')
  const [stateReturningTo, setStateReturningTo] = useState('')
  const [cityCounty, setCityCounty] = useState('')
  const [housingStatus, setHousingStatus] = useState('')
  const [transportation, setTransportation] = useState('')
  const [documentStatus, setDocumentStatus] = useState([])
  const [lifeTracks, setLifeTracks] = useState([])

  // Helper to add/remove a checkbox option from an array state value.
  const toggleSelection = (item, setSelected) => {
    setSelected((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    )
  }

  const hasSupervision = lifeTracks.includes('Probation / parole / supervision')
  const hasFamilyConnection = lifeTracks.includes('Children / custody / visitation / family connection')

  // Missing docs rule for recommendations.
  const hasMissingDocuments = (() => {
    const missingFlags = ['Expired ID', 'Need REAL ID']
    const requiredCoreDocs = [
      'Current State ID',
      'Social Security card or number',
      'Birth certificate',
      'Proof of residency',
    ]

    const hasMissingFlag = documentStatus.some((doc) => missingFlags.includes(doc))
    const missingCoreDoc = requiredCoreDocs.some((doc) => !documentStatus.includes(doc))

    return hasMissingFlag || missingCoreDoc
  })()

  // Build a recommendation list based on choices in this intake form.
  const recommendedModules = (() => {
    const modules = new Set(['Participant Dashboard'])

    if (hasSupervision) modules.add('Supervision Tracker')
    if (hasFamilyConnection) modules.add('Family Connection Tracker')
    if (hasMissingDocuments) modules.add('ID & Document Readiness')
    if (lifeTracks.includes('Appointment reminders')) modules.add('Appointment Tracker')
    if (lifeTracks.includes('Paperwork help')) modules.add('Paperwork Desk')
    if (lifeTracks.includes('Housing help') || housingStatus !== 'Stable housing') {
      modules.add('First 90 Days Home')
    }

    return Array.from(modules)
  })()

  return (
    <Layout title="Participant Intake Flow">
      <div className="space-y-4">
        <Card title="Privacy Statement">
          <p className="font-medium text-sm">
            Sensitive information is protected by restricted access controls. Access is based on role, assignment,
            consent, and minimum necessary information.
          </p>
        </Card>

        <Card title="1. Who Are You?">
          <div className="space-y-2 text-sm">
            {whoOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="whoAreYou"
                  value={option}
                  checked={whoAreYou === option}
                  onChange={() => setWhoAreYou(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </Card>

        <Card title="2. Reentry Status">
          <div className="space-y-2 text-sm">
            {reentryOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="reentryStatus"
                  value={option}
                  checked={reentryStatus === option}
                  onChange={() => setReentryStatus(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </Card>

        <Card title="3. Location">
          <div className="grid gap-3 text-sm">
            <label>
              State returning to
              <input
                className="mt-1 w-full rounded border border-slate-300 p-2"
                value={stateReturningTo}
                onChange={(event) => setStateReturningTo(event.target.value)}
                placeholder="Example: Georgia"
              />
            </label>
            <label>
              City / County
              <input
                className="mt-1 w-full rounded border border-slate-300 p-2"
                value={cityCounty}
                onChange={(event) => setCityCounty(event.target.value)}
                placeholder="Example: Fulton County"
              />
            </label>
            <label>
              Housing status
              <select
                className="mt-1 w-full rounded border border-slate-300 p-2"
                value={housingStatus}
                onChange={(event) => setHousingStatus(event.target.value)}
              >
                <option value="">Select housing status</option>
                {housingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Transportation situation
              <select
                className="mt-1 w-full rounded border border-slate-300 p-2"
                value={transportation}
                onChange={(event) => setTransportation(event.target.value)}
              >
                <option value="">Select transportation situation</option>
                {transportOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </Card>

        <Card title="4. Document Status">
          <div className="space-y-2 text-sm">
            {documentOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={documentStatus.includes(option)}
                  onChange={() => toggleSelection(option, setDocumentStatus)}
                />
                {option}
              </label>
            ))}
          </div>
          {hasMissingDocuments && (
            <p className="mt-3 rounded bg-amber-50 p-2 text-sm text-amber-900">
              ID &amp; Document Readiness will be recommended.
            </p>
          )}
        </Card>

        <Card title="5. Life Stability Tracks">
          <div className="space-y-2 text-sm">
            {trackOptions.map((option) => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={lifeTracks.includes(option)}
                  onChange={() => toggleSelection(option, setLifeTracks)}
                />
                {option}
              </label>
            ))}
          </div>

          {hasSupervision && (
            <p className="mt-3 rounded bg-blue-50 p-2 text-sm text-blue-900">
              Supervision Tracker will be recommended.
            </p>
          )}

          {hasFamilyConnection && (
            <p className="mt-3 rounded bg-purple-50 p-2 text-sm text-purple-900">
              Family Connection Tracker will be recommended.
            </p>
          )}
        </Card>

        <Card title="Recommended Roadmap">
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {recommendedModules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </Card>

        <Card title="Important Disclaimer">
          <p className="text-sm">
            This app organizes information, reminders, documents, and referrals. It does not provide legal, medical,
            financial, or government-agency advice. Users should confirm requirements with official agencies,
            qualified professionals, attorneys, probation/parole officers, caseworkers, or legal aid where appropriate.
          </p>
        </Card>
      </div>
    </Layout>
  )
}
