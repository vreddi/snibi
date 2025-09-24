"use client";

import { useRouter } from "next/navigation";
import Header from "~/components/header";
import HeroContent from "~/components/hero-content";
import PulsingCircle from "~/components/pulsing-circle";
import ShaderBackground from "~/components/shader-background";

export default function ShaderShowcase() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  return (
    <ShaderBackground>
      <Header onLoginClick={handleLoginClick} />
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  );
}
