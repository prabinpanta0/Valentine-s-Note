const express = require('express');
const OpenAI = require('openai');
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Endpoint to generate a proposal letter
router.post('/generate-proposal', async (req, res) => {
    const { sender, receiver } = req.body;

    if (!sender || !receiver) {
        return res.status(400).json({ error: 'Sender and receiver names are required.' });
    }

    const fPrompt = `Craft a sincere and thoughtful one sentence proposal from ${sender} to ${receiver}, keeping it natural and free from overly sentimental or clichéd language. Do not include any introductory phrases or extra text and names.`;
    const fobittenWords = `Marry, wedding, love, forever, always, together, soulmate, partner, husband, wife, spouse, engagement, proposal, marry me, be mine, be my, I love you, I want you, I need you, I can't live without you, I can't imagine my life without you, I can't imagine my life`;
    const fobittenWordsArray = fobittenWords.split(',').map(word => word.trim());
    const prompt = fPrompt + ` Avoid using the following words: ${fobittenWordsArray.join(', ')}.`;

    try {
        const completion = await openai.chat.completions.create({
            model: "writer/palmyra-creative-122b",
            messages: [{ "role": "user", "content": prompt }],
            temperature: 0.5,
            max_tokens: 1024,
        });

        const proposal = completion.choices[0]?.message?.content || 'No proposal generated.';
        res.json({ proposal });
    } catch (error) {
        console.error('Error generating proposal:', error);
        res.status(500).json({ error: 'Failed to generate proposal.' });
    }
});

module.exports = router;