const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h1 className="md:text-4xl text-3xl font-bold text-marinBlue mb-2">
        {title}
      </h1>
      <p className="md:text-xl text-lg text-coolGray mb-5 md:leading-10 leading-7">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
