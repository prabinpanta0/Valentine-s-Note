const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

// Added import for apiRoutes
const apiRoutes = require('./api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRoutes);

app.post('/api/proposal', async (req, res) => {
    const { sender, receiver } = req.body;
    const fPrompt = `Craft a sincere and thoughtful one sentence proposal from ${sender} to ${receiver}, keeping it natural and free from overly sentimental or clichéd language. Do not include any introductory phrases or extra text and names..`;
    const fobittenWords = `Marry, wedding, love, forever, always, together, soulmate, partner, husband, wife, spouse, engagement, proposal, marry me, be mine, be my, I love you, I want you, I need you, I can't live without you, I can't imagine my life without you, I can't imagine my life`;
    const fobittenWordsArray = fobittenWords.split(',').map(word => word.trim());
    const prompt = fPrompt + ` Avoid using the following words: ${fobittenWordsArray.join(', ')}.`;



    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            baseURL: 'https://integrate.api.nvidia.com/v1',
            dangerouslyAllowBrowser: false
        });

        const completion = await openai.chat.completions.create({
            model: "writer/palmyra-creative-122b",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.5,
            top_p: 1,
            max_tokens: 1024
        });

        const proposal = completion.choices[0].message.content;
        res.json({ proposal });
    } catch (error) {
        console.error('Error generating proposal:', error);
        res.status(500).json({ proposal: 'Sorry, we could not generate a proposal at this time.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});