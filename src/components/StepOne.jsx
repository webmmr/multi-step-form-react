import Header from "./shared/Header";

const StepOne = () => {
  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide name, email address, and phone number."
      />

      <div className="mb-2 flex flex-col">
        <label htmlFor="name" className="text-marinBlue mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Md Mizanur Rahman"
          className="p-3 border border-1 rounded-lg border-coolGray"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="email" className="text-marinBlue mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="kodom@gmail.com"
          className="p-3 border border-1 rounded-lg border-coolGray"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="phone" className="text-marinBlue mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          placeholder="e. g. +1223456789"
          className="p-3 border border-1 rounded-lg border-coolGray"
        />
      </div>
    </>
  );
};

export default StepOne;
