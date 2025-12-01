import { Activity, Users, MessageSquare, Clock } from "lucide-react";

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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                <Activity className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-gray-600 text-sm mb-1">Online Status</p>
                <p className="text-2xl font-bold text-gray-900">47</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
                <Users className="w-6 h-6 text-green-600 mb-2" />
                <p className="text-gray-600 text-sm mb-1">Chats Today</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <MessageSquare className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-gray-600 text-sm mb-1">Agents</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
                <Clock className="w-6 h-6 text-orange-600 mb-2" />
                <p className="text-gray-600 text-sm mb-1">Avg Response</p>
                <p className="text-2xl font-bold text-gray-900">2.3m</p>
              </div>
            </div>

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
                      name: "Sarah Johnson",
                      msg: "5m ago",
                      badge: "bg-green-100 text-green-800",
                    },
                    {
                      name: "Mike Chen",
                      msg: "10m ago",
                      badge: "bg-green-100 text-green-800",
                    },
                    {
                      name: "Lisa Park",
                      msg: "15m ago",
                      badge: "bg-yellow-100 text-yellow-800",
                    },
                    {
                      name: "David Kim",
                      msg: "Earlier today",
                      badge: "bg-gray-100 text-gray-800",
                    },
                  ].map((agent, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full" />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">
                            {agent.name}
                          </p>
                          <p className="text-xs text-gray-500">{agent.msg}</p>
                        </div>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${agent.badge}`}
                      >
                        {agent.name.split(" ")[0]}
                      </span>
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
                    { name: "Ana Rodriguez", satisfaction: 98 },
                    { name: "Lisa Park", satisfaction: 96 },
                    { name: "David Kim", satisfaction: 94 },
                    { name: "Rachel Lee", satisfaction: 92 },
                  ].map((agent, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full" />
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
