const Header = ({ title, subtitle }) => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-marinBlue mb-2">{title}</h1>
      <p className="text-xl text-coolGray mb-5">{subtitle}</p>
    </div>
  );
};

export default Header;
