'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I got you, boi\n')
    console.log('oh shit son')
})


// Listen on port 3000
app.listen(process.env.port || 3000, () => console.log('Server started on port 3000!'))
