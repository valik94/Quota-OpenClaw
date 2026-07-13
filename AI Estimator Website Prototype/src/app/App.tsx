import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { RequestForm } from './components/RequestForm';
import { ProcessingView } from './components/ProcessingView';
import { QuoteResult } from './components/QuoteResult';

type AppState = 'input' | 'processing' | 'result';

export default function App() {
  const [state, setState] = useState<AppState>('input');
  const [request, setRequest] = useState('');
  const [processingStep, setProcessingStep] = useState(0);
  const [quoteData, setQuoteData] = useState({
    estimate: 0,
    timeEstimate: '',
    confidence: 0,
  });

  const handleSubmitRequest = (userRequest: string) => {
    setRequest(userRequest);
    setState('processing');
    setProcessingStep(0);
  };

  const handleNewRequest = () => {
    setState('input');
    setRequest('');
    setProcessingStep(0);
  };

  useEffect(() => {
    if (state === 'processing') {
      const stepInterval = setInterval(() => {
        setProcessingStep((prev) => {
          if (prev < 3) {
            return prev + 1;
          } else {
            clearInterval(stepInterval);
            setTimeout(() => {
              // Generate mock quote data
              setQuoteData({
                estimate: Math.floor(Math.random() * 3000) + 500,
                timeEstimate: `${Math.floor(Math.random() * 4) + 1}-${Math.floor(Math.random() * 3) + 3} days`,
                confidence: Math.floor(Math.random() * 15) + 85,
              });
              setState('result');
            }, 500);
            return prev;
          }
        });
      }, 800);

      return () => clearInterval(stepInterval);
    }
  }, [state]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-12">
        {state === 'input' && (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <h2>Hi there, I'm Quota</h2>
              <p className="text-muted-foreground max-w-md">
                Your reliable agent. Tell me about your project and I'll analyze it against thousands of similar jobs to give you an accurate quote.
              </p>
            </div>
            <RequestForm onSubmit={handleSubmitRequest} isProcessing={false} />
          </div>
        )}

        {state === 'processing' && (
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2>Analyzing your request</h2>
              <p className="text-muted-foreground">Quota is working on your estimate</p>
            </div>
            <ProcessingView currentStep={processingStep} />
          </div>
        )}

        {state === 'result' && (
          <QuoteResult
            request={request}
            estimate={quoteData.estimate}
            timeEstimate={quoteData.timeEstimate}
            confidence={quoteData.confidence}
            onNewRequest={handleNewRequest}
          />
        )}
      </main>
    </div>
  );
}