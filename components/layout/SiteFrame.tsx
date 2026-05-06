"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Admin route'larda site Header/Footer/Floats render etmemek icin wrapper.
 * Client component cunku usePathname kullaniyor — root layout'un statik
 * SSG'sine zarar vermez (bu bilesen sadece interactive bir hook ile path
 * kontrolu yapiyor, body cache'lenir).
 */
export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/c1907d") ?? false;
  if (isAdmin) return null;
  return <>{children}</>;
}
