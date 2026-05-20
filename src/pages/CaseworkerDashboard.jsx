import Layout from '../components/Layout'
import Card from '../components/Card'
import { caseworkerAlerts } from '../data/mockData'

export default function CaseworkerDashboard() {
  return (
    <Layout title="Caseworker Dashboard">
      <Card title="Priority Alerts">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {caseworkerAlerts.map((alert) => (
            <li key={alert}>{alert}</li>
          ))}
        </ul>
      </Card>
    </Layout>
  )
}
