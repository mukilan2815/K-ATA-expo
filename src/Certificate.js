const Certificate = ({ name, collegeName }) => (
  <div id="certificate" className="w-[800px] h-[600px] bg-white relative p-8">
    <div className="absolute top-0 left-0 w-2 h-full bg-[#1e3a5f]"></div>
    <div className="absolute bottom-0 right-0 w-full h-2 bg-[#1e3a5f]"></div>
    <div className="absolute top-4 right-4 w-1/2 h-2 bg-[#c9a04b]"></div>
    <div className="absolute bottom-4 left-4 w-2 h-1/2 bg-[#c9a04b]"></div>
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-2">CERTIFICATE</h1>
      <h2 className="text-3xl font-semibold mb-8">Of Participation</h2>

      {/* Awarding Statement */}
      <p className="text-xl mb-4">This is to certify that</p>
      <h3 className="text-4xl font-bold mb-8 font-script">{name}</h3>

      {/* Customized Sentence */}
      <p className="text-lg mb-8">
        from <span className="font-semibold">{collegeName}</span> has actively
        participated in the <span className="font-semibold">Impairathon</span>{" "}
        held on 1st October 2024.
      </p>

      <div className="flex justify-between items-end mt-16">
        <div className="text-center">
          <img
            src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.png"
            alt="Signature"
            className="mb-2 h-20 w-28"
          />
          <p className="font-semibold">Juliana Silva</p>
          <p>REPRESENTATIVE</p>
        </div>

        <img
          src="https://kahedu.edu.in/n/wp-content/uploads/2023/01/LOGO-with-different-colors-03.png"
          alt="Seal"
          className="mx-auto h-20 w-40"
        />

        <div className="text-center">
          <img
            src="https://onlinepngtools.com/images/examples-onlinepngtools/george-walker-bush-signature.png"
            alt="Signature"
            className="mb-2 h-20 w-28"
          />
          <p className="font-semibold">Pedro Fernandes</p>
          <p>REPRESENTATIVE</p>
        </div>
      </div>
    </div>
  </div>
);

export default Certificate;
