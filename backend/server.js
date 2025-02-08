import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.send('Server is ready');
//     }
// );

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Scarecrow Award',
            content: 'Why did the scarecrow win an award? Because he was outstanding in his field.'
        },
        {
            id: 2,
            title: 'Fake Noodle',
            content: 'What do you call a fake noodle? An impasta.'
        },
        {
            id: 3,
            title: 'Coffee Mugged',
            content: 'Why did the coffee file a police report? It got mugged.'
        },
        {
            id: 4,
            title: 'Penguin House',
            content: 'How does a penguin build its house? Igloos it together.'
        },
        {
            id: 5,
            title: 'Sad Math Book',
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
