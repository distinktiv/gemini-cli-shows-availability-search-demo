import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { PlatformCard } from "./components/PlatformCard";
import { MediaArtwork } from "./components/MediaArtwork";
import { LoadingState } from "./components/LoadingState";
import { ErrorState } from "./components/ErrorState";
import { EmptyState } from "./components/EmptyState";
import { searchContent, MediaInfo } from "./utils/mockData";
import { MapPin } from "lucide-react";
import { Badge } from "./components/ui/badge";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mediaInfo, setMediaInfo] = useState<MediaInfo | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const results = await searchContent(searchQuery);
      setMediaInfo(results);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred",
      );
      setMediaInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    handleSearch();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
              📺
            </div>
            <h1 className="text-3xl font-bold text-foreground">
              Where to Watch
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Find where to stream your favorite TV shows and
            movies
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge
              variant="outline"
              className="flex items-center gap-1"
            >
              <MapPin className="h-3 w-3" />
              Canada
            </Badge>
          </div>
        </div>

        {/* Search */}
        <div className="mb-12">
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        </div>

        {/* Results */}
        <div className="mb-8">
          {isLoading && <LoadingState />}

          {error && (
            <ErrorState message={error} onRetry={handleRetry} />
          )}

          {!isLoading && !error && !mediaInfo && (
            <EmptyState
              hasSearched={hasSearched}
              searchQuery={searchQuery}
            />
          )}

          {!isLoading && !error && mediaInfo && (
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Media Artwork - Left Side */}
                <div className="lg:col-span-1">
                  <MediaArtwork media={mediaInfo} />
                </div>

                {/* Streaming Platforms - Right Side */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-medium text-foreground mb-2">
                        Available on{" "}
                        {mediaInfo.platforms.length} platform
                        {mediaInfo.platforms.length !== 1
                          ? "s"
                          : ""}
                      </h2>
                      <p className="text-muted-foreground">
                        Streaming options for "{mediaInfo.title}
                        " in Canada
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mediaInfo.platforms.map(
                        (platform, index) => (
                          <PlatformCard
                            key={`${platform.name}-${index}`}
                            platform={platform}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground mt-16 pt-8 border-t border-border/50">
          <p>
            Data provided by streaming platforms. Availability
            and pricing may vary.
          </p>
        </footer>
      </div>
    </div>
  );
}