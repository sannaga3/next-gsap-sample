import MainBoard from "../Components/mainBoard";
import CardContainer from "../Components/cardContainer";

export default function Home() {
  return (
    <div className="px-20 py-5 space-y-10">
      <MainBoard />
      <CardContainer />
    </div>
  );
}
