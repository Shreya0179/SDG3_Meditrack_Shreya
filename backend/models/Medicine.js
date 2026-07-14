import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    medicineName: {
      type: String,
      required: true,
    },

    dosage: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    notes: {
      type: String,
      default: "",
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;