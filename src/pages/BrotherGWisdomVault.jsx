import Layout from '../components/Layout'
import Card from '../components/Card'
import { brotherGWisdom } from '../data/mockData'

export default function BrotherGWisdomVault() {
  return (
    <Layout title="Brother G Wisdom Vault">
      <div className="space-y-4">
        <Card title="Day-for-Day Guide">
          <p>
            Brother G offers lived-experience guidance, structure, accountability, and next-step thinking for people
            rebuilding life after incarceration.
          </p>
          <p className="mt-2 text-sm text-slate-700">
            Brother G does not provide legal advice and does not replace attorneys, clinicians, caseworkers,
            probation/parole officers, or other qualified professionals.
          </p>
        </Card>
        <Card title="Wisdom Examples">
          <ul className="list-disc space-y-2 pl-5 text-sm">
            {brotherGWisdom.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
