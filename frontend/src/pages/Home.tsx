import Header from "../components/Header";
import Background from "../assets/Background.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const testimonials = [
  {
    quote: "Khdemni helped me find work in just 2 days!",
    author: "Ahmed, Gardener",
  },
  {
    quote: "It’s the easiest platform to find reliable freelance help.",
    author: "Sara, Homeowner",
  },
  {
    quote: "The UI is clean and intuitive. Highly recommend!",
    author: "Youssef, Designer",
  },
];

export default function Home() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    mode: "snap",
  });

  return (
    <>
      <Header />
      <div className="relative h-screen w-full">
        <img
          src={Background}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
            Khdemni: Ultimate Manual Service Provider
          </h1>
          <p className="text-xl max-w-2xl">
            Find or offer trusted services – fast, simple, and secure.
          </p>
          <button className="mt-8 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all">
            Get Started
          </button>
        </div>
      </div>

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">What Users Are Saying</h2>
        <div ref={sliderRef} className="keen-slider max-w-xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-gray-100 rounded-xl p-6 shadow-md"
            >
              <p className="text-lg italic mb-3">"{t.quote}"</p>
              <p className="font-semibold text-yellow-700">- {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Khdemni?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          We connect clients with reliable freelancers across gardening,
          babysitting, tutoring, design, and more. Our goal? Empower local
          service providers and make help accessible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fast Matching</h3>
            <p>Find or offer services in minutes, not days.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Trusted Network</h3>
            <p>All workers are vetted and reviewed by the community.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Flexible</h3>
            <p>Choose when and how you want to work or hire.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-400 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Khdemni Today</h2>
        <p className="text-lg mb-6">
          Start browsing services or create your profile as a provider.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Sign Up Now
        </button>
      </section>
    </>
  );
}
