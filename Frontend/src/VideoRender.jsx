import React from 'react';

// List of YouTube video URLs
const videoUrls = [
  'https://www.youtube.com/embed/0-S5a0eXPoc',
  'https://www.youtube.com/embed/ZBCUegTZF7M',
  // Add more video URLs here
];

const VideoRender = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold  text-center text-gradient bg-gradient-to-r from-purple-800 via-cyan-600 to-violet-700 inline-block text-transparent bg-clip-text">
        Video Gallery
      </h2>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoUrls.map((videoUrl, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-12">
              <iframe
                src={videoUrl}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Video {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoRender;
