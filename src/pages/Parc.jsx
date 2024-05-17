import { useOutletContext } from "react-router-dom";
import Button_page from "../components/Button_page";
import Detail_parc from "../components/Detail_parc";
import Info_parc from "../components/Info_parc";

export default function Parc() {
  const { filteredData, setCodePost } = useOutletContext();

  console.log(filteredData);

  return (
    <>
      <Button_page />
      <Info_parc data={filteredData} />
      <Detail_parc data={filteredData} />
    </>
  );
}
