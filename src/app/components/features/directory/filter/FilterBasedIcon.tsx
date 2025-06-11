import globeIcon from "../../../../../images/globeIcon.svg";
import softwareIcon from "../../../../../images/softwareIcon.svg";
import industryIcon from "../../../../../images/industryIcon.svg";
import serviceIcon from "../../../../../images/serviceIcon.svg";
import budgetIcon from "../../../../../images/budgetIcon.svg";
import callIcon from "../../../../../images/callIcon.svg";
import Image from "next/image";

const FilterBasedIcon = ({ id }: { id: string }) => {
  let filterIcon;

  switch (id) {
    case "countries":
      filterIcon = globeIcon;
      break;
    case "softwares":
      filterIcon = softwareIcon;
      break;
    case "industries":
      filterIcon = industryIcon;
      break;
    case "services":
      filterIcon = serviceIcon;
      break;
    case "budget":
      filterIcon = budgetIcon;
      break;
    case "discoveryCall":
      filterIcon = callIcon;
      break;

    default:
      filterIcon = globeIcon;
      break;
  }

  return (
    <>
      <Image src={filterIcon} height={15} width={15} alt="filterIcon" />{" "}
    </>
  );
};

export default FilterBasedIcon;
