import { Search, Tv } from "lucide-react";

interface EmptyStateProps {
  hasSearched: boolean;
  searchQuery?: string;
}

export function EmptyState({ hasSearched, searchQuery }: EmptyStateProps) {
  if (!hasSearched) {
    return (
      <div className="text-center py-16 max-w-md mx-auto">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <Tv className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          Find where to watch
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Search for any TV show or movie to see which streaming platforms have it available in Canada.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center py-16 max-w-md mx-auto">
      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
        <Search className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium text-foreground mb-2">
        No results found
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        We couldn't find "{searchQuery}" on any streaming platforms in Canada. 
        Try searching for a different title or check the spelling.
      </p>
    </div>
  );
}