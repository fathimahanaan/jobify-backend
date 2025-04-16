import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"], //kinda text box in front end
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"], //kinda text box in front end
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("job", JobSchema);
