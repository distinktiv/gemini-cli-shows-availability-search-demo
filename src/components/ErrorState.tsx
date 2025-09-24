import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription } from "./ui/alert";

interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Alert className="border-destructive/20 bg-destructive/5">
        <AlertCircle className="h-4 w-4 text-destructive" />
        <AlertDescription className="text-destructive">
          {message}
        </AlertDescription>
      </Alert>
      
      <div className="mt-4 text-center">
        <Button 
          onClick={onRetry}
          variant="outline"
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}