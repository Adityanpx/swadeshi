import connectDB from "../../../utils/connectDB";
import Users from '../../../models/userModel'
import bcrypt from 'bcrypt'

connectDB();

export default async (req, res) => {
    switch (req.method) {
        case "POST":
            await register(req, res)
            break;
    }
}

const register = async (req, res) => {
    try {
        let { email, password, name, } = req.body

        // Trim extra spaces from the userName
        email = email.trim();

        // Check if userName already exists (after trimming)
        const user = await Users.findOne({ email });

        if (user) {
            return res.status(400).json({ err: 'Email already exists!' });
        }
        const passwordHash = await bcrypt.hash(password, 12);


        const newUser = new Users({
            email,
            password: passwordHash,
            role,
            name,
        });

        await newUser.save();

        res.json({ msg: "Successful Registration!" });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}
