import Card from "./Card";

function Recent() {
  return (
    <section className="my-16">
      <div className="mb-8 space-y-4">
        <h2 className="text-4xl">Recent resources</h2>
        <h3 className="text-xl font-bold tracking-wide">
          Read our latest articles, blogs and case studies
        </h3>
      </div>
      <div className="flex flex-wrap gap-8">
        <Card
          header="Do you really need JavaScript in 2024?"
          tags={["Recourse", "Dev"]}
        />
        <Card
          header="WordPress version 6.4 adds improvements to object caching"
          tags={["Wordpress", "Dev", "resource"]}
        />
        <Card
          header="You can’t always trust results from website carbon calculators"
          tags={["Recourse", "Web Dev"]}
        />
      </div>
    </section>
  );
}

export default Recent;
