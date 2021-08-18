const request = require('supertest');
const express = require('express');
const app = require('../app.js')



describe('the /all_users path', () => {
  it('returns all users to GET request senders', async () => {
    const response = await request(app).get('/all_users');
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns gets user profile information for all users', async () => {
    const response = await request(app).get('/all_users');
    const expected = (response.body.length);
    expect(expected).toBeGreaterThan(0);
  });
});

describe('the /all_bullets path', () => {
  it('returns all bullets to GET request senders', async () => {
    const response = await request(app).get('/all_bullets');
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns gets bullet information for all bullets', async () => {
    const response = await request(app).get('/all_bullets');
    const expected = (response.body.length);
    expect(expected).toBeGreaterThan(0);
  });
});

describe('the /bullets/:user_id path', () => {
  it('returns all bullets at specified to GET request senders', async () => {
    const response = await request(app).get('/bullets/1');
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns gets all bullets from speficied user', async () => {
    const response = await request(app).get('/bullets/1');
    const expected = (response.body.length);
    expect(expected).toBeGreaterThan(0);
  });

  it('returns an error if no bullets found', async () => {
    const response = await request(app).get('/bullets/0');
    const expected = (response.status);
    expect(expected).toEqual(404);
  });
  it('returns an error if given invalid id', async () => {
    const response = await request(app).get('/bullets/notauser');
    const expected = (response.status);
    expect(expected).toEqual(400);
  });
});

describe('the /user/:user_id path', () => {
  it('returns user profile at specified user id to GET request senders', async () => {
    const response = await request(app).get('/user/1');
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns profile information from speficied user', async () => {
    const response = await request(app).get('/user/1');
    const expected = (response.body.length);
    expect(expected).toEqual(1);
  });

  it('returns an error if no user found', async () => {
    const response = await request(app).get('/user/0');
    const expected = (response.status);
    expect(expected).toEqual(404);
  });

  it('returns an error if given invalid id', async () => {
    const response = await request(app).get('/user/notauser');
    const expected = (response.status);
    expect(expected).toEqual(400);
  });
});

describe('the /my-subordinates/:user_id path', () => {
  it('returns subordinates at specified user id to GET request senders', async () => {
    const response = await request(app).get('/my-subordinates/1');
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns subordinates profile information from speficied users', async () => {
    const response = await request(app).get('/my-subordinates/1');
    const expected = (response.body.length);
    expect(expected).toBeGreaterThan(0);
  });

  it('returns an error if no subordinates found', async () => {
    const response = await request(app).get('/my-subordinates/0');
    const expected = (response.status);
    expect(expected).toEqual(404);
  });

  it('returns an error if given invalid id', async () => {
    const response = await request(app).get('/my-subordinates/notauser');
    const expected = (response.status);
    expect(expected).toEqual(400);
  });
});

describe('the /new-user path', () => {
  const goodUser = {
    "first_name": "good",
    "last_name": "test",
    "email" : "good.test@email.com",
    "password": "testpass",
    "my_super": 1,
    "is_super": false
  }
  const badUser = {
    "firt_name": "bad",
    "last_name": "test",
    "emai" : "bad.test@email.com",
    "password": "testfail",
    "my_supr": 1,
    "i_super": false
  }
  it('return 200 if information posted', async () => {
    const response = await request(app).post('/new-user').send(goodUser);
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns user profile with succesful post', async () => {
    const response = await request(app).post('/new-user').send(goodUser);
    const expected = (response.body);
    expect(expected).toBeTruthy();
  });

  it('returns an error if no subordinates found', async () => {
    const response = await request(app).post('/new-user').send(badUser);
    const expected = (response.body.name)
    expect(expected).toEqual('error');
  });
});

describe('the /new-bullet path', () => {
  const goodBullet = {
    "user_id": 3,
    "date": "2021-08-17",
    "action": "this is an action",
    "impact": "impacted this",
    "result": "resulted in",
    "feedback": "this sucks"
  }
  const badBullet = {
    "uer_id": 3,
    "date": "2021-08-17",
    "actio": "this is an action",
    "impact": "impacted this",
    "reslt": "resulted in",
    "fedbak": "this sucks"
  }
  it('return 200 if information posted', async () => {
    const response = await request(app).post('/new-user').send(goodBullet);
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

  it('returns bullet info with succesful post', async () => {
    const response = await request(app).post('/new-bullet').send(goodBullet);
    const expected = (response.body);
    expect(expected).toBeTruthy();
  });

  it('returns an error if no bullet posted', async () => {
    const response = await request(app).post('/new-bullet').send(badBullet);
    const expected = (response.body.name)
    expect(expected).toEqual('error');
  });
});

describe('the /edit/bullet path', () => {
  const goodBulletEdit = {
    "feedback": "this has been edited"
  }
  const badBulletEdit = {
    "reslt": "resulted in"
  }
  it('returns 200 if information posted', async () => {
    const response = await request(app).put('/edit/bullet/2').send(goodBulletEdit);
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });

});

describe('the /edit/user path', () => {
  const goodUserEdit = {
    "first_name": "this has been edited"
  }
  const badUserEdit = {
    "fist_name": "this won't show up"
  }
  it('returns 200 if information posted', async () => {
    const response = await request(app).put('/edit/user/1').send(goodUserEdit);
    const expected = (response.statusCode);
    expect(expected).toEqual(200);
  });
});

