const testMiddleware = (req, res, next) => {
    console.log('the middleware has fired')
    next()
}

const test2 = (req, res, next) => {
    req.body = { name: "Roman" }
    next()
}

module.exports = { testMiddleware, test2 }