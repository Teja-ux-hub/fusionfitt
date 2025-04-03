import React from 'react';
import profile from './profile.png';



const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="profile-card w-[500px] mt-[10vw] h-[500px] text-black rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
        <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
          <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
            <img
              src={profile}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white  group-hover:duration-300 transition-all duration-300"
            />
            <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
          </div>
        </div>
        <div className="headings text-center leading-4">
          <p className="text-xl font-serif font-semibold text-[#434955]">USER NAME</p>
          <p className="text-sm font-semibold text-[#434955]">PROFESSION</p>
        </div>
        <div className="w-full flex items-center justify-center">
          <ul className="flex flex-col items-start gap-2 border-b border-stone-700 pb-3">
            <li className="flex items-center gap-2">
              <svg
                id="phone"
                viewBox="0 0 24 24"
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path elements here */}
              </svg>
              <p><a href="">SOCIAL MEDIA</a></p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                id="mail"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path elements here */}
              </svg>
              <p>user@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                id="globe"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path elements here */}
              </svg>
              <p>smkydevelopr.com</p>
            </li>
            <li className="flex items-center gap-2">
              <svg
                id="map"
                viewBox="0 0 16 16"
                className="fill-stone-700 group-hover:fill-[#58b0e0]"
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path elements here */}
              </svg>
              <p>STREAK MAINTAINCE - [" 0 DAYS"]</p>
            </li>
          </ul>
        </div>
        <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
      </div>
    </div>
  );
};

export default Profile;
