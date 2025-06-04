import React from 'react';

const BeforeAfter = () => {
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-semibold mb-4">Before & After</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src="/before.png" alt="Before" className="rounded-lg shadow" />
        <img src="/after.png" alt="After" className="rounded-lg shadow" />
      </div>
    </section>
  );
};

export default BeforeAfter;
