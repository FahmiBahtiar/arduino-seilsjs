/**
 * Module dependencies
 */
const Reviews = require('../../models/Reviews');
// const now = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
const now = "2022-12-02"
// ...


/**
 * reviews/get-one.js
 *
 * Get one.
 */
module.exports = async function getOne(req, res) {
  const reviews = await Reviews.find({ reportDate: now });
  res.status(200).json({
    success: true, reviews
  });
};
