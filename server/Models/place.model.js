// import mongoose from "mongoose";

// export const PlaceSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String },
//   location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
//   category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
//   tags: { type: [String] },
//   // image_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PlaceImage' }], // Referenced images
//   pictures:{type:[String]},
//   video: { type: String },
//   latitude: { type: Number },
//   longitude: { type: Number },
//   contact_info: { type: Object },
//   opening_hours: { type: Object },
// }, { timestamps: true });

// const Place = mongoose.model('Place',PlaceSchema);
// export default Place;



import mongoose from "mongoose";
import { required } from "react-admin";

export const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  image_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PlaceImage'},
  tags: { type: [String] },
  video: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  contact_info: { type: Object },
  opening_hours: { type: Object },
}, { timestamps: true });

const Place = mongoose.model('Place',PlaceSchema);
export default Place;



