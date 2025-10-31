const authorizeEditor = (req, res, next) => {
  const role= req.user
  if (role.access==="EDITOR" || role.access==="ADMIN"){
    next()
  }else{
    res.status(403).json({ "err": "EDITOR access required." })
  }
};
