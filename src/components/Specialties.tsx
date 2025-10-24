// ...existing code...
import Newzealandspecialist from "./Newzealandspecialist";

const Certificate = () => {
  return (
    <section id="certificate" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
          Certificate
        </h2>

        <div className="flex justify-center">
          <div className="relative w-full max-w-3xl">
            <img
              src="/images/certificate.jpg"
              alt="Certificate"
              className="object-contain rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Specialties = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Authorized New Zealand Gold Partner
          </h2>

          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl h-[400px]">
              <img
                src="/images/specialist.jpg"
                alt="Authorized New Zealand Partner"
                className="object-contain rounded-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
      {/* certificate section placed below */}
      <Certificate />

      {/* inserted: specialties grid component */}
      <Newzealandspecialist />

      
    </>
  );
};

export default Specialties;
// ...existing code...