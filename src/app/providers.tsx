"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { ReactNode } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
