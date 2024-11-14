import React from "react";
import { download } from "../assets";
import { downloadCanvasToImage } from "../config/helpers";

const Download = ({ canvasRef }) => {
   const handleDownload = () => {
      downloadCanvasToImage(canvasRef.current);
   };

   return (
      <div className="download-btn" onClick={handleDownload}>
         <img src={download} alt="Download" />
      </div>
   );
};

export default Download;
