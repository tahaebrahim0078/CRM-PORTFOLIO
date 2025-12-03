import Image from "next/image";
import HeaderDash from "../dashboardLanding/Metrics";

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Agent Dashboard
          </h2>
          <p className="text-gray-600">
            Empower your team with tools designed for efficiency and
            collaboration
          </p>
        </div>

        {/* Dashboard Mock */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <p className="font-mono text-sm">ChatFlow Dashboard</p>
            <div className="w-16" />
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            {/* Metrics Grid */}

            <HeaderDash />
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recent Conversations */}
              <div>
                <h3 className="font-bold text-gray-900 mb-6">
                  Recent Conversations
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764798781/istockphoto-1135081673-612x612_io9p4q.jpg",
                      name: "Sarah Johnson",
                      msg: "5m ago",
                      badge: "bg-green-500 text-green-800",
                    },
                    {
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764799222/20572baabbf418db9cfb52c5026fdce1_knprb4.jpg",
                      name: "Mike Chen",
                      msg: "10m ago",
                      badge: "bg-green-500 text-green-800",
                    },
                    {
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764798785/photo-1580489944761-15a19d654956_rjgvd2.jpg",
                      name: "Lisa Park",
                      msg: "15m ago",
                      badge: "bg-yellow-500 text-yellow-800",
                    },
                    {
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764799169/close-up-upset-american-black-person_23-2148749582_ybnqyo.avif",
                      name: "David Kim",
                      msg: "49m ago",
                      badge: "bg-gray-500 text-gray-800",
                    },
                  ].map((agent, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={agent.img}
                            alt={agent.name}
                            width={40}
                            height={40}
                            loading="lazy"
                            className="object-contain scale-100"
                          />
                        </div>

                        <p className="font-medium text-gray-900 text-sm">
                          {agent.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-xs text-gray-500">{agent.msg}</p>

                        <div
                          className={`text-xs py-2 px-2 rounded-full font-medium ${agent.badge}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Performance */}
              <div>
                <h3 className="font-bold text-gray-900 mb-6">
                  Team Performance
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Ana Rodriguez",
                      satisfaction: 98,
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764798781/images_fimmzn.jpg",
                    },
                    {
                      name: "Lisa Park",
                      satisfaction: 80,
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764798953/pexels-photo-774909_r1dwov.jpg",
                    },
                    {
                      name: "David Kim",
                      satisfaction: 94,
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764798954/slide-2_udumwa.png",
                    },
                    {
                      name: "Adam leon",
                      satisfaction: 70,
                      img: "https://res.cloudinary.com/dtf9brzuu/image/upload/v1764799416/rrrr_ovl2zd.avif",
                    },
                  ].map((agent, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                          <Image
                            src={agent.img}
                            alt={agent.name}
                            width={40}
                            height={40}
                            loading="lazy"
                            className="object-cover scale-110"
                          />
                        </div>
                        <p className="font-medium text-gray-900 text-sm">
                          {agent.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${agent.satisfaction}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900 w-8">
                          {agent.satisfaction}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
