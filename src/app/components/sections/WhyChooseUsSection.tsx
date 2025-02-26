import { CircleDollarSign, Clock, Lightbulb, Settings } from 'lucide-react';

const features = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Industry Expertise & Innovation',
    description: 'Our team combines deep domain expertise with the latest technological advancements to deliver top-tier solutions.',
  },
  {
    icon: <CircleDollarSign className="w-8 h-8" />,
    title: 'Cost-Effective Solutions',
    description: 'Reduce operational costs while maintaining high-quality service standards and efficiency.',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: '24/7 Global Support',
    description: 'Our dedicated team provides round-the-clock assistance to ensure seamless business continuity.',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Customized & Scalable Services',
    description: 'We tailor solutions to meet specific business needs and scale with organizational growth.',
  },
];

export default function WhyChooseUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-100 to-amber-50 dark:from-orange-950 dark:via-amber-900 dark:to-orange-950 animate-gradient-xy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 dark:bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-300 bg-clip-text text-transparent mb-6">
              Why Choose Us
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-orange-500 to-amber-400 dark:from-orange-400 dark:to-amber-300 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience excellence through our comprehensive suite of services designed to transform your business landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 backdrop-blur-sm bg-opacity-70 dark:bg-opacity-50 rounded-2xl p-8 hover:shadow-2xl dark:hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1 border border-orange-100 dark:border-orange-900"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-300 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}