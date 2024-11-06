const Voter = require('./Voter');
const Vote = require('./Vote');

exports.vote = async (req, res) => {
  const { voterName, candidateIds } = req.body;

  try {
    let voter = await Voter.findOne({ name: voterName });
    if (!voter) {
      voter = new Voter({ name: voterName });
      await voter.save();
    }

    const vote = new Vote({
      voterId: voter._id,
      candidateIds,
    });
    await vote.save();

    res.status(200).send('Vote counted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error counting vote');
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $unwind: "$candidateIds" },
      {
        $group: {
          _id: "$candidateIds",
          voteCount: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving results');
  }
};
