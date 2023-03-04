import React from "react";
import Image from "next/image";
import photo from "../../../public/downloaded.jpg";

function ImageOwn() {
  return (
    <div>
      <Image src={photo} alt="wallpaper" priority/>
      <Image
        // TODO: by providing direct link of public folder in src of Image we have to just pass / ,it means in public folder
        // src="../../../public/downloaded.jpg"  its a wrong way in next js
        src="/downloaded.jpg"
        alt="useusal way to render pic"
        priority
        width={200}
        height={200}
        style={{ marginLeft: "20px" }}
      />
    </div>
  );
}

export default ImageOwn;
