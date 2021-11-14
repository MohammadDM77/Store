import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <div className="element">
        <h3>درباره ما</h3>
        <p>
          سلام! من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با
          دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید. سلام! من یک
          پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک
          برروی من، استایل و ابعاد و... من را تغییر دهید.
        </p>
      </div>

      <div className="element">
        <h3>مزیت‌ها</h3>
        <p>
          سلام! من یک پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با
          دوبار کلیک برروی من، استایل و ابعاد و... من را تغییر دهید. سلام! من یک
          پاراگراف هستم درمورد این بخش که شما می‌توانید به راحتی با دوبار کلیک
          برروی من، استایل و ابعاد و... من را تغییر دهید.
        </p>
      </div>

      <div className="element">
        <h3>لینک‌های سایت</h3>
        <div>
          <a href="#">چگونه میتوانم به شما اعتماد کنم؟</a>
          <a href="#">چگونه میتوانم خرید کنم؟</a>
          <a href="#">سفارش من چگونه ارسال میشود؟</a>
          <a href="#">رویه برگراندن کالا</a>
          <a href="#">شیوه برگرداندن وجه</a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto 5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .element {
    flex: 0 0 30%;

    h3 {
      margin-bottom: 1.5rem;
    }

    a {
      display: block;
      font-size: 1.7rem;
    }
  }
`;

export default AboutUs;
