import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-black tracking-tighter">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          Welcome back, manage your business here!
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" className="h-10">Today</Button>
          <Button variant="outline" className="h-10">This Week</Button>
          <Button variant="outline" className="h-10">This Month</Button>
          <Button variant="outline" className="h-10">
            <span>Custom Range</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </Button>
        </div>
        <Button variant="outline" className="h-10" icon="tune">Customize</Button>
        <Avatar
          size="md"
          name="User"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHhlQRGzhq5NZ0VVkfmPSFoQinO4cdZAe_UGRbb-VAXfDfTkQzBvYOWpr-Ek5r-47gHCO-YTq7Nc7XBO1pRQ4bgpMF15TxcaU8qFAEHshuXUjyBJnuXbI5fR885HNezEzuRYe9XxRTMCpFqU2x1QPsTwwzDEscCZIHlsEf8D0F9D64FuWzoapm5xgxlJSgChlcqVKabMBrBRgm_TNzyaMMxKI9_fHudUQk0wTEWpXeC694GWHHmhJMjH2s4zj4YgpTLW4_2jWH74E"
        />
      </div>
    </div>
  );
}
