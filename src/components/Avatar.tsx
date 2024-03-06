import { useState } from "react";
import banner from "../assets/banner.png";
// import Banner from "../shared/Banner";
import avatars_array from "../data/avatars.json";

function GetRandomAvatar(): string {
  const avatar =
    avatars_array.avatars[
      Math.floor(Math.random() * avatars_array.avatars.length)
    ];
  console.log(avatar);
  return avatar;
}

function Avatar() {
  const [newAvatar, getNewAvatar] = useState(
    "https://i.pinimg.com/564x/46/07/05/460705552aaa8c68126a2d341b7bfbe1.jpg"
  );
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-20 " id="avatar">
      <div className="gradientBg rounded-xl md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Banner content */}
          <div className="grid justify-items-center">
            <img
              src={newAvatar}
              className="rounded-lg h-80 items-center py-6"
            />
            <div className="space-x-5 space-y-4">
              <button
                className="btnPrimary"
                onClick={() => getNewAvatar((newAvatar) => GetRandomAvatar())}
              >
                {"Generate Image"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
