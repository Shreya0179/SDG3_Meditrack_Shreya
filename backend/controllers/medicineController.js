import Medicine from "../models/Medicine.js";
import jwt from "jsonwebtoken";

const getUserId = (req) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return null;

  const decoded = jwt.verify(token, "meditracksecret");
  return decoded.id;
};

export const addMedicine = async (req, res) => {
  try {
    const userId = getUserId(req);

    const medicine = await Medicine.create({
      ...req.body,
      userId,
    });

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMedicines = async (req, res) => {
  try {
    const userId = getUserId(req);

    const medicines = await Medicine.find({ userId });

    res.status(200).json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Medicine Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};