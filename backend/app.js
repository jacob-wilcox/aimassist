const express = require('express');
const app = express();
const {development} = require('./knexfile.js');
const knex = require('knex')(development);
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//get all users
app.get('/all_users', (req, res) => {
  knex
    .select('*')
    .from('users')
    .then((data) => {
      return res.status(200).send(data)
    })
})

//get all bullets
app.get('/all_bullets', (req, res) => {
  knex
    .select('*')
    .from('bullets')
    .then((data) => {
      return res.status(200).send(data)
    })
})

// get user profile if authenticates WARNING: NOT SECURE OR CORRECT WAY TO AUTHENTICATE USER
app.get('/login/:email/:password', (req, res) => {
  let email = req.params.email
  let password = req.params.password
  knex
    .select('*')
    .from('users')
    .where('email', email)
    .where('password', password)
    .then((data) => {
      if(data.length === 0){
        return res.status(404).send('This user/password is incorrect')
      } else {
        res.status(200).send(data)
      }
    })
})

// get users bullets 
app.get('/bullets/:user_id', (req, res) => {
  let user = req.params.user_id
  if (isNaN(user)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex
      .select('*')
      .from('bullets')
      .where('user_id', user)
      .then((data) => {
        if (data.length === 0){
          return res.status(404).send('404: This user has no bullets')
        } else {
          return res.status(200).send(data)
        }
      })
  }
})

//get user profile information
app.get('/user/:user_id', (req, res) => {
  let user = req.params.user_id
  if (isNaN(user)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex
      .select('*')
      .from('users')
      .where('user_id', user)
      .then((data) => {
        if (data.length === 0){
          return res.status(404).send('404: This user does not exist')
        } else {
        return res.status(200).send(data)
        }
      })
  }
})

//gets users subordinates
app.get('/my-subordinates/:user_id', (req, res) => {
  let user = req.params.user_id
  if (isNaN(user)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex
      .select('*')
      .from('users')
      .where('my_super', user)
      .then((data) => {
        if (data.length === 0) {
          return res.status(404).send('404: This users have no subordinates')
        } else {
          return res.status(200).send(data)
        }
      })
  }
})

//post new user
app.post('/new-user', (req, res) =>  {
  let body = req.body
  knex('users')
    .insert(body)
    .then(() => {
     return res.status(200).send(`You added ${body.first_name}`)
    })
    .catch((err) => res.send(err))
});

//post new bullet
app.post('/new-bullet', (req, res) =>  {
  let body = req.body
  knex('bullets')
    .insert(body)
    .then(() => {
      return res.status(200).send(`You added ${body.action}`)
    })
    .catch((err) => res.send(err))
});

// edit a bullet
app.put('/edit/bullet/:bullet_id', (req, res) =>  {
  let bullet = req.params.bullet_id
  let body = req.body
  if (isNaN(bullet)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex
      .select('*')
      .from('bullets')
      .where('bullet_id', bullet)
      .update(body)
      .then(() => {
        return res.status(200).send(`You updated ${bullet} with data`)
      })
      .catch((err) => res.status(400).send(err))
  }
});

//edit user profile
app.put('/edit/user/:user_id', (req, res) =>  {
  let user = req.params.user_id
  let body = req.body
  if (isNaN(user)){
    res.status(400).send('400: Invalid user id')
  } else {
  knex
    .select('*')
    .from('users')
    .where('user_id', user)
    .update(body)
    .then(() => {
    return res.status(200).send(`You updated ${user} with data`)
    })
    .catch((err) => res.status(400).send(err))
  }
});

// delete user
app.delete('/delete-user/:user_id', (req, res) => {
  let user = req.params.user_id
  if (isNaN(user)) {
    res.status(400).send('400: Invalid user id')
  } else {
    knex('users')
      .where('user_id', user)
      .del()
      .then(() => console.log('Deleted User'))
      .catch((err) => res.send(err))
    knex('bullets')
      .where('user_id', user)
      .del()
      .then(() => {
        return res.status(200).send(`You deleted the user with id: ${user}`)
      })
      .catch((err) => res.send(err))   
  }
})

//delete bullets
app.delete('/delete-bullet/:bullet_id', (req, res) => {
  let bullet = req.params.bullet_id
  if (isNaN(bullet)) {
    res.status(400).send('400: Invalid bullet id')
  } else {
    knex('bullets').where('bullet_id', bullet)
      .del()
      .then(() => {
        return res.status(200).send(`You deleted the bullet with id: ${bullet}`);
      })
      .catch((err) => res.send(err))
  }
})

module.exports = app;
