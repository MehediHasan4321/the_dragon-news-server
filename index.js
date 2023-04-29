const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())
const catagorys = require('./catagory.json')
const news = require('./news.json')

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})

app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    } else {
        const seclectCatagory = news.filter(n => n.category_id === id)
        res.send(seclectCatagory)
    }

})

app.get('/catagory', (req, res) => {
    res.send(catagorys)
})

app.get('/', (req, res) => {
    res.send('Hi,I am the dranon news server')
})

app.listen(port, () => {
    console.log(`Hi,I am dragon news and my port id ${port}`)
})