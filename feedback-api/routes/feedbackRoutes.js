import express from 'express';
import Feedback from '../models/Feedback.js';

const router = express.Router();

// ✅ GET all feedback
router.get('/', async (req, res) => {
  try {
    const feedback = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching feedback' });
  }
});

// ✅ POST new feedback
router.post('/', async (req, res) => {
  const { text, rating } = req.body;

  try {
    const newFeedback = new Feedback({ text, rating });
    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: 'Invalid feedback data' });
  }
});

// ✅ DELETE feedback by ID
router.delete('/:id', async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ message: 'Feedback not found' });
  }
});

// ✅ PUT (Update) feedback
router.put('/:id', async (req, res) => {
  const { text, rating } = req.body;
  try {
    const updated = await Feedback.findByIdAndUpdate(
      req.params.id,
      { text, rating },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Update failed' });
  }
});

export default router;
