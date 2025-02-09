import React from 'react';
import ProposalLetter from './components/ProposalLetter';

function App() {
    const params = new URLSearchParams(window.location.search);
    const sender = params.get('sender') || 'Beloved';
    const receiver = params.get('receiver') || 'You';

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col items-center justify-center">
            <ProposalLetter sender={sender} receiver={receiver} />
        </div>
    );
}

export default App;
