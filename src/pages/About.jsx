import about_data from "../about_datas";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../style/pages/about.scss";

const about = () => {
  return (
    <div>
      <Banner page="about" />
      <div className="about_main">
        {about_data.map((data) => {
          return (
            <div key={data.id} className="about_main_collapse">
              <Collapse title={data.title} content={data.content} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default about;
