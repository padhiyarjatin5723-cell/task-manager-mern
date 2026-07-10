import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    dueDate: {
      type: Date,
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending",
    },

    category: {
      type: String,
      enum: ["Work", "Study", "Personal"],
      default: "Work",
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      default: null,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

taskSchema.virtual("isOverdue").get(function () {
  return (
    this.status !== "Completed" &&
    this.dueDate &&
    new Date(this.dueDate) < new Date()
  );
});

export default mongoose.models.Task ||
  mongoose.model("Task", taskSchema);