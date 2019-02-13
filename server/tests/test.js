/* eslint-disable */

import chai from 'chai';
import  chaiHttp from'chai-http';
import  app from '../../app';

const should = chai.should();
import Party from '../model/party';
import Office from '../model/office';


chai.use(chaiHttp);

const newParty = {
  "name": "partyA",
  "hqAddress": "Kigali",
  "logoUrl": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjl",
};
const newOffice = {
  "type": "Legislative",
  "name": "Kigali",
};

const newName ={
  "name": "Butare",
};

describe('POST /parties', () => {
  it('It should add new party and return an object with a status code and a new part created', (done) => {
    chai.request(app).post('/api/v1/parties/').send(newParty).end((err, res) => {
      res.should.have.status(201);
      res.body.data.should.all.have.property('name', newParty.name);
      res.body.data.should.all.have.property('hqAddress', newParty.hqAddress);
      res.body.data.should.all.have.property('logoUrl', newParty.logoUrl);
      res.body.should.be.an('object');
      done();
    });
  });	
});

describe('GET /parties/<party-id>', () => {
  it('It should get party by id ', (done) => {
    chai.request(app).get('/api/v1/parties/1').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      done();
    });
  });
  it('Once provided wrong ID, It should say that it is invalid', (done) => {
    chai.request(app).get('/api/v1/parties/125x').end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an('object');
      done();
    });
  });	
});

describe('/GET Parties', () => {
  it('It should return all parties', (done) => {
    chai.request(app).get('/api/v1/parties').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      done();
    });
  });
});

describe('PATCH /parties/<party-id>/name', () => {
  it('It should update only the name and return object with updated data', (done) => {
    chai.request(app).patch('/api/v1/parties/1/name').send(newName).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      res.body.should.have.property('data').be.a('array');
      done();
    });
  });
});

describe('DELETE /parties/<party-id>', () => {
  it('It should delete data and return deleted data', (done) => {
    chai.request(app).delete('/api/v1/parties/1').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      done();
    });
  });
});


describe('POST /offices', () => {
  it('It should create new office and return an object with a status code and a new part created', (done) => {
    chai.request(app).post('/api/v1/offices').send(newOffice).end((err, res) => {
      res.should.have.status(201);
      res.body.should.be.an('object');
      done();
    });
  });	
});

describe('GET /offices', () => {
  it('It should return all offices', (done) => {
    chai.request(app).get('/api/v1/offices').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      done();
    });
  });
});

describe('GET /offices/<office-id>', () => {
  it('It should fetch office by id ', (done) => {
    chai.request(app).get('/api/v1/offices/1').end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.an('object');
      done();
    });
  });
  it('Once provided wrong ID, It should say that it is invalid', (done) => {
    chai.request(app).get('/api/v1/offices/dghds4').end((err, res) => {
      res.should.have.status(404);
      res.body.should.be.an('object');
      done();
    });
  });	
});