import Banner from "@components/Banner"
import DashboardWidget from "@includes/DashboardWidget"
export default function HomePage() {
  return (
    <main className="z-0 flex flex-col items-center justify-between min-h-screen p-24">
      <Banner />
      <DashboardWidget />
    
    </main>
  )
}
