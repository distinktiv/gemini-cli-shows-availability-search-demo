import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  isLoading: boolean;
  placeholder?: string;
}

export function SearchInput({ value, onChange, onSearch, isLoading, placeholder = "Search for TV shows and movies..." }: SearchInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const clearSearch = () => {
    onChange('');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          disabled={isLoading}
          className="pl-12 pr-12 h-14 text-lg bg-card border-border rounded-xl shadow-lg focus:shadow-xl transition-all duration-200"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            disabled={isLoading}
            className="absolute right-12 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button
          onClick={onSearch}
          disabled={isLoading || !value.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 px-6 rounded-lg"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
          ) : (
            "Search"
          )}
        </Button>
      </div>
    </div>
  );
}