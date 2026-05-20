// Sprint 1 mock data only. No real user data is used here.
export const todayMoves = [
  { id: 1, task: 'Confirm housing check-in call', status: 'In Progress' },
  { id: 2, task: 'Bring ID documents to intake office', status: 'Ready Today' },
  { id: 3, task: 'Text caseworker after appointment', status: 'Pending' },
]

export const idReadiness = [
  { item: 'State ID application', status: 'Submitted' },
  { item: 'Birth certificate', status: 'Need a copy' },
  { item: 'Social Security card', status: 'Appointment booked' },
]

export const appointments = [
  { name: 'Probation check-in', when: 'Thu 9:00 AM', location: 'Downtown Office' },
  { name: 'Workforce orientation', when: 'Fri 1:30 PM', location: 'Career Center' },
]

export const documentStatus = [
  { doc: 'Housing referral form', status: 'Waiting signature' },
  { doc: 'Health clinic intake', status: 'Complete' },
]

export const privacyChecks = [
  {
    title: 'Role Check',
    summary: 'Confirms the person viewing records has the right role for this section.',
  },
  {
    title: 'Consent Check',
    summary: 'Confirms shared information matches what the participant agreed to share.',
  },
  {
    title: 'Minimum Data Check',
    summary: 'Shows only the smallest amount of information needed for the task.',
  },
  {
    title: 'Audit Check',
    summary: 'Tracks who accessed what information and when for accountability.',
  },
]

export const caseworkerAlerts = [
  'Participant missed one housing call. Follow up today.',
  'ID readiness is blocked by missing birth certificate.',
  'New referral request from local church support team.',
]

export const brotherGWisdom = [
  'Start each day with one must-do move and one backup move.',
  'Write down names, dates, and promises so stress does not steal details.',
  'Ask for help early. Accountability is strength, not weakness.',
]
