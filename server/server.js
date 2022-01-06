import express from 'express';
import devBundle from './devBundle.js'; // comment this line  when you are working in production mode

const app = express()

devBundle.compile(app); // comment this line when you are working in production mode

import path from 'path'

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

import template from './../template'
app.get('/', (req, res) => {
   res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, (err) =>{
 if (err) {
  console.log(err) 
 }
 console.info('Server started on port %s.', port)
})
