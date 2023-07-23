const Footer = () => {
  return (
    <div className='flex items-center bottom-0 bg-[#0B4C98]'>
      <div className='gap-2 items-center w-48  bg-white '>
        <div className="bg-[url('footer.svg')] w-48 h-[54px] bg-no-repeat bg-center"></div>
      </div>
      <div className='flex justify-between  w-full items-center px-10'>
        <div className='not-italic text-white font-sans text-sm "not-italic font-normal leading-normal'>
          Powered by Devv.io
        </div>
        <div className='not-italic text-white font-sans text-sm "not-italic font-normal leading-normal'>
          © 2022 Devvio. All Rights Reserved. Terms of Use | Privacy Policy |
          Contact
        </div>
      </div>
    </div>
  );
};

export default Footer;
