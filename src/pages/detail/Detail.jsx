import { useState, useEffect, useDispatch } from "react";
import { deserts } from "../../assets/data/data";
import { useParams } from "react-router-dom";
import "./Detail.css";
const Detail = () => {
  const { name } = useParams();
  console.log(name);
  const [detail, setDetail] = useState({});
  const [isEnlarged, setIsEnlarged] = useState(false);
  useEffect(() => {
    const findDetail = deserts.filter((data) => data.data === name);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    } else {
      window.location.href = "/";
    }
  }, [name]);
  const handleImageClick = () => {
    setIsEnlarged(true);
  };

  const handleCloseClick = () => {
    setIsEnlarged(false);
  };
  return (
    <>
      <section className="detail-container">
        <div
          className="image-container"
          style={
            {
              // backgroundImage: `url(${detail.image})`
            }
          }
        >
          <div className="image-content">
            <img
              src={detail.image}
              alt=""
              onClick={handleImageClick}
              className={isEnlarged ? "enlarged" : ""}
            />
            {isEnlarged && (
              <div className="enlarged-image-container">
                <img src={detail.image} alt="" />
                <button className="close-button" onClick={handleCloseClick}>
                  <i className="fas fa-times"></i>
                  lol
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="text-container">
          <h3>{detail.name}</h3>
          <p className="description">{detail.description}</p>
          <p>
            <span>Ingridients:</span>
            <br />
            {detail.ingridients}
          </p>
          <span>Interesting:</span>
          <br />
          <i className="history">"{detail.history}"</i>
          <br />
          <span>Price:</span>
          <span className="price">{detail.price}$</span>
        </div>
      </section>
    </>
  );
};

export default Detail;
