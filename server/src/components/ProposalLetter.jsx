import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProposalLetter({ sender, receiver }) {
    const [proposal, setProposal] = useState('Generating your proposal...');

    useEffect(() => {
        async function fetchProposal() {
            try {
                const response = await axios.post('/api/generate-proposal', {
                    sender,
                    receiver
                });
                setProposal(response.data.proposal);
            } catch (error) {
                console.error('Error generating proposal:', error);
                setProposal('Sorry, we could not generate a proposal at this time.');
            }
        }
        fetchProposal();
    }, [sender, receiver]);

    return (
        <div className="bg-white border-2 border-red-600 rounded-xl shadow-lg p-8 max-w-xl mx-auto">
            <p className="text-xl whitespace-pre-line">{proposal}</p>
            <p className="mt-6 text-right italic text-red-600">- {sender}</p>
        </div>
    );
}

export default ProposalLetter;