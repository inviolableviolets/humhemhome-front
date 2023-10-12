// import homeStyle from "./home.module.scss";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { List } from "../list/list";
// import Reveal from "../../utils/reveal";

export default function Home() {
  return (
    <>
      {/* <div className={homeStyle.homeContainer} id="home-section"> */}
      {/* <Reveal y={200} duration={1}> */}
      <Header></Header>
      <List></List>
      <Footer></Footer>
      {/* </Reveal> */}
      {/* </div> */}
    </>
  );
}
