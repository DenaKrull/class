module.exports = (theMagicWord = 'please') => {
  (req, res, next) => {
    if (req.searchParams.get('magicWord') === theMagicWord) {
      return next();
    }
    next('you didnt say the magic word');
  };
}