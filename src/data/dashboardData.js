import {
  PersonAdd,
  ShoppingBag,
  Payments,
  Analytics,
} from "@mui/icons-material";

export const statsData = [
  {
    title: "Total Revenue",
    value: "$84,250",
    growth: "+12.4%",
    icon: Payments,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "New Users",
    value: "2,845",
    growth: "+8.1%",
    icon: PersonAdd,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Orders",
    value: "1,248",
    growth: "+6.7%",
    icon: ShoppingBag,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Conversion",
    value: "18.6%",
    growth: "+2.3%",
    icon: Analytics,
    color: "bg-orange-100 text-orange-600",
  },
];

export const revenueData = [
  { month: "Jan", revenue: 12000, target: 10000 },
  { month: "Feb", revenue: 15000, target: 13000 },
  { month: "Mar", revenue: 18000, target: 16000 },
  { month: "Apr", revenue: 22000, target: 20000 },
  { month: "May", revenue: 26000, target: 23000 },
  { month: "Jun", revenue: 24000, target: 22000 },
  { month: "Jul", revenue: 30000, target: 27000 },
  { month: "Aug", revenue: 34000, target: 30000 },
  { month: "Sep", revenue: 37000, target: 34000 },
  { month: "Oct", revenue: 41000, target: 38000 },
  { month: "Nov", revenue: 45000, target: 42000 },
  { month: "Dec", revenue: 52000, target: 48000 },
];

export const activityFeed = [
  {
    id: 1,
    title: "New user registered",
    subtitle: "Sarah joined the platform",
    time: "5 min ago",
    icon: PersonAdd,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Order completed",
    subtitle: "Order #4582 successfully delivered",
    time: "20 min ago",
    icon: ShoppingBag,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 3,
    title: "Revenue updated",
    subtitle: "Monthly revenue report generated",
    time: "1 hour ago",
    icon: Payments,
    color: "bg-purple-100 text-purple-600",
  },
];

export const users = [
  {
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "UI Designer",
    status: "Active",
    progress: 92,
    avatar: "SJ",
    avatarColor: "#2563EB",
  },
  {
    name: "David Miller",
    email: "david@example.com",
    role: "Frontend Developer",
    status: "Pending",
    progress: 68,
    avatar: "DM",
    avatarColor: "#7C3AED",
  },
  {
    name: "Emily Clark",
    email: "emily@example.com",
    role: "Project Manager",
    status: "Active",
    progress: 88,
    avatar: "EC",
    avatarColor: "#059669",
  },
];