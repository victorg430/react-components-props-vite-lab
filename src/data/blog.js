// Mock data object representing the blog's configuration and articles
const blogData = {
  name: "Over the Wire",
  image: "https://via.placeholder.com/215",
  about: "A developer's journey through state, props, and everything in between.",
  posts: [
    {
      id: 1,
      title: "Components 101",
      date: "May 15, 2026",
      preview: "Setting up your very first functional component in React.",
    },
    {
      id: 2,
      title: "The Magic of Props",
      date: "May 16, 2026",
      preview: "Passing data down dynamically without losing your sanity.",
    },
    {
      id: 3,
      title: "Thinking in React",
      preview: "Architecting applications the functional way.", // Testing fallback date
    }
  ],
};

export default blogData;
