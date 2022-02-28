module.exports = (userInfo = { name: 'joe', pwd: 'putin' }) => {
  (req, res, next) => {
    console.log(req, req.headers);
    if (req.headers.authorization) {
      const useNamePwd = req.headers.authorization.split(' ')[1];
      const buffer = Buffer.from(useNamePwd, 'base64');
      const userName = buffer.toString().split(':');

      if (userName[0] === userInfo.name && userName[1] === userInfo.pwd) {
        console.log(userName);
        return next();
      }
    }

    res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="PCS Realm"' });
    res.end();
  };
};