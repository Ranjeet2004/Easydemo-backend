import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    city: String,

    qualification: String,

    courseId: String,

    courseName: String,

    duration: String,

    price: Number,

    batch: String,

    paymentType: String,

    laptop: String,

    experience: String,

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    enrollmentStatus: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Enrollment",
  enrollmentSchema
);