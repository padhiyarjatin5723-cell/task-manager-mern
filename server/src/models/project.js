import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "#7C3AED",
    },
  },
  {
    timestamps: true,
  }
);

export default
  mongoose.models.Project ||
  mongoose.model(
    "Project",
    projectSchema
  );