import * as Yup from 'yup';
import Assignment from '../models/Assignment';

class AssignmentController {
  async index(req, res) {
    const assignments = await Assignment.findAll();
    return res.json(assignments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      operator: Yup.number().required(),
      publisher_id: Yup.number().required(),
      start: Yup.number().required(),
      end: Yup.number().required(),
      active: Yup.boolean(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const assignmentExists = await Assignment.findOne({
      where: { start: req.body.start },
    });

    if (assignmentExists) {
      return res.status(400).json({ error: 'Assignment already exists.' });
    }

    const {
      id,
      publisher_id,
      operator,
      start,
      end,
      active,
    } = await Assignment.create(req.body);

    return res.json({
      id,
      publisher_id,
      operator,
      start,
      end,
      active,
    });
  }

  async update(req, res) {
    const { assignmentId } = req.params;

    const assignment = await Assignment.findByPk(assignmentId);

    const updated = await assignment.update(req.body);

    return res.json(updated);
  }
}

export default new AssignmentController();
