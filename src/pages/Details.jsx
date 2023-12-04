import React from "react";
import data from "../data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";
import "../style/pages/details.scss";

const Details = () => {
  const [imageSlider, setImageSlider] = useState([]);

  const idDetails = useParams("id").id;
  const dataCurrentDetails = data.filter(
    (data) => data.id === idDetails
  );

  useEffect(() => {
    const dataCurrentDetails = data.filter(
      (data) => data.id === idDetails
    );
    setImageSlider(dataCurrentDetails[0].pictures);
  }, [idDetails]);

  const name = dataCurrentDetails[0].host.name.split(" ");
  const rating = dataCurrentDetails[0].rating;
  const description = dataCurrentDetails[0].description;
  const equipments = dataCurrentDetails[0].equipments;

  return (
    <div>
      <Carousel imageCarousel={imageSlider} />
      <div className="details">
        <div className="details_content">
          <div className="details_content_infos">
            <h1>{dataCurrentDetails[0].title}</h1>
            <p>{dataCurrentDetails[0].location}</p>
            <div>
              {dataCurrentDetails[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="details_content_host">
            <div>
              <div className="details_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentDetails[0].host.picture}
                alt="host of this details"
              />
            </div>

            <div className="details_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="details_collapse">
          <div className="details_collapse_item">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="details_collapse_item">
            <Collapse title={"Équipements"} content={equipments} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
