import { Skeleton } from "./ui/skeleton";

export function LoadingState() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Media artwork skeleton */}
        <div className="lg:col-span-1">
          <div className="p-6 border border-border/50 rounded-lg bg-card space-y-4">
            <Skeleton className="aspect-[2/3] w-full max-w-sm mx-auto rounded-lg" />
            <div className="space-y-3">
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <div className="flex gap-3">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-12 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-12 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
              </div>
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>

        {/* Platform results skeleton */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-4 w-64" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-6 border border-border/50 rounded-lg bg-card space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                    </div>
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-12 rounded-full" />
                      <Skeleton className="h-6 w-10 rounded-full" />
                    </div>
                    <Skeleton className="h-8 w-16 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}