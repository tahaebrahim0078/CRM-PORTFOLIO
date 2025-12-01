"use client";

import Link from "next/link";
import { IoPersonCircleSharp } from "react-icons/io5";
import {
  FadeIn,
  HoverScale,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/Animations";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-indigoCustom to-purpleCustom text-white py-16 md:py-44">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                  Smart Chat Solution for Every Business
                </h1>
                <p className="text-lg  text-purple-100 ">
                  Integrate powerful chat functionality into any project with
                  our SaaS platform. Multi-agent dashboard and real-time
                  analytics included.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <HoverScale>
                  <Link
                    href="/signup"
                    className="bg-white border-white border-2 text-indigoCustom px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Start Free Trial
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link
                    href="/#dashboard"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:text-indigoCustom hover:bg-white  transition focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Watch Demo
                  </Link>
                </HoverScale>
              </div>
              {/* Feature List */}

              <StaggerContainer staggerDelay={0.1}>
                <div className="flex  items-center justify-start gap-6 mt-8">
                  <StaggerItem>
                    <div className="flex    items-center gap-3">
                      <RiCheckboxCircleFill className="text-xl" />
                      <span>Easy Integration</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-3">
                      <RiCheckboxCircleFill className="text-xl" />

                      <span>Multi-Agent Support</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex items-center gap-3">
                      <RiCheckboxCircleFill className="text-xl" />
                      <span>Real-time Analytics</span>
                    </div>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Right Side - Chat Preview */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <div className="bg-white/10 bg-opacity-95 rounded-2xl p-6 shadow-2xl">
                {/* Chat Messages */}
                <div className="space-y-4">
                  {/* Bot Message */}
                  <div className="flex gap-3">
                    <div
                      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <MdSupportAgent className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-xl px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">
                        Hello! How can I help you?
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex justify-end gap-3">
                    <div className="bg-indigoCustom rounded-xl text-white rounded-2xl px-4 py-2 max-w-xs">
                      <p className="text-sm">I need help with my order</p>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <IoPersonCircleSharp className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex gap-3">
                    <div
                      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
                      aria-hidden="true"
                    >
                      <MdSupportAgent className="w-5 h-5 text-white" />
                    </div>
                    <div className="bg-white/20 rounded-xl px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">
                        I can help you with that! Let me check...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
