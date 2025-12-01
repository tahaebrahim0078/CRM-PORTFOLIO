import { FadeIn } from "@/components/common/Animations";

export default function ContactHeader() {
  return (
    <div className="bg-gradient-to-br from-purpleCustom to-indigoCustom text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Have a question? We&apos;d love to hear from you. Send us a
              message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
