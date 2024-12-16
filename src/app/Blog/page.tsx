import React from 'react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for Choosing the Perfect Sofa',
      excerpt: 'A guide to finding a sofa that matches your style and comfort.',
      image: 'blog1.jpg',
      link: '/blog/choosing-perfect-sofa',
    },
    {
      id: 2,
      title: 'Eco-Friendly Furniture: A Sustainable Choice',
      excerpt: 'Learn how eco-friendly furniture can make a positive impact.',
      image: 'blog2.jpg',
      link: '/blog/eco-friendly-furniture',
    },
    {
      id: 3,
      title: 'Top Trends in Modern Furniture Design',
      excerpt: 'Explore the latest trends in contemporary furniture design.',
      image: 'blog3.jpg',
      link: '/blog/modern-furniture-trends',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Blog</h1>
        <p className="text-lg mb-8 text-center">
          Stay updated with the latest tips, trends, and ideas in furniture design and decor.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;