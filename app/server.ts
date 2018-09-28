import app from "./app";

const PORT = 8086;

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});