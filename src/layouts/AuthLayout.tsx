import { ReactNode } from "@tanstack/react-router";
import { BackgroundBeam } from "../components/ui/BackgroundBeam";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex bg-gradient-to-bl from-lime-950/50 to-lime-950 to-50% dark:bg-gradient-to-br dark:from-black dark:to-black flex-col h-[100vh] items-center justify-center text-slate-950 transition-bg">
      {children}
      <BackgroundBeam />
    </div>
  );
}
