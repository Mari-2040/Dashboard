
const Footer = () => {
  return (
    <div className='flex items-center bottom-0'>
      <div className='gap-2 ml-3 py-3 items-center w-48 h-14 bg-white '>
        <div className="bg-[url('footer.svg')] w-60 h-44 bg-no-repeat ml-6"></div>
      </div>
      <div className="flex bg-[#0B4C98] justify-between h-14 w-full items-center px-10">
        <div className='not-italic text-white font-sans text-sm "not-italic font-normal leading-normal'>
          Powered by Devv.io
        </div>
        <div className='not-italic text-white font-sans text-sm "not-italic font-normal leading-normal'>
          © 2022 Devvio. All Rights Reserved. Terms of Use  |  Privacy Policy |  Contact
        </div>
      </div>
    </div> 
  );
};

export default Footer;
