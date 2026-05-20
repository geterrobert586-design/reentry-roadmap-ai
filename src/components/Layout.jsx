import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Landing' },
  { to: '/participant-dashboard', label: 'Participant' },
  { to: '/caseworker-dashboard', label: 'Caseworker' },
  { to: '/privacy-proof-center', label: 'Privacy Proof' },
  { to: '/first-90-days-home', label: 'First 90 Days' },
  { to: '/id-document-readiness', label: 'ID Readiness' },
  { to: '/appointment-tracker', label: 'Appointments' },
  { to: '/paperwork-desk', label: 'Paperwork Desk' },
  { to: '/brother-g-wisdom-vault', label: 'Brother G' },
]

export default function Layout({ title, children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl p-4">
          <p className="text-xs uppercase tracking-wide text-slate-300">Reentry Roadmap AI</p>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </header>

      <nav className="sticky top-0 z-10 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto p-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`whitespace-nowrap rounded-full px-3 py-1 text-sm ${
                location.pathname === link.to
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-200 text-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-6xl p-4">{children}</main>
    </div>
  )
}
