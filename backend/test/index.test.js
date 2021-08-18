const app = require('../app.js');
const request = require('supertest');

test('GET /login/:email/:password', async () => {
    await request(app)
      .get('/login/1234@4567.com/password!')
      .expect(200);
});

test('POST /new-bullet', async () => {
  await request(app)
    .post('/new-bullet')
    .send( 
      {
        "user_id": 1,
        "date": "2021-08-17",
        "action": "this is an action",
        "impact": "impacted this",
        "result": "resulted in",
        "feedback": "this sucks"
      }
    )
    .expect(200);
});

test('GET /bullets/:user_id', async () => {
  await request(app)
    .get('/bullets/1')
    .expect(200);
});

test('GET /user/:user_id', async () => {
  await request(app)
    .get('/user/1')
    .expect(200);
});

test('POST /new-user', async () => {
  await request(app)
    .post('/new-user')
    .send( 
      {
      "first_name": "user2",
      "last_name": "last",
      "email": "user2.last@email.com",
      "password": "pass",
      "my_super": 1,
      "is_super": false
      }
    )
    .expect(200, 'You added user2');
});

test('PUT /edit/bullet/:bullet_id', async () => {
  await request(app)
    .put('/edit/bullet/1')
    .send( 
      {
      "result": "resulted in",
      }
    )
    .expect(200);
});
test('PUT /edit/user/:user_id', async () => {
  await request(app)
    .put('/edit/user/1')
    .send( 
      {
      "first_name": "adam",
      }
    )
    .expect(200);
});

test('GET /my-subordinates/:user_id', async () => {
  await request(app)
    .get('/my-subordinates/1')
    .expect(200)
})

// test('DELETE /delete-bullet/:bullet_id', async () => {
//   const last_bullet = await request(app)
//     .get('/all-bullets')

//   const consolefunc = async () => {
//     console.log(last_bullet.body)
//   }
//   consolefunc();

//   await request(app)
//     .delete(`/delete-bullet/${last_bullet}`)
//     .expect(200)
// })

// test('DELETE /delete-user/:user_id', async () => {
//  const last_user = await request(app)
//     .get('/all-users')
//     .then(data => data[data.length-1].user_id)

//     await request(app)
//     .delete(`/delete-user/${last_user}`)
//     .expect(200)
// })



// test('GET /books', async () => {
//   const response = await request(app)
//     .get('/books')
//     .expect(200);

//   expect(response.body).toHaveLength(4);
// });
