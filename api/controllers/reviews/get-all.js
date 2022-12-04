/**
 * Module dependencies
 */

 const Reviews = require('../../models/Reviews');
 // const now = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
 const now = "2022-12-02"
 

// ...


/**
 * reviews/get-all.js
 *
 * Get all.
 */
module.exports = async function getAll(req, res) {

  const reviews = await Reviews.find();
  res.status(200).json({
      success: true, reviews
  });

};
