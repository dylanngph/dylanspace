"use client";

import { Fragment, ReactNode } from "react";
import { useHydrated } from "@/lib/hooks/useHydrated";

type Props = {
  children(): ReactNode;
  fallback?: ReactNode;
};

export function ClientOnlyWrapper({ children, fallback = null }: Props) {
  return useHydrated() ? (
    <Fragment>{children()}</Fragment>
  ) : (
    <Fragment>{fallback}</Fragment>
  );
}

interface IClientOnly {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const Hydrated: React.FC<IClientOnly> = ({ children, fallback = null }) => {
  return (
    <ClientOnlyWrapper fallback={fallback}>{() => children}</ClientOnlyWrapper>
  );
};

export default Hydrated;
