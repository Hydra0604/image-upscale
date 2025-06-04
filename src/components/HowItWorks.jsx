import React from 'react';
import { FiUpload, FiSettings, FiDownload } from 'react-icons/fi';

const steps = [
  {
    title: 'Upload Your Image',
    description: 'Select the image you want to enhance from your device.',
    icon: <FiUpload />,
  },
  {
    title: 'AI Enhancement',
    description: 'Our AI algorithms automatically improve your image’s quality.',
    icon: <FiSettings />,
  },
  {
    title: 'Download Enhanced Image',
    description: 'Download your enhanced image in high resolution.',
    icon: <FiDownload />,
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      <p className="text-gray-600 mb-8">Simple Steps to Stunning Images</p>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6 border-2" style={{ borderColor: '#7b96c763' }}>
            <div className="text-3xl text-blue-600 mb-4">{step.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
