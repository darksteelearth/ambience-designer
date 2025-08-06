'use client'

import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 p-4">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        <p className="text-sm">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
