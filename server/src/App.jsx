import React from 'react';
import ProposalLetter from './components/ProposalLetter';

function App() {
  // Get names from URL parameters
  const params = new URLSearchParams(window.location.search);
  const sender = params.get('sender') || 'Beloved';
  const receiver = params.get('receiver') || 'You';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-red-600 text-center">Special Proposal Letter</h1>
      <ProposalLetter sender={sender} receiver={receiver} />
    </div>
  );
}

export default App;