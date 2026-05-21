import Layout from '../components/Layout'
import Card from '../components/Card'

export default function SimpleSectionPage({ title, description }) {
  return (
    <Layout title={title}>
      <Card title={title}>
        <p>{description}</p>
      </Card>
    </Layout>
  )
}
