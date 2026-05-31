import {
  BarChart3, Settings, TrendingUp, Truck, Users, Megaphone, Target,
  Crown, Lightbulb, Compass, MessageCircle, Sparkles,
} from "lucide-react";
const map = { BarChart3, Settings, TrendingUp, Truck, Users, Megaphone, Target, Crown, Lightbulb, Compass, MessageCircle, Sparkles };
export default function Icon({ name, ...props }) {
  const Cmp = map[name] || Sparkles;
  return <Cmp {...props} />;
}
