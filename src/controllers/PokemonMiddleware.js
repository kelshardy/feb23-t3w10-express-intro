// Function for authorisation
// If username is not kelsey, respond with message
// else, pass along to next function
function checkForKelsey (request, response, next) {
    // if body data contains a username and that is NOT equal to "kelsey"
    if (request.body.username != "kelsey"){
        // break out of our route chain immediately
        return response.json({
            message: "You are not authorised!"
        });
    } else {
        // move to the next step in the chain
        next();
    }
}

/*

instance.verb(
    path,
    middleware,
    checkForKelsey, --- > called response.json(), end of route --- > end
     |
     V
     called next(), moving to someOtherMiddleware
     |
     V
    someOtherMiddleware,
    someDifferentMiddleware,
    evenMoreMiddleware,
    asManyMiddlewareAsYouWant,
    routeFunctionOrCallback
    )

*/

module.exports = {
    checkForKelsey
}