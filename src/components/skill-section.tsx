import CircularProgress from "./skill-circle";

const items = [
  {
    label: "ReactJS",
    point: 90,
  },
  {
    label: "NextJS",
    point: 75,
  },
  {
    label: "TypeScript",
    point: 70,
  },
  {
    label: "TailwindCSS",
    point: 90,
  },
  {
    label: "React Native",
    point: 50,
  },
  {
    label: "Agile Scrum",
    point: 80,
  },
  {
    label: "ExpressJS",
    point: 88,
  },
  {
    label: "NestJS",
    point: 69,
  },
  {
    label: "Strapi",
    point: 87,
  },
  {
    label: "NestJS",
    point: 50,
  },
  {
    label: "Mongo DB",
    point: 55,
  },
  {
    label: "MySQL",
    point: 80,
  },
];

export default function SkillSection() {
  return (
    <div
      className="bg-slate-900 px-8 py-10 rounded-xl shadow-lg flex flex-col sm:gap-4 gap-2 items-center mt-24"
      id="skills"
    >
      <p className="font-bold sm:text-3xl text-xl">Skills</p>
      <div className="text-center mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1 gap-4 mt-6">
        {items.map((item, idx) => (
          <div key={idx} className="">
            <CircularProgress label={item.label} percentage={item.point} />
          </div>
        ))}
      </div>
    </div>
  );
}
