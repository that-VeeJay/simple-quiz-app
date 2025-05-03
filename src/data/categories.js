import scienceImg from "../assets/science.png";
import historyImg from "../assets/history.png";
import geographyImg from "../assets/geography.png";
import mathImg from "../assets/math.png";
import literatureImg from "../assets/literature.png";
import technologyImg from "../assets/technology.png";
import pop_cultureImg from "../assets/pop_culture.png";
import sportsImg from "../assets/sports.png";

export const categories = [
  {
    img: scienceImg,
    name: "Science",
    color: "bg-gradient-to-t from-red-900 to-orange-600",
    description:
      "Covers topics like physics, chemistry, biology, and astronomy.",
  },
  {
    img: historyImg,
    name: "History",
    color: "bg-gradient-to-t from-amber-900 to-amber-600",
    description: "Questions about historical events, figures, and timelines.",
  },
  {
    img: geographyImg,
    name: "Geography",
    color: "bg-gradient-to-t from-green-900 to-green-600",
    description: "Focuses on countries, capitals, landmarks, and maps.",
  },
  {
    img: mathImg,
    name: "Math",
    color: "bg-gradient-to-t from-blue-900 to-blue-600",
    description: "Includes arithmetic, algebra, geometry, and logic problems.",
  },
  {
    img: literatureImg,
    name: "Literature",
    color: "bg-gradient-to-t from-fuchsia-900 to-fuchsia-600",
    description:
      "Deals with books, authors, literary terms, and famous quotes.",
  },
  {
    img: technologyImg,
    name: "Technology",
    color: "bg-gradient-to-t from-indigo-900 to-indigo-600",
    description:
      "Questions about gadgets, programming, internet, and innovation.",
  },
  {
    img: pop_cultureImg,
    name: "Pop Culture",
    color: "bg-gradient-to-t from-rose-900 to-rose-600",
    description: "Covers music, movies, celebrities, and current trends.",
  },
  {
    img: sportsImg,
    name: "Sports",
    color: "bg-gradient-to-t from-orange-900 to-orange-600",
    description: "Includes rules, players, teams, and sports history.",
  },
];
