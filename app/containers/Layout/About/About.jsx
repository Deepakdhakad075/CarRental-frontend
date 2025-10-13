import React from 'react';
import Container from '@/components/custom-pages/container';

function About() {
  return (
    <Container
      variant="white"
      header={
        <>
          <h1
            className="  text-4xl rounded-xl font-bold text-white text-center mt-20 mb-4 p-6
            "
            style={{ backgroundColor: 'rgba(49, 46, 129, 0.6)' }}
          >
            About Us
          </h1>
          <div className="ma px-4 text-gray-700 text-base leading-relaxed space-y-6">
            <p>
              <strong>MyChoize Self Drive Cars</strong> is a self-drive car
              rental service powered by <strong>ORIX</strong>, Japan’s
              second-largest car rental company. With a fleet of over{' '}
              <strong>63,000 vehicles</strong>, we bring Japanese innovation,
              reliability, and convenience to Indian roads. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Deserunt facere, sint
              cumque ipsa eum iusto voluptatem blanditiis assumenda, harum,
              quidem quae enim! Quasi ducimus ab, veniam magnam velit architecto
              dolorem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem veniam nihil esse adipisci eaque et! Tempora
              voluptatibus quis numquam blanditiis ea fugiat, recusandae
              repellat et est ab, nihil cumque mollitia?
            </p>
            <p>
              Whether you're planning a vacation, a weekend getaway, or simply
              need a car for your daily commute, MyChoize offers the freedom to
              drive on your own terms. Our fleet includes hatchbacks, sedans,
              SUVs, and MUVs — all available for{' '}
              <strong>daily, weekly, or monthly rentals</strong>.
            </p>
            <p>
              We proudly operate in major cities across India including{' '}
              <em>
                Bangalore, Pune, Mumbai, Delhi-NCR, Hyderabad, Chennai, Kolkata,
                Jaipur, Indore, Chandigarh, Amritsar, Dehradun, Rishikesh,
                Haridwar, and Udaipur
              </em>
              . Our goal is to make self-drive mobility accessible, affordable,
              and enjoyable for everyone.
            </p>
            <p>
              Discover the joy of driving with{' '}
              <a
                href="/self-drive"
                className="text-indigo-700 underline hover:text-indigo-900"
              >
                self drive car rentals
              </a>{' '}
              and experience the road like never before.
            </p>
          </div>
        </>
      }
    />
  );
}

export default About;
