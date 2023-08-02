function Footer() {
  return (
    <footer
      className=" w-full bg-gray-800 px-4 text-white pt-8 flex flex-col
     md:flex-row flex-wrap justify-between md:px-12"
    >
      <div >
        <img
          className="w-40 h-16"
          src="https://pwskills.com/images/PWSkills-white.png"
        ></img>
        <p className="my-4">Email us: support@pwskills.com</p>
        <img
          className="w-30 h-16"
          src="https://img.icons8.com/?size=512&id=kPENNmiEJv3b&format=png"
        ></img>
      </div>
    </footer>
  );
}

export default Footer;
