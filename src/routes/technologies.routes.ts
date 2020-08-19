import { Router } from 'express';
import { getRepository } from 'typeorm';

// MODELS
import Technology from '../models/Technologies';

// SERVICES
import CreateTechnologyService from '../services/technology/CreateTechnologyService';

// MIDDLEWARE
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const technologiesRouter = Router();

// Auth middleware
technologiesRouter.use(ensureAuthenticated);

technologiesRouter.get('/', async (request, response) => {
  const technologiesRepository = getRepository(Technology);
  const technologies = await technologiesRepository.find();

  return response.json(technologies);
});

technologiesRouter.post('/', async (request, response) => {
  const { name, type } = request.body;

  const createTechnologyService = new CreateTechnologyService();

  const technology = await createTechnologyService.execute({ name, type });

  return response.json(technology);
});

export default technologiesRouter;
