"use client";

import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button onPress={() => router.back()} className="my-12">
      ← Terug naar overzicht
    </Button>
  );
}
