import "./Content.css";
import aboutUsImage from "../../../assets/images/AboutUs.png";
const AboutContent = () => {
  return (
    <>
      <section className="about-content-section">
        <div className="center-content">
          <div className="image-container">
            <img src={aboutUsImage} alt="Coffe 4 You" />
          </div>
          <div className="text">
            <p>
              "Welcome to "coffee 4 you" where passion for coffee meets
              creativity!
            </p>
            <p>
              At "coffee 4 you" we're more than just a coffee shop; we're a
              community hub where friends gather, ideas flow, and moments are
              savored.
            </p>
            <p>
              With each cup meticulously brewed to perfection and each dessert
              crafted with love, we aim to delight your senses and leave you
              craving for more.
            </p>
            <p>
              But we're not just about great coffee and desserts; we're about
              fostering creativity. That's why we invite you to unleash your
              imagination through our cup design competition. Whether you're a
              budding artist or simply have a vision you want to share, our cups
              are your canvas. Join us in celebrating creativity, one sip at a
              time.
            </p>
            <p>
              And for those who prefer to let others do the designing, fear not!
              Our curated collection of pre-designed cups ensures there's
              something for everyone.
            </p>
            <p>
              So come on in, take a seat, and let the aroma of freshly brewed
              coffee envelop you. At "coffee 4 you" every visit is an
              opportunity to savor the moment and create memories. We can't wait
              to welcome you into our world of coffee community, and
              creativity."
            </p>
          </div>
        </div>
        <div className="bottom-content">
            <p>In 2022 inspired by a love for coffee and art, you brought your dream to life in Tbilisi founding "coffee 4 you". Infused with a passion for quality, the café became a cozy retreat, offering not just exceptional coffee but also a canvas for creativity. With each cup carefully crafted and each dessert lovingly made, "coffee 4 you" quickly became a local favorite. The idea of customizable cup designs emerged from your desire to merge coffee with art, offering patrons a unique way to express themselves. This innovative concept captured the imagination of coffee enthusiasts and artists alike, turning "coffee 4 you" into a vibrant hub where creativity flourishes. Today, it stands as a testament to your vision and dedication, a place where every visit is an opportunity to savor the moment and create lasting memories.</p>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
