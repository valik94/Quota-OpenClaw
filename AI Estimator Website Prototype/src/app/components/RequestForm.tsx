import { useState } from "react";
import { Sparkles } from "lucide-react";

interface RequestFormProps {
  onSubmit: (request: string) => void;
  isProcessing: boolean;
}

export function RequestForm({ onSubmit, isProcessing }: RequestFormProps) {
  const [request, setRequest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim() && !isProcessing) {
      onSubmit(request);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="flex flex-col gap-3">
        <label htmlFor="request" className="text-muted-foreground">
          Describe your service request
        </label>
        <textarea
          id="request"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="e.g., Need to replace broken water heater in 2-story house, approximately 50 gallons, gas powered..."
          className="min-h-[160px] w-full rounded-lg bg-input-background px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
          disabled={isProcessing}
        />
        <button
          type="submit"
          disabled={!request.trim() || isProcessing}
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-opacity disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
        >
          <Sparkles className="size-4" />
          {isProcessing ? "Processing..." : "Get Estimate"}
        </button>
      </div>
    </form>
  );
}
