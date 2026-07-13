import { motion } from 'motion/react';
import { Brain, Database, DollarSign, CheckCircle2 } from 'lucide-react';

interface ProcessingStep {
  label: string;
  icon: React.ReactNode;
  completed: boolean;
}

export function ProcessingView({ currentStep }: { currentStep: number }) {
  const steps: ProcessingStep[] = [
    { label: 'Analyzing request', icon: <Brain className="size-5" />, completed: currentStep > 0 },
    { label: 'Comparing historical data', icon: <Database className="size-5" />, completed: currentStep > 1 },
    { label: 'Calculating estimate', icon: <DollarSign className="size-5" />, completed: currentStep > 2 },
    { label: 'Finalizing quote', icon: <CheckCircle2 className="size-5" />, completed: currentStep > 3 },
  ];

  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 ${
              currentStep === index ? 'ring-2 ring-ring' : ''
            }`}
          >
            <div className={`${step.completed ? 'text-primary' : 'text-muted-foreground'}`}>
              {step.icon}
            </div>
            <span className={step.completed ? 'text-foreground' : 'text-muted-foreground'}>
              {step.label}
            </span>
            {currentStep === index && (
              <motion.div
                className="ml-auto size-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            )}
            {step.completed && (
              <CheckCircle2 className="ml-auto size-4 text-primary" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
