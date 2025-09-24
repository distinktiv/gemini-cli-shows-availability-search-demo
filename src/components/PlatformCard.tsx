import { ExternalLink, Crown, Monitor, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export interface StreamingPlatform {
  name: string;
  logo: string;
  link: string;
  price: string;
  quality: string[];
  availability: 'subscription' | 'rental' | 'purchase' | 'free';
  region: string;
}

interface PlatformCardProps {
  platform: StreamingPlatform;
}

export function PlatformCard({ platform }: PlatformCardProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'subscription':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rental':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'purchase':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'free':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getQualityIcon = (quality: string) => {
    switch (quality) {
      case '4K':
        return <Crown className="h-3 w-3" />;
      case 'HD':
        return <Monitor className="h-3 w-3" />;
      case 'HDR':
        return <Zap className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-200 border border-border/50 bg-card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              src={platform.logo} 
              alt={`${platform.name} logo`} 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-xs font-medium text-muted-foreground text-center leading-tight">
              {platform.name.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-card-foreground">{platform.name}</h3>
            <p className="text-sm text-muted-foreground">{platform.price}</p>
          </div>
        </div>
        <Badge 
          variant="outline" 
          className={getAvailabilityColor(platform.availability)}
        >
          {platform.availability}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {platform.quality.map((quality) => (
            <Badge 
              key={quality} 
              variant="secondary" 
              className="text-xs flex items-center gap-1"
            >
              {getQualityIcon(quality)}
              {quality}
            </Badge>
          ))}
        </div>
        
        <Button 
          size="sm" 
          variant="outline"
          className="text-xs"
          onClick={() => window.open(platform.link, '_blank')}
        >
          <ExternalLink className="h-3 w-3 mr-1" />
          Watch
        </Button>
      </div>
    </Card>
  );
}