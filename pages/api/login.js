import { withIronSession } from "next-iron-session";
import coockieData from "utils/coockieData";

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { email, password } = req.body;

      const passDecrypted = CryptoJS.AES.decrypt(
        process.env.NEXT_PUBLIC_SECRET_PASS,
        process.env.NEXT_PUBLIC_APPLICATION_SECRET
      ).toString(CryptoJS.enc.Utf8);

      if (email === VALID_EMAIL && password === passDecrypted) {
        req.session.set("user", { email });
        await req.session.save();
        return res.status(201).send("");
      }

      return res.status(403).send("");
    }

    return res.status(404).send("");
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: false,
    },
    password: process.env.NEXT_PUBLIC_APPLICATION_SECRET,
  }
);
