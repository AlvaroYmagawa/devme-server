import { getRepository } from 'typeorm';

// CUSTOM IMPORTS
import Technology from '../../models/Technologies';
import AppError from '../../errors/AppError';

interface Request {
  name: string;
  type: string;
}

class CreateTechnologyService {
  async execute({ name, type }: Request): Promise<Technology> {
    const technologyRepository = getRepository(Technology);

    const isUSerExists = await technologyRepository.findOne({
      where: { type },
    });

    if (isUSerExists) {
      throw new AppError('The Technology type already exists.', 400);
    }

    const technology = technologyRepository.create({
      name,
      type,
    });

    await technologyRepository.save(technology);

    return technology;
  }
}

export default CreateTechnologyService;
