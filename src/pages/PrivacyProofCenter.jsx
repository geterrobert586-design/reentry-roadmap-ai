import Layout from '../components/Layout'
import Card from '../components/Card'
import { privacyChecks } from '../data/mockData'

export default function PrivacyProofCenter() {
  return (
    <Layout title="Privacy Proof Center">
      <div className="grid gap-4 sm:grid-cols-2">
        {privacyChecks.map((check) => (
          <Card key={check.title} title={check.title}>
            <p className="text-sm">{check.summary}</p>
          </Card>
        ))}
      </div>
    </Layout>
  )
}
