import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Calendar, Star, Tv, Film } from "lucide-react";
import { MediaInfo } from "../utils/mockData";

interface MediaArtworkProps {
  media: MediaInfo;
}

export function MediaArtwork({ media }: MediaArtworkProps) {
  return (
    <Card className="p-6 bg-card border border-border/50">
      <div className="space-y-4">
        {/* Poster */}
        <div className="aspect-[2/3] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-muted">
          <img 
            src={media.poster} 
            alt={`${media.title} poster`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden w-full h-full flex items-center justify-center bg-muted">
            {media.type === 'movie' ? (
              <Film className="h-16 w-16 text-muted-foreground" />
            ) : (
              <Tv className="h-16 w-16 text-muted-foreground" />
            )}
          </div>
        </div>

        {/* Media Info */}
        <div className="space-y-3">
          <div>
            <h2 className="text-xl font-medium text-card-foreground mb-1">{media.title}</h2>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {media.year}
              </div>
              <div className="flex items-center gap-1">
                {media.type === 'movie' ? <Film className="h-3 w-3" /> : <Tv className="h-3 w-3" />}
                {media.type === 'movie' ? 'Movie' : 'TV Series'}
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {media.rating}
            </Badge>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-muted-foreground">8.5/10</span>
            </div>
          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2">
            {media.genre.map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {media.description}
          </p>

          {/* Platform Count */}
          <div className="pt-2 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              Available on <span className="text-foreground font-medium">{media.platforms.length}</span> platform{media.platforms.length !== 1 ? 's' : ''} in Canada
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}