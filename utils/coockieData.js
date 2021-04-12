export default () => ({
  cookieName: "MYSITECOOKIE",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production" ? true : false,
  },
  password: process.env.NEXT_PUBLIC_APPLICATION_SECRET,
});
