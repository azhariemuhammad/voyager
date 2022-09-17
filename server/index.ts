import express from "express";
import path from "path";
import handleRender from "./renderer";

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", handleRender);

app.use(
  express.static(path.resolve(__dirname, ".", "public"), { maxAge: "30d" })
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
