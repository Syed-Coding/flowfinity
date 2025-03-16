import React from 'react';
const posts = [
  { title: "5 Tips for a Healthier Lifestyle", date: "October 10, 2023", excerpt: "Discover simple yet effective tips to improve your health and well-being." },
  { title: "The Importance of Mental Health", date: "October 5, 2023", excerpt: "Learn why mental health is just as important as physical health." },
  { title: "How to Stay Active at Home", date: "October 1, 2023", excerpt: "Explore easy ways to stay active without leaving your home." },
];
const services = [
  { title: "Health Tracking", description: "Track your health metrics in real-time with our intuitive dashboard." },
  { title: "Personalized Plans", description: "Get customized health plans tailored to your unique needs and goals." },
  { title: "Expert Consultations", description: "Connect with certified health professionals for personalized advice." },
  { title: "Nutrition Guidance", description: "Receive expert nutrition plans to fuel your body and mind." },
  { title: "Fitness Programs", description: "Access curated fitness programs designed for all fitness levels." },
  { title: "Mental Wellness", description: "Explore resources and tools to support your mental health and well-being." },
];
const testimonials = [
  { name: "John Doe", review: "HealthProof has transformed the way I manage my health. Highly recommended!" },
  { name: "Jane Smith", review: "The personalized plans are a game-changer. I feel healthier than ever!" },
  { name: "Mike Johnson", review: "Expert consultations are top-notch. Great platform for health enthusiasts." },
];
function PreviewPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* navbar */}
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <a href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">HealthProof</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500">Home</a>
            <a href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500">About</a>
            <a href="#services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500">Services</a>
            <a href="#blog" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500">Blog</a>
  
          </div>
        </div>
      </div>
    </nav>
{/* hero */}
<div className="bg-green-50 py-20" id="#">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Your Health, Our Proof</h1>
        <p className="text-xl text-gray-600 mb-8">
          Empowering you to take control of your health with cutting-edge tools, personalized plans, and expert guidance.
        </p>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600">
          Get Started
        </button>
      </div>
    </div>

    {/* about */}
    <div className="py-16 bg-white" id="about" >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About HealthProof</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600">
              At HealthProof, we believe in empowering individuals to take control of their health. Our mission is to provide you with the tools, resources, and support you need to live a healthier, happier life.
            </p>
            <p className="text-gray-600">
              Whether you're tracking your fitness goals, managing a chronic condition, or simply looking to improve your overall well-being, HealthProof is here to help. Our platform combines advanced technology with expert insights to deliver personalized health solutions.
            </p>
            <p className="text-gray-600">
              Join thousands of users who have transformed their lives with HealthProof. Start your journey today!
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://usthealthproof.com/sites/default/files/2024-09/rebrand-content-thumbnail.svg"
              alt="About HealthProof"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
{/* service */}
<div className="py-16 bg-green-50" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* testimonial */}
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <p className="mt-4 font-semibold text-gray-800">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* blog */}
    <div className="py-16 bg-green-50" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600">{post.excerpt}</p>
              <a href="/blog" className="text-green-500 font-semibold mt-4 inline-block">Read More →</a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} HealthProof. All rights reserved.</p>
      </div>
    </footer>
    </div>
  );



}


export default PreviewPage