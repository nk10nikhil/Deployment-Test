import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
//     }
// );

// get a list of 5 jokes
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field.'
        },
        {
            id: 2,
            content: 'What do you call a fake noodle? An impasta.'
        },
        {
            id: 3,
            content: 'Why did the coffee file a police report? It got mugged.'
        },
        {
            id: 4,
            content: 'How does a penguin build its house? Igloos it together.'
        },
        {
            id: 5,
            content: 'Why did the math book look sad? Because it had too many problems.'
        }
    ];
    res.send(jokes);
    }
);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
);