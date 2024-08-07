import { useState, useEffect, useDispatch } from "react";
import { deserts } from "../../assets/data/data";
import { useParams } from "react-router-dom";
import "./Detail.css";
const Detail = () => {
  const { name } = useParams();
  console.log(name);
  const [detail, setDetail] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isEnlarged, setIsEnlarged] = useState(false);
  useEffect(() => {
    const findDetail = deserts.filter((data) => data.data === name);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);

      const related = deserts.filter(
        (data) => data.category === findDetail[0].category && data.data !== name
      );
      setRelatedProducts(related);
    } else {
      window.location.href = "/";
    }
  }, [name]);

  const handleImageClick = () => {
    setIsEnlarged(true);
    document.body.classList.add("no-scroll");
  };

  const handleCloseClick = () => {
    setIsEnlarged(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <section className="detail-container">
        <div className="image-container">
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
                  <i class="fa-solid fa-xmark"></i>
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
      <section className="related-products">
        <h3>Related Products</h3>
        <div className="related-products-container">
          {relatedProducts.map((product) => (
            <div key={product.name} className="related-product">
              <img src={product.image} alt="" />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <span>Price: {product.price}$</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Detail;
