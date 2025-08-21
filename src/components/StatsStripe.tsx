import { Award, Eye, Users } from "lucide-react";

const StatsStripe = () => {
  const stats = [
    {
      icon: <Eye className="w-5 h-5" />,
      number: "50K+",
      label: "Views Per Episode",
    },
    {
      icon: <Users className="w-5 h-5" />,
      number: "100",
      label: "Top CIOs",
    },
    {
      icon: <Award className="w-5 h-5" />,
      number: "Top 10",
      label: "IT Leadership",
    },
  ];
  return (
    <section className="bg-podcast-navy py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Simple Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Trusted by Industry Leaders
          </h2>
        </div>

        {/* Clean Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-podcast-blue/20 rounded-full flex items-center justify-center text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-2xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStripe;
