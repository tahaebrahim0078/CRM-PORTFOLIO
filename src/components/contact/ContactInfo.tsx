import { Mail, Phone, MapPin } from "lucide-react";
import { FadeIn, HoverScale } from "@/components/common/Animations";

export default function ContactInfo() {
  return (
    <FadeIn direction="left">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Contact Information
        </h2>

        {/* Email */}
        <HoverScale>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Email
              </h3>
              <p className="text-gray-600">support@chatflow.com</p>
              <p className="text-gray-600">sales@chatflow.com</p>
            </div>
          </div>
        </HoverScale>

        {/* Phone */}
        <HoverScale>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Phone
              </h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
        </HoverScale>

        {/* Address */}
        <HoverScale>
          <div className="flex gap-4 items-start">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Office
              </h3>
              <p className="text-gray-600">123 Tech Street</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
            </div>
          </div>
        </HoverScale>

        {/* Response Time */}
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Average response time:</span> We
            typically respond within 24 hours.
          </p>
        </div>
      </div>
    </FadeIn>
  );
}
