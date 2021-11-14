import styled from "styled-components";
import "./Brand.css";
import Services from "../data/Services";

const Brand = () => {
  return (
    <Container>
      <div className="brandsContainer">
        <div className="brands">
          {Services.map((service, entries) => {
            return (
              <div className="imgHolder" key={entries}>
                <img src={service.imgSrc} alt="" />
                <h3>{service.text}</h3>
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
  background: rgb(235, 238, 240);
  min-height: 20vh;
  margin-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .brandsContainer {
    width: 114rem;
    overflow: hidden;

    .line {
      margin-top: 1.5rem;
      border-bottom: 0.15rem solid #999999;
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

        h3 {
          margin-top: 1.5rem;
          text-align: center;
        }
      }
    }
  }
`;

export default Brand;
