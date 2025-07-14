import Tip from '../models/Tip.js';

export const addTip = async (req, res) => {
  const { text, addedBy } = req.body;
  try {
    const tip = await Tip.create({ text, addedBy });
    res.json(tip);
  } catch {
    res.status(500).json({ msg: 'Failed to add tip' });
  }
};

export const getTips = async (req, res) => {
  try {
    const tips = await Tip.find().sort({ createdAt: -1 });
    res.json(tips);
  } catch {
    res.status(500).json({ msg: 'Error fetching tips' });
  }
};


export const deleteTip = async (req, res) => {
  const { id } = req.params;

  try {
    const tip = await Tip.findByIdAndDelete(id);
    if (!tip) {
      return res.status(404).json({ message: 'Tip not found' });
    }
    res.json({ message: 'Tip deleted successfully' });
  } catch (error) {
    console.error('Delete tip error:', error.message);
    res.status(500).json({ message: 'Failed to delete tip' });
  }
};
