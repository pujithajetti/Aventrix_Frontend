import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Product Manager",
    image: "./assets/p1.jpeg",
    feedback:
      "Aventrix helped us modernize our business operations with scalable digital solutions. Their team delivered exceptional quality and support throughout the project lifecycle.",
  },
  {
    name: "Sneha Reddy",
    role: "UI/UX Designer",
    image: "./assets/p2.jpeg",
    feedback:
      "Working with Aventrix was a great experience. Their innovative approach, technical expertise, and commitment to deadlines exceeded our expectations.",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="text-gray-600 bg-gray-50 body-font"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1F44] mb-4">
            Testimonials
          </h1>

          <p className="max-w-2xl mx-auto text-gray-500">
            Discover what our clients say about their experience working with
            Aventrix and how our solutions helped them achieve their goals.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-6 h-6 text-blue-500 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>

                <p className="leading-relaxed mb-6 text-gray-600">
                  {testimonial.feedback}
                </p>

                <div className="inline-flex items-center">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <span className="flex flex-col pl-4">
                    <span className="font-semibold text-[#0A1F44]">
                      {testimonial.name}
                    </span>

                    <span className="text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;