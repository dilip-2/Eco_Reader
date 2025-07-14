import Post from '../models/Post.js';

export const createPost = async (req, res) => {
  const { title, content, tags } = req.body;
  try {
    const newPost = await Post.create({
      title,
      content,
      tags,
      createdBy: req.user.id
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating post' });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('createdBy', 'name');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching posts' });
  }
};
