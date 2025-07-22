const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const port = 7000

app.get('/',(req,res)=>{
    res.status(200).send('Healthy')
})

app.listen(port, () => console.log(`Api started on port: ${port}`))
