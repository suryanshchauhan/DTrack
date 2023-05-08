import { useAppContext } from "../context/appContext";
import StatItem from "./StatItem";
import {
  FaRegPaperPlane,
  FaCalendarCheck,
  FaRegWindowClose,
} from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
const StatsContainer = () => {
  const { stats } = useAppContext();
  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: <FaRegPaperPlane />,
      color: "#49474d",
      bcg: "#beb9b4",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaRegWindowClose />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
