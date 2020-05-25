import * as Yup from 'yup';
import Publisher from '../models/Publisher';

class PublisherController {
  async index(req, res) {
    const publishers = await Publisher.findAll();
    return res.json(publishers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const publisherExists = await Publisher.findOne({
      where: { name: req.body.name },
    });

    if (publisherExists) {
      return res.status(400).json({ error: 'Publisher already exists.' });
    }

    const { id, name } = await Publisher.create(req.body);

    return res.json({
      id,
      name,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { publisherId } = req.params;
    const { name } = req.body;
    const publisher = await Publisher.findByPk(publisherId);

    if (name !== publisher.name) {
      const publisherExists = await Publisher.findOne({ where: { name } });

      if (publisherExists) {
        return res.status(400).json({ error: 'Publisher already exists.' });
      }
    }

    const { id } = await publisher.update(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new PublisherController();
