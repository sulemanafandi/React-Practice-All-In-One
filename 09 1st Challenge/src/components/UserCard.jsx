import { FaYoutube } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Button from "./Button";

const UserCard = ({ title, role, likeCount, imgUrl }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white flex flex-col items-center">
      {/* top part */}
      <div className="relative w-full h-28 bg-blue-400 flex justify-center">
        <img
          className="absolute w-28 h-28 object-cover rounded-full border-4 border-white bg-white top-12 shadow-md"
          src={imgUrl}
          alt="profile"
        />
      </div>

      {/* bottom part */}
      <div className="w-full flex flex-col items-center mt-16 pb-4 px-4">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-500 mt-1 mb-3">{role}</p>

        {/* social icons */}
        <div className="flex gap-3 my-2">
          {[1, 2, 3, 4].map((i) => (
            <FaYoutube
              key={i}
              className="bg-red-500 p-2 text-white text-3xl rounded-full cursor-pointer hover:scale-110 transition-transform"
            />
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-4 my-3">
          <Button text="Subscribe" />
          <Button text="Message" />
        </div>

        {/* like section — moved slightly upward */}
        <div className="flex items-center justify-center gap-5 mt-2 text-gray-700">
          <Stat icon={<CiHeart />} value={likeCount} />
          <Line />
          <Stat icon={<CiHeart />} value={likeCount} />
          <Line />
          <Stat icon={<CiHeart />} value={likeCount} />
        </div>
      </div>
    </div>
  );
};

// helper components
const Line = () => <div className="w-px h-6 bg-black/20"></div>;

const Stat = ({ icon, value }) => (
  <div className="flex items-center text-base gap-1">
    {icon}
    <span className="font-medium">{value}</span>
  </div>
);

export default UserCard;
