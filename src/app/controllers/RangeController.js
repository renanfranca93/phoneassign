import * as Yup from 'yup';
import Range from '../models/Range';

class RangeController {
  async index(req, res) {
    const ranges = await Range.findAll();
    return res.json(ranges);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      operator: Yup.number().required(),
      start: Yup.number().required(),
      end: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const rangeExists = await Range.findOne({
      where: { start: req.body.start },
    });

    if (rangeExists) {
      return res.status(400).json({ error: 'Range already exists.' });
    }

    const { id, operator, start, end } = await Range.create(req.body);

    return res.json({
      id,
      operator,
      start,
      end,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      operator: Yup.number().required(),
      start: Yup.number().required(),
      end: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { rangeId } = req.params;
    const { operator, start, end } = req.body;
    const range = await Range.findByPk(rangeId);

    if (start !== range.start) {
      const publisherExists = await Range.findOne({ where: { start } });

      if (publisherExists) {
        return res.status(400).json({ error: 'Range already exists.' });
      }
    }

    const { id } = await range.update(req.body);

    return res.json({
      id,
      operator,
      start,
      end,
    });
  }
}

export default new RangeController();
