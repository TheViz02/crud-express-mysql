const prisma = require('../../prisma');

const userRegsistration = (req, res) => {
    (async function () {
        let userData = req.body;
        // let timestamp = new Date().toJSON();
        await prisma.$connect();
        await prisma.sampCollection.create({
            data: {
                name: userData.name,
                age: parseInt(userData.age),
                gender: userData.gender,
                email: userData.email,
                address: userData.address,
                about: userData.about
            }
        })
        res.json({ message: "User Created Successfully" });
    })().then(async () => {
        await prisma.$disconnect()
    }).catch(async (err) => {
        console.log(err);
        await prisma.$disconnect()
        process.exit(1);
    });
};

const userLogin = (req, res, next)=>{
    // Logic for user login
}
module.exports = {
    userRegsistration, userLogin
}