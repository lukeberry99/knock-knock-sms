'use strict'

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('I got you, boi\n')
    res.send('Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    console.log('oh shit son')
    console.log('noice')
})


// Listen on port 3000
app.listen(3000, () => console.log('Server started on port 3000!'))
