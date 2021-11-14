import styled from "styled-components";
import instaLogo from "../../Img/insta.svg";
import telegramLogo from "../../Img/telegram.png";

const ContactUs = () => {
  return (
    <Container>
      <div className="contact">
        <div className="telAndEmail">
          <h4>شماره تماس با پشتیبانی: 123456789</h4>
          <h4>آدرس ایمیل: info@site.ir</h4>
        </div>

        <div className="socialMedia">
          <a href="https://instagram.com/">
            <img src={instaLogo} alt="" />
            <span>اینستاگرام ما</span>
          </a>
          <a href="https://t.me/">
            <img src={telegramLogo} alt="" />
            <span>کانال تلگرام ما</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #cacaca;
  min-height: 7rem;
  /* display: flex;
  align-items: center; */

  .contact {
    max-width: 114rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .telAndEmail {
      display: flex;

      h4 {
        margin-left: 5rem;
      }
    }

    .socialMedia {
      display: flex;

      a {
        margin-right: 5rem;
        color: #fff;
        background: rgb(52, 152, 219);
        display: flex;
        align-items: center;
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;

        &:first-of-type {
          background: rgba(102, 102, 102, 0.726);
        }

        span {
          font-size: 1.7rem;
        }

        img {
          margin-left: 1rem;
          height: 4rem;
          width: 4rem;
        }
      }
    }
  }
`;

export default ContactUs;
