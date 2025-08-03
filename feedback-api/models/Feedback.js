import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Feedback text is required'],
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
