import Layout from '../components/Layout'
import Card from '../components/Card'
import { todayMoves, idReadiness, appointments, documentStatus } from '../data/mockData'

export default function ParticipantDashboard() {
  return (
    <Layout title="Participant Dashboard">
      <div className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">
        Sensitive information is protected by restricted access controls. Access is based on role, assignment,
        consent, and minimum necessary information.
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card title="Today's Moves">
          <ul className="space-y-2">
            {todayMoves.map((move) => (
              <li key={move.id} className="flex items-center justify-between rounded bg-slate-50 p-2 text-sm">
                <span>{move.task}</span>
                <span className="rounded bg-slate-200 px-2 py-1">{move.status}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="ID Readiness">
          <ul className="space-y-2 text-sm">
            {idReadiness.map((item) => (
              <li key={item.item} className="flex justify-between">
                <span>{item.item}</span>
                <span className="font-medium">{item.status}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Appointments">
          <ul className="space-y-2 text-sm">
            {appointments.map((appt) => (
              <li key={appt.name} className="rounded bg-slate-50 p-2">
                <p className="font-medium">{appt.name}</p>
                <p>{appt.when}</p>
                <p className="text-slate-600">{appt.location}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Document Status">
          <ul className="space-y-2 text-sm">
            {documentStatus.map((doc) => (
              <li key={doc.doc} className="flex justify-between">
                <span>{doc.doc}</span>
                <span>{doc.status}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Layout>
  )
}
