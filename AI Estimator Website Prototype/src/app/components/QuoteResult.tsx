import { motion } from 'motion/react';
import { CheckCircle2, Clock, DollarSign, TrendingUp } from 'lucide-react';

interface QuoteResultProps {
  request: string;
  estimate: number;
  timeEstimate: string;
  confidence: number;
  onNewRequest: () => void;
}

export function QuoteResult({ request, estimate, timeEstimate, confidence, onNewRequest }: QuoteResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl"
    >
      <div className="flex flex-col gap-6 rounded-xl border border-border bg-card p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-5 text-primary" />
            <h2>Estimate Ready</h2>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1">
            <TrendingUp className="size-3.5 text-secondary-foreground" />
            <span className="text-sm text-secondary-foreground">{confidence}% confidence</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">Request</span>
          <p className="text-foreground">{request}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 rounded-lg bg-muted p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="size-4" />
              <span className="text-sm">Estimated Cost</span>
            </div>
            <div className="text-2xl text-foreground">${estimate.toLocaleString()}</div>
          </div>

          <div className="flex flex-col gap-2 rounded-lg bg-muted p-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4" />
              <span className="text-sm">Time Estimate</span>
            </div>
            <div className="text-2xl text-foreground">{timeEstimate}</div>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-lg border border-border bg-secondary/30 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">On-chain Reputation</span>
            <span className="text-sm text-foreground">ERC-8004 Verified</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Payment Method</span>
            <span className="text-sm text-foreground">x402 Protocol</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Quotes Generated</span>
            <span className="text-sm text-foreground">1,247</span>
          </div>
        </div>

        <button
          onClick={onNewRequest}
          className="rounded-lg border border-border bg-background px-6 py-3 text-foreground transition-colors hover:bg-accent"
        >
          New Request
        </button>
      </div>
    </motion.div>
  );
}
