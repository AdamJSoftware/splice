import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Rating = ({ rating }: { rating: number }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= rating) {
        stars.push(<FaStar key={i} style={{ color: "#FFD700" }} />);
      } else if (i + 0.5 < rating) {
        stars.push(<FaRegStarHalfStroke key={i} style={{ color: "#FFD700" }} />);
      } else {
        stars.push(<FaRegStar key={i} style={{ color: "#FFD700" }} />);
      }
    }
    return stars;
  };

  return <div style={{ display: "flex", gap: "5px" }}>{renderStars()}</div>;
};



export default Rating;
