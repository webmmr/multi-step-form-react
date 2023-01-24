import thankYouIcon from "../assets/icon-thank-you.svg";
import Header from "./shared/Header";

const ThankYou = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center py-20">
      <img src={thankYouIcon} alt="Thank you" className="mb-5" />
      <Header
        title="Thank you!"
        subtitle="Thanks for confirming your subscription! We hope you will have fun using our platform. If you ever need support, please feel free to email us at support@hudai.com"
      />
    </div>
  );
};

export default ThankYou;
