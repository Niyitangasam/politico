/* eslint-disable */

import chai from 'chai';
import  chaiHttp from'chai-http';
import  app from '../app';

import Party from '../model/party';
import Office from '../model/office';


chai.use(chaiHttp);

const { expect } = chai;


const newParty = {
  "name": "partyA",
  "hqAddress": "Kigali",
  "logoUrl": "https://www.google.com/url?sa=i&sourcd=2ahUKEwjl",
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
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });	
});

describe('GET /parties/<party-id>', () => {
  it('It should get party by id ', (done) => {
    chai.request(app).get('/api/v1/parties/1').end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
  });
  it('Once provided wrong ID, It should say that it is invalid', (done) => {
    chai.request(app).get('/api/v1/parties/125x').end((err, res) => {
      expect(res).to.have.status(500);
      done();
    });
  });	
});

describe('/GET Parties', () => {
  it('It should return all parties', (done) => {
    chai.request(app).get('/api/v1/parties').end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });
});

describe('PATCH /parties/<party-id>/name', () => {
  it('It should update only the name and return object with updated data', (done) => {
    chai.request(app).patch('/api/v1/parties/1/name').send(newName).end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
  });
});

describe('DELETE /parties/<party-id>', () => {
  it('It should delete data and return deleted data', (done) => {
    chai.request(app).delete('/api/v1/parties/1').end((err, res) => {
     expect(res).to.have.status(200);
      done();
    });
  });
});


describe('POST /offices', () => {
  it('It should create new office and return an object with a status code and a new part created', (done) => {
    chai.request(app).post('/api/v1/offices').send(newOffice).end((err, res) => {
      expect(res).to.have.status(201);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });	
});

describe('GET /offices', () => {
  it('It should return all offices', (done) => {
    chai.request(app).get('/api/v1/offices').end((err, res) => {
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('data').and.to.be.an('array');
      done();
    });
  });
});

describe('GET /offices/<office-id>', () => {
  it('It should fetch office by id ', (done) => {
    chai.request(app).get('/api/v1/offices/1').end((err, res) => {
      expect(res).to.have.status(200);
      done();
    });
  });
  it('Once provided wrong ID, It should say that it is invalid', (done) => {
    chai.request(app).get('/api/v1/offices/dghds4').end((err, res) => {
      expect(res).to.have.status(500);
      done();
    });
  });	
});
