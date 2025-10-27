import Avatar from "@/components/ui/Avatar";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({
  title = "Dashboard",
  subtitle = "Welcome back, manage your business here!",
}: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">{subtitle}</p>
      </div>

      <Avatar
        size="md"
        name="User"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkHhlQRGzhq5NZ0VVkfmPSFoQinO4cdZAe_UGRbb-VAXfDfTkQzBvYOWpr-Ek5r-47gHCO-YTq7Nc7XBO1pRQ4bgpMF15TxcaU8qFAEHshuXUjyBJnuXbI5fR885HNezEzuRYe9XxRTMCpFqU2x1QPsTwwzDEscCZIHlsEf8D0F9D64FuWzoapm5xgxlJSgChlcqVKabMBrBRgm_TNzyaMMxKI9_fHudUQk0wTEWpXeC694GWHHmhJMjH2s4zj4YgpTLW4_2jWH74E"
      />
    </div>
  );
}
