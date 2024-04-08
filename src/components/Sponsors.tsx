import Card from "./Card";

function Sponsors() {
  return (
    <section className="my-16">
      <div className="mb-8 space-y-4">
        <h2 className="text-4xl">Our key sponsors</h2>
        <h3 className="text-xl font-bold tracking-wide">
          Supporting our efforts in creating a better web
        </h3>
      </div>

      <div className="flex flex-wrap gap-8">
        <Card
          header="Kollectify"
          color="white"
          imgSrc={"/kollectify-logo.png"}
          desc="An impact-driven design collective creating digital products that won’t ruin the world. 100% greenwash-free."
        />

        <Card
          header="Pixelfish"
          color="white"
          imgSrc={"/pixelfish-logo.png"}
          desc="Brand and Storytelling for a Sustainable Web using WordPress

          "
        />
        <Card
          header="Atlas, Rise!"
          color="white"
          imgSrc={"/atlas-rise-logo.png"}
          desc="An impact-driven design collective creating digital products that won’t ruin the world. 100% greenwash-free.

          "
        />
      </div>
    </section>
  );
}

export default Sponsors;
