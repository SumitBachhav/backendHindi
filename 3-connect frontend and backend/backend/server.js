import express from 'express'

const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

app.get('/home', (req, res) => {
    res.send('this is home page')
})

// array of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'joke 1',
            content: 'joke 1 content'
        },
        {
            id: 2,
            title: 'joke 2',
            content: 'joke 2 content'
        },
        {
            id: 3,
            title: 'joke 3',
            content: 'joke 3 content'
        },
        {
            id: 4,
            title: 'joke 4',
            content: 'joke 4 content'
        },
        {
            id: 5,
            title: 'joke 5',
            content: 'joke 5 content'
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at ${port}`)
})

