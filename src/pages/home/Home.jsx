import Stories from "../../components/stories/Stories";
import Share from "../../components/share-post/Share";
import Posts from "../../components/posts/Posts";
import "./home.scss"
import LeftBar from "../../components/leftBar/LeftBar"
import RightBar from "../../components/rightBar/RightBar"
const Home = () => {
  return (
    <div className="home">
      <div className="left">
         <LeftBar/>
      </div>
        <div className="home_container">
         <Stories/>
          <Share/>
         <Posts/>
        </div>
        <div className="right">
         <RightBar/>
        </div>
    </div>
  );
}

export default Home