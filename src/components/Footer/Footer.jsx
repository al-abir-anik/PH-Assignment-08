
const Footer = () => {
  return (
    <footer className="bg-white p-10 space-y-10 text-center py-16">
      <div className="space-y-5">
        <h3 className="font-bold text-3xl text-[#09080f]">Gadget Heaven</h3>
        <p className="font-medium text-base text-[#09080f]/60">Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr />
      <div className="footer flex justify-evenly">
        <nav>
          <h6 className="font-bold text-lg text-[#09080f]">Services</h6>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Branding</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Design</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Marketing</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Advertisement</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-[#09080f]">Company</h6>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">About us</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Contact</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Jobs</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Press kit</a>
        </nav>
        <nav>
          <h6 className="font-bold text-lg text-[#09080f]">Legal</h6>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Terms of use</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Privacy policy</a>
          <a className="link link-hover font-medium text-base text-[#09080f]/60">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
