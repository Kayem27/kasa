import data from "../data";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";
import "../style/pages/details.scss";

const Details = () => {
  const [dataCurrentDetails, setDataCurrentDetails] = useState({});
  const idDetails = useParams("id").id;
  const Navigate = useNavigate();

  useEffect(() => {
    const logement = data.filter((data) => data.id === idDetails)
    if(logement.length !== 1 ){
      Navigate('/cette page n\'existe pas');
    } else {
      setDataCurrentDetails(logement[0]);
    }
  }, [idDetails, Navigate]);

  return (
    dataCurrentDetails.pictures &&
    <div>
      <Carousel imageCarousel={dataCurrentDetails.pictures} />
      <div className="details">
        <div className="details_content">
          <div className="details_content_infos">
            <h1>{dataCurrentDetails.title}</h1>
            <p>{dataCurrentDetails.location}</p>
            <div>
              {dataCurrentDetails.tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="details_content_host">
            <div>
              <div className="details_content_host_name">
                <span>{dataCurrentDetails.host.name.split(" ")[0]}</span>
                <span>{dataCurrentDetails.host.name.split(" ")[1]}</span>
              </div>
              <img
                src={dataCurrentDetails.host.picture}
                alt="host of this details"
              />
            </div>

            <div className="details_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= dataCurrentDetails.rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="details_collapse">
          <div className="details_collapse_item">
            <Collapse title={"Description"} content={dataCurrentDetails.description} />
          </div>
          <div className="details_collapse_item">
            <Collapse title={"Équipements"} content={dataCurrentDetails.equipments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
