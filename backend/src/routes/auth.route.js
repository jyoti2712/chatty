import express from 'express';

const router = express.Router();

router.get("/signup", (req,res) => {
    res.send("signup route");
})

router.get("/login", (req,res) => {
    res.send("login route");
})


router.get("/signout", (req,res) => {
    res.send("signout route");
})

export default router;