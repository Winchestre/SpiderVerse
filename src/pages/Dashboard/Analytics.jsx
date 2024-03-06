import { AnalyticsHeader, AnalyticsTableHeader, AnalyticsTable } from "@/components/Dashboard"

const Analytics = () => {
  return (
    <section className="section">
      <AnalyticsHeader />
      <AnalyticsTableHeader />
      <AnalyticsTable />
    </section>
  )
}
export default Analytics