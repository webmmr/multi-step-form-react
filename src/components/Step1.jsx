import Header from "./shared/Header";

const StepOne = ({ name, email, phone, updateData }) => {
  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide name, email address, and phone number."
      />

      <div className="mb-2 flex flex-col ">
        <label htmlFor="name" className="text-marinBlue mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => updateData({ name: e.target.value })}
          required
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
          id="email"
          value={email}
          onChange={(e) => updateData({ email: e.target.value })}
          required
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
          id="phone"
          value={phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          required
          placeholder="e. g. +1223456789"
          className="p-3 border border-1 rounded-lg border-coolGray"
        />
      </div>
    </>
  );
};

export default StepOne;
