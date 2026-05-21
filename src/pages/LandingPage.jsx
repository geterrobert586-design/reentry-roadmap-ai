import Layout from '../components/Layout'
import Card from '../components/Card'

export default function LandingPage() {
  return (
    <Layout title="Welcome Home. Build stability one step at a time.">
      <div className="space-y-4">
        <Card title="About Reentry Roadmap AI">
          <p>
            Reentry Roadmap AI is a secure reentry coordination and life-stability command center for returning citizens,
            organizations, churches, workforce programs, and support groups.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Created by Robert Leon Geter II after serving 17 years day-for-day and coming home to build practical tools
            that help people stay organized, accountable, connected, and free.
          </p>
        </Card>

        <Card title="Privacy Statement">
          <p className="font-medium">
            Sensitive information is protected by restricted access controls. Access is based on role, assignment,
            consent, and minimum necessary information.
          </p>
        </Card>

        <Card title="Important Disclaimer">
          <p>
            This app organizes information, reminders, documents, and referrals. It does not provide legal, medical,
            financial, or government-agency advice. Users should confirm requirements with official agencies,
            qualified professionals, attorneys, probation/parole officers, caseworkers, or legal aid where appropriate.
          </p>
        </Card>
      </div>
    </Layout>
  )
}
