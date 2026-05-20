import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ParticipantDashboard from './pages/ParticipantDashboard'
import CaseworkerDashboard from './pages/CaseworkerDashboard'
import PrivacyProofCenter from './pages/PrivacyProofCenter'
import BrotherGWisdomVault from './pages/BrotherGWisdomVault'
import SimpleSectionPage from './pages/SimpleSectionPage'
import IntakeFlow from './pages/IntakeFlow'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/participant-dashboard" element={<ParticipantDashboard />} />
      <Route path="/caseworker-dashboard" element={<CaseworkerDashboard />} />
      <Route path="/privacy-proof-center" element={<PrivacyProofCenter />} />
      <Route
        path="/first-90-days-home"
        element={
          <SimpleSectionPage
            title="First 90 Days Home"
            description="Track the most important early steps: housing, supervision, routines, transportation, and support network check-ins."
          />
        }
      />
      <Route
        path="/id-document-readiness"
        element={
          <SimpleSectionPage
            title="ID & Document Readiness"
            description="Keep a clear list of required IDs, deadlines, and what is still missing so nothing gets lost."
          />
        }
      />
      <Route
        path="/appointment-tracker"
        element={
          <SimpleSectionPage
            title="Appointment Tracker"
            description="See appointments, locations, and reminders in one place to avoid missed meetings."
          />
        }
      />
      <Route
        path="/paperwork-desk"
        element={
          <SimpleSectionPage
            title="Paperwork Desk"
            description="Organize forms, referrals, and status updates so participants and caseworkers stay aligned."
          />
        }
      />
      <Route path="/brother-g-wisdom-vault" element={<BrotherGWisdomVault />} />
      <Route path="/intake" element={<IntakeFlow />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
