// import React, { useEffect } from "react";
// import { Box } from "@mui/system";
// import { Tooltip } from "@mui/material";
// import { CHAR_TOOLTIP_TITLE } from "../../../constants/Constants";

// const Stats = ({
//   status,
//   wpm,
//   countDown,
//   countDownConstant,
//   statsCharCount,
//   rawKeyStrokes,
//   userId, // Pass userId as a prop
// }) => {
//   useEffect(() => {
//     if (status === "finished" && userId) {
//       // Call a function to send WPM to the backend when the typing session is finished
//       sendWPMToBackend(wpm, userId);
//     }
//   }, [status, wpm, userId]);

//   const sendWPMToBackend = (wpm, userId) => {
//     const mode = "60s"; // Replace with actual mode (e.g., "30s", "60s", etc.)

//     // Prepare the data to send to the backend
//     const postData = {
//       userId,
//       mode,
//       wpm,
//       // Include other relevant statistics data here
//     };

//     // Send a POST request to the backend to add the WPM data
//     fetch("http://localhost:5000/stats", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(postData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to add statistics data");
//         }
//         console.log("WPM data added successfully");
//       })
//       .catch((error) => {
//         console.error("Error adding WPM data:", error);
//       });
//   };

//   return (
//     <>
//       <h3>{countDown} s </h3>
//       <Box display="flex" flexDirection="row">
//         <h3>WPM: {Math.round(wpm)}</h3>
//         {status === "finished" && (
//           <h4>Accuracy: {Math.round(statsCharCount[0])} %</h4>
//         )}
//         {status === "finished" && (
//           <Tooltip
//             title={
//               <span style={{ whiteSpace: "pre-line" }}>
//                 {CHAR_TOOLTIP_TITLE}
//               </span>
//             }
//           >
//             <h4>
//               Char:{" "}
//               <span className="correct-char-stats">{statsCharCount[1]}</span>/
//               <span className="incorrect-char-stats">{statsCharCount[2]}</span>/
//               <span className="missing-char-stats">{statsCharCount[3]}</span>/
//               <span className="correct-char-stats">{statsCharCount[4]}</span>/
//               <span className="incorrect-char-stats">{statsCharCount[5]}</span>
//             </h4>
//           </Tooltip>
//         )}
//         {status === "finished" && (
//           <h4>
//             Raw KPM: {Math.round((rawKeyStrokes / countDownConstant) * 60.0)}
//           </h4>
//         )}
//       </Box>
//     </>
//   );
// };

// export default Stats;

// stats.js

import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Tooltip } from "@mui/material";
import { CHAR_TOOLTIP_TITLE } from "../../../constants/Constants";

const Stats = ({
  status,
  wpm,
  countDown,
  countDownConstant,
  statsCharCount,
  rawKeyStrokes,
  // userId, // Remove userId from props
}) => {
  useEffect(() => {
    if (status === "finished") {
      // Hardcoded userId
      const userId = "661dfbd6277db18e1e0e7a4c";

      // Call a function to send WPM to the backend when the typing session is finished
      sendWPMToBackend(wpm, userId);
    }
  }, [status, wpm]);

  const sendWPMToBackend = (wpm, userId) => {
    const mode = "60s"; // Replace with actual mode (e.g., "30s", "60s", etc.)

    // Prepare the data to send to the backend
    const postData = {
      userId,
      mode,
      wpm,
      // Include other relevant statistics data here
    };

    // Send a POST request to the backend to add the WPM data
    fetch("http://localhost:5000/stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add statistics data");
        }
        console.log("WPM data added successfully");
      })
      .catch((error) => {
        console.error("Error adding WPM data:", error);
      });
  };

  return (
    <>
      <h3>{countDown} s </h3>
      <Box display="flex" flexDirection="row">
        <h3>WPM: {Math.round(wpm)}</h3>
        {status === "finished" && (
          <h4>Accuracy: {Math.round(statsCharCount[0])} %</h4>
        )}
        {status === "finished" && (
          <Tooltip
            title={
              <span style={{ whiteSpace: "pre-line" }}>
                {CHAR_TOOLTIP_TITLE}
              </span>
            }
          >
            <h4>
              Char:{" "}
              <span className="correct-char-stats">{statsCharCount[1]}</span>/
              <span className="incorrect-char-stats">{statsCharCount[2]}</span>/
              <span className="missing-char-stats">{statsCharCount[3]}</span>/
              <span className="correct-char-stats">{statsCharCount[4]}</span>/
              <span className="incorrect-char-stats">{statsCharCount[5]}</span>
            </h4>
          </Tooltip>
        )}
        {status === "finished" && (
          <h4>
            Raw KPM: {Math.round((rawKeyStrokes / countDownConstant) * 60.0)}
          </h4>
        )}
      </Box>
    </>
  );
};

export default Stats;
