const { contactUsEmail } = require("../mail/templates/contectUs");
const mailSender = require("../utils/mailSender")

exports.contactUs = async (req, res) => {
  const {firstName, lastName,email, countryCode,phoneNumber, message} = req.body
  try {
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(firstName, lastName,email, countryCode,phoneNumber, message)
    )
    return res.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.log("Error", error)
    console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    })
  }
}
