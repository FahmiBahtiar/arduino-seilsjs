/**
 * Module dependencies
 */
const Reviews = require('../../models/Reviews');
// const now = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
const now = "2022-12-02"

// ...


/**
 * reviews/create.js
 *
 * Create reviews.
 */
module.exports = async function create(req, res) {

  const review = await Reviews.findOne({
    reportDate: now
  });
  console.log(review)

  if (review == null) {
    await Reviews.create({
      puas: req.body.puas,
      biasa: req.body.biasa,
      tidakPuas: req.body.tidakPuas,
      reportDate: now
    });
  } else {
    await Reviews.updateOne({ reportDate: now }, {
      $inc: {
        puas: req.body.puas,
        biasa: req.body.biasa,
        tidakPuas: req.body.tidakPuas
      }
    });

  }

  res.status(201).json({
    success: true,
    review,
  });

};
