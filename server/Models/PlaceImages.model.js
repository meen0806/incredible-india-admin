  // import mongoose from "mongoose";
  // export const PlaceImageSchema = new mongoose.Schema({
  //   place_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true },
  //   title: { type: String, },
  //   activate: { type: Boolean, default: false },
  //   pictures: { type: [String]}, 
  // }, { timestamps: true });

  // const PlaceImage = mongoose.model('PlaceImage', PlaceImageSchema);
  // export default PlaceImage;
  
import mongoose from "mongoose";
import { required } from "react-admin";
export const PlaceImageSchema = new mongoose.Schema({
  place_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Place', required: true }, // Reference to Place
  pictures: { type: [String], required:true },
}, { timestamps: true });

const PlaceImage = mongoose.model('PlaceImage', PlaceImageSchema);
export default PlaceImage;
