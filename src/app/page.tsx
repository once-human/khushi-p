/* We are using CSS variables for fonts defined in layout.tsx, 
   so no need to import font objects directly here unless for specific className usage not covered by variables.
*/

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center font-inter">
      {/* Navbar */}
      {/* Applied Framer styles: bg-[rgba(19,20,21,0.96)], backdrop-blur-md (equivalent to blur(12px)), shadow-lg */}
      <nav 
        className="w-full p-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-[rgba(19,20,21,0.96)] backdrop-blur-md shadow-lg"
        style={{borderColor: 'rgb(26, 28, 29)', borderBottomWidth: '1px'}} // Matching Framer border
      >
        {/* Name: Reduced size to text-[30px] */}
        <div className="text-[30px] leading-tight">
          <span className="font-inter font-normal text-white">Khushi </span> 
          <span className="font-taprom text-[#FF8080]">Banthia</span>
        </div>
        {/* Resume Button: bg-[#2060DF], rounded-full (from Framer's border-radius:1000px) */}
        <a
          href="https://drive.google.com/file/d/1sOtR5Ji2WxyqlN36qNObNXM3JY9kmuzc/view?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#2060DF] hover:bg-blue-700 text-white font-inter font-medium py-2 px-6 rounded-full text-sm shadow-lg"
        >
          Resume
        </a>
      </nav>

      {/* Hero Section */}
      {/* Adjusted top padding slightly if navbar height changes with font size, though it might be minor */}
      <main className="flex flex-col items-center justify-center flex-grow pt-28 md:pt-32 pb-12 text-center px-4">
        {/* Profile Image: Reduced size */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mb-8 overflow-hidden shadow-2xl">
          <img
            src="https://framerusercontent.com/images/ZrNOpVxjoAaCrh0UsiDXMjSxwg.jpg"
            alt="Khushi Banthia"
            width={192} // Corresponds to md:w-48
            height={192} // Corresponds to md:h-48
            className="object-cover w-full h-full"
          />
        </div>

        {/* Tagline: Reduced font size to text-[26px] */}
        <p 
          className="font-square-peg text-[26px] text-[#FFE5E5] max-w-xl mb-10 tracking-[-0.5px] leading-[1.5em]"
        >
          I thrive on turning big messy ideas into sleek user friendly solutions.
        </p>

        {/* Let's Connect!: Reduced font size to text-xl */}
        <a 
          href="https://www.linkedin.com/in/khushi-banthia/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter font-medium text-xl text-[#2060DF] hover:underline tracking-[-0.03em]"
        >
          Let's Connect!
        </a>
      </main>

      {/* Placeholder for potential future sections if #contact is used
      <section id="contact" className="w-full py-12">
        <h2 className="text-2xl text-center">Contact Me</h2>
      </section> 
      */}
    </div>
  );
}
