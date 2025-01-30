import mongoose from "mongoose";
import Place from "../Models/place.model.js";
import PlaceImage from "../Models/PlaceImages.model.js";



// export const addPalace = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       location_id,
//       category_id,
//       tags,
//       video,
//       latitude,
//       longitude,
//       contact_info,
//       opening_hours,
//     } = req.body;
    
//     const fullUrl = `${req.protocol}://${req.get("host")}`;
//     const picturePaths = req.files
//       ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`)
//       : [];
      

//     const newPalace = new Place({
//       name,
//       description,
//       location_id,
//       category_id,
//       tags,
//       pictures: picturePaths,
//       video,
//       latitude,
//       longitude,
    
// contact_info : contact_info|| {},
//  opening_hours : opening_hours|| []

//     });

//     await newPalace.save();

//     res.status(200).json({data:newPalace,message:"Places created sucessfully"});
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// export const addPalace = async (req, res) => {
//   try {
//     const {
//       name,
//       description,
//       location_id,
//       category_id,
//       tags,
//       video,
//       latitude,
//       longitude,
//       contact_info,
//       opening_hours,
//     } = req.body;
    
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files); // Debugging files

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Convert received files into an array of image paths
//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name,
//       description,
//       location_id,
//       category_id,
//       tags,
//       video,
//       latitude,
//       longitude,
//       contact_info: JSON.parse(contact_info || "{}"), // Ensure objects are correctly parsed
//       opening_hours: JSON.parse(opening_hours || "[]"), 
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths, // Array of image URLs
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };
// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };
// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };
// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };
// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };
// export const addPalace = async (req, res) => {
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags: JSON.parse(req.body.tags || "[]"),
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// };

// export const addPalace = async (req, res) => { 
//   try {
//     console.log("Req.body in place controller", req.body);
//     console.log("Req.files:", req.files);

//     const fullUrl = `${req.protocol}://${req.get("host")}`;

//     // Fix string values (Remove extra double quotes)
//     const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
    
//     // Fix ObjectId (Use 'new' to instantiate ObjectId correctly)
//     const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null;

//     // Debugging Logs
//     console.log("Before Fix:", req.body.location_id, req.body.category_id);

//     // Force conversion to ObjectId
//     const location_id = fixObjectId(req.body.location_id);
//     const category_id = fixObjectId(req.body.category_id);

//     console.log("After Fix:", location_id, category_id);

//     if (!location_id || !category_id) {
//       return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
//     }

//     const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

//     // Fix the tags handling: If it's a string, treat it as an array
//     const tags = req.body.tags ? (Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags]) : [];

//     const newPlace = new Place({
//       name: fixString(req.body.name),
//       description: fixString(req.body.description),
//       location_id,
//       category_id,
//       tags,
//       video: fixString(req.body.video),
//       latitude: parseFloat(req.body.latitude),
//       longitude: parseFloat(req.body.longitude),
//       contact_info: JSON.parse(req.body.contact_info || "{}"),
//       opening_hours: JSON.parse(req.body.opening_hours || "[]"),
//     });

//     const savedPlace = await newPlace.save();

//     // Save image references
//     const newPlaceImage = new PlaceImage({
//       place_id: savedPlace._id,
//       pictures: picturePaths,
//     });

//     const savedPlaceImage = await newPlaceImage.save();

//     savedPlace.image_id = savedPlaceImage._id;
//     await savedPlace.save();

//     res.status(200).json({
//       data: savedPlace,
//       message: "Place and image created successfully",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(400).json({ message: error.message });
//   }
// }

export const addPalace = async (req, res) => { 
  try {
    console.log("Req.body in place controller", req.body);
    console.log("Req.files:", req.files);

    const fullUrl = `${req.protocol}://${req.get("host")}`;

    // Fix string values (Remove extra double quotes)
    const fixString = (str) => (str ? str.replace(/^"|"$/g, "") : null);
    
    // Fix ObjectId (Use 'new' to instantiate ObjectId correctly)
    const fixObjectId = (id) => mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : null;

    // Debugging Logs
    console.log("Before Fix:", req.body.location_id, req.body.category_id);

    // Force conversion to ObjectId
    const location_id = fixObjectId(req.body.location_id);
    const category_id = fixObjectId(req.body.category_id);

    console.log("After Fix:", location_id, category_id);

    if (!location_id || !category_id) {
      return res.status(400).json({ message: "Location ID and Category ID are required and must be valid ObjectIds." });
    }

    const picturePaths = req.files ? req.files.map((file) => `${fullUrl}/uploads/${file.filename}`) : [];

    // Fix the tags handling: If it's a string, treat it as an array
    const tags = req.body.tags ? (Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags]) : [];

    const newPlace = new Place({
      name: fixString(req.body.name),
      description: fixString(req.body.description),
      location_id,
      category_id,
      tags,
      video: fixString(req.body.video),
      latitude: parseFloat(req.body.latitude),
      longitude: parseFloat(req.body.longitude),
      contact_info: JSON.parse(req.body.contact_info || "{}"),
      opening_hours: JSON.parse(req.body.opening_hours || "[]"),
    });

    const savedPlace = await newPlace.save();

    // Save image references
    const newPlaceImage = new PlaceImage({
      place_id: savedPlace._id,
      pictures: picturePaths,
    });

    const savedPlaceImage = await newPlaceImage.save();

    savedPlace.image_id = savedPlaceImage._id;
    await savedPlace.save();

    res.status(200).json({
      data: savedPlace,
      message: "Place and image created successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json({ message: error.message });
  }
}


export const getPlaces = async (req, res) => {
  try {
    const palace = await Place.find().populate([{ path: 'location_id'},{ path: 'category_id'}]);
    res.json(palace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updatePlace = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  try {
    const {
      name,
      description,
      location_id,
      category_id,
      tags,
      video,
      latitude,
      longitude,
      contact_info,
      opening_hours,
    } = req.body;

    const fullUrl = `${req.protocol}://${req.get("host")}`;
    const picturePaths = req.files?.map((file) => `${fullUrl}/uploads/${file.filename}`) || [];

    const updates = {
      name,
      description,
      location_id,
      category_id,
      tags,
      pictures: picturePaths,
      video,
      latitude,
      longitude,
      contact_info,
      opening_hours,
    };

    Object.keys(updates).forEach((key) => updates[key] === undefined && delete updates[key]);
    const updatedPlace = await Place.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedPlace) {
      return res.status(404).json({ message: "Place not found" });
    }

    res.status(200).json({ data: updatedPlace, message: "Place updated successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



export const getpalaceById = async (req, res) => {
  try {
    const palaceId = req.params.id;

    const palace = await Place.findById(palaceId);
    res.status(200).json(palace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletepalaceById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID Format" });
  }

  try {
    const deletepalace = await Place.findByIdAndDelete(id);

    if (!deletepalace) {
      return res.status(404).json({ message: "palace not found" });
    }

    res.status(200).json({ message: "palace deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
