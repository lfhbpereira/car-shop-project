import { expect } from 'chai';
import { Model } from 'mongoose';
import request from 'supertest';
import sinon from 'sinon';

import { motorcycleInput, motorcycleOutput, motorcyclesOutput } from './mocks/MotorcycleMock';
import app from '../../src/app';

describe('Test /motorcycles', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('POST with create', function () {
    it('should create a new motorcycle', async function () {
      sinon.stub(Model, 'create').resolves(motorcycleOutput);

      const { status, body } = await request(app).post('/motorcycles').send(motorcycleInput);

      expect(status).to.equal(201);
      expect(body).to.deep.equal(motorcycleOutput);
    });
  });

  describe('GET with getAll', function () {
    it('should get all motorcycles', async function () {
      sinon.stub(Model, 'find').resolves(motorcyclesOutput);

      const { status, body } = await request(app).get('/motorcycles');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(motorcyclesOutput);
    });
  });

  describe('GET with getById', function () {
    it('should get a motorcycle by id', async function () {
      sinon.stub(Model, 'findOne').resolves(motorcycleOutput);
      
      const { status, body } = await request(app).get('/motorcycles/6413cefb88e2476dab1876c8');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(motorcycleOutput);
    });
  });

  describe('PUT with update', function () {
    it('should update a motorcycle by id', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleOutput);

      const { status, body } = await (
        request(app).put('/motorcycles/6413cefb88e2476dab1876c8').send(motorcycleInput)
      );

      expect(status).to.equal(200);
      expect(body).to.deep.equal(motorcycleOutput);
    });
  });
});
