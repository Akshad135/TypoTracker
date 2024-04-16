// import mongoose from "mongoose";
// import User from "./user.js";

// const userStatsSchema = mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true,
//   },
//   mode: {
//     type: String,
//     enum: ["30s", "60s", "90s", "custom"],
//     required: true,
//   },
//   score: {
//     type: Number,
//     required: true,
//   },
//   // Add more fields as needed for additional stats
// });

// const UserStats = mongoose.model("UserStats", userStatsSchema);

// // Sample function to add basic data directly
// function addSampleData() {
//   const sampleData = [
//     {
//       user: "661d742d1dc774aa95db978e",
//       mode: "30s",
//       score: 100,
//     },
//     {
//       user: "661d742d1dc774aa95db978e",
//       mode: "60s",
//       score: 150,
//     },
//     // Add more sample data as needed
//   ];

//   UserStats.insertMany(sampleData)
//     .then((insertedData) => {
//       console.log("Sample data added successfully:", insertedData);
//     })
//     .catch((error) => {
//       console.error("Error inserting sample data:", error);
//     });
// }

// export default { UserStats, addSampleData };

import mongoose from "mongoose";
import User from "./user.js";

const userStatsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mode: {
    type: String,
    enum: ["30s", "60s", "90s", "custom"],
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  // Add more fields as needed for additional stats
});

const UserStats = mongoose.model("UserStats", userStatsSchema);

// Sample function to add basic data directly
function addSampleData() {
  const sampleData = [
    {
      user: "661d742d1dc774aa95db978e",
      mode: "30s",
      score: 100,
    },
    {
      user: "661d742d1dc774aa95db978e",
      mode: "60s",
      score: 150,
    },
    // Add more sample data as needed
  ];

  UserStats.insertMany(sampleData)
    .then((insertedData) => {
      console.log("Sample data added successfully:", insertedData);
    })
    .catch((error) => {
      console.error("Error inserting sample data:", error);
    });
}

export default UserStats;
