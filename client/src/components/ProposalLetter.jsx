import React, { useEffect, useState } from 'react';

function ProposalLetter({ sender, receiver }) {
  const [proposal, setProposal] = useState('Generating your proposal...');

  useEffect(() => {
    async function fetchProposal() {
      try {
        const response = await fetch("http://localhost:5000/api/proposal", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sender, receiver })
        });
        const data = await response.json();
        setProposal(data.proposal);
      } catch (error) {
        console.error('Error fetching proposal:', error);
        setProposal('Sorry, we could not generate a proposal at this time.');
      }
    }
    fetchProposal();
  }, [sender, receiver]);

  return (
    <div className="white-box">
      <h1 className="fleurdeleah">Happy Valentine&apos;s Day</h1>
      <p className='recipient signature'>Dear {receiver},</p>
      <p className="proposal-text whitespace-pre-line mt-4">{proposal}</p>
      <p className="signature sender">- {sender}</p>
    </div>
  );
}

export default ProposalLetter;
