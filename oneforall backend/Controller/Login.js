const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const appuser = require("./Userschema");
const login = async (req, res) => {
    const { email, password } = req.body;
    const loginuser = await appuser.findOne({ email });
    
    if (loginuser && (await bcrypt.compare(password, loginuser.password))) {
        const userId = loginuser._id; // Extracting the user ID
        const token = tokengenerate(userId);
        res.json({ userId, token }); // Passing both userId and token in response
    } else {
        res.json("failed");
    }
};

const tokengenerate = (id) => {
    return jwt.sign({ id }, process.env.jwt_scret, {
        expiresIn: '1d'
    });
};

module.exports=login