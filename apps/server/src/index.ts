import 'dotenv/config'
import express from "express";
import { prisma } from "@repo/db";


const httpport = 3002;

const app = express();
app.use(express.json());

// Testing Server and Prisma
app.get("/", async (req, res) => {
  console.log("Hello World")
  const user = await prisma.user.findFirst();
  console.log(user);
  res.json({ message: "Hello World" , user });
});

app.listen(httpport, () => {
  console.log(`HTTP Server listening on port ${httpport}`);
});
