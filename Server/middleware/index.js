import admin from "../firebase";
import User from "../models/user";


export const findOrCreateUser = async (req, res, next) => {
    // console.log("REQ HEADERS TOKEN", req.headers.token);
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        // console.log("FIREBASE USER IN CURRENT USER MIDDLEWARE", firebaseUser);
        //save the user to db or send user response if it is already user
        const user = await User.findOne({ email: firebaseUser.email })
        if (user) {
            //send user response
            console.log('FOUND USER ====>', user)
            //add current user to req object;
            req.currentUser = user;
            next();
            // res.json(user);
        } else {
            //create new  user and then send that user as response
            // ryan@gamil.com
            //split("@")で発火させると ["ryan", "gmail.com"]
            let newUser = await new User({
                email: firebaseUser.email,
                name: firebaseUser.name
                    ? firebaseUser.name
                    : firebaseUser.email.split("@")[0],
                picture: firebaseUser.picture ? firebaseUser.picture : "/avatar.png"
            }).save()
            console.log("NEW USER ====>", newUser)
            req.currentUser = newUser;
            next()
        }
    } catch (err) {
        console.log(err);
        res.status(401).json({
            err: "Invalid or expired token",
        });
    }
};