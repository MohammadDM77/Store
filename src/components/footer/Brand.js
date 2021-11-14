import styled from "styled-components";
import "./Brand.css";
import Services from "../../data/Services";

const Brand = () => {
  return (
    <Container>
      <div className="brandsContainer">
        <div className="brands">
          {Services.map((service, entries) => {
            return (
              <div className="imgHolder" key={entries}>
                <img src={service.imgSrc} alt="" />
                <h4>{service.text}</h4>
              </div>
            );
          })}
        </div>
        <div className="line"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 25vh;
  margin-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .brandsContainer {
    max-width: 114rem;
    overflow: hidden;

    .line {
      margin-top: 2rem;
      border-bottom: 0.15rem solid #c3c3c3;
    }

    .brands {
      width: 228rem;
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      animation: brandAnim 18s infinite;

      .imgHolder {
        width: 19rem;

        img {
          margin: 0 auto;
          display: block;
        }

        h4 {
          margin-top: 1.5rem;
          text-align: center;
        }
      }
    }
  }
`;

export default Brand;
