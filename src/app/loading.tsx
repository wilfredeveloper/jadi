import React from 'react';
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Skeleton className="h-6 w-1/2 mb-4" />
      <Skeleton className="h-4 w-3/4 mb-8" />
      <div className="flex space-x-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
};

export default Loading;