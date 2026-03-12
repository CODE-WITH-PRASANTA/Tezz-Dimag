const express = require('express')
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db")

const teacherRoutes = require("./routes/teacher.routes");
const testimonialRoutes = require("./routes/testimonial.routes")
const blogRoutes = require("./routes/blog.routes");



dotenv.config()
const app = express()


connectDB()

// middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


/* ================= STATIC FOLDER ================= */

app.use("/uploads", express.static("uploads"));

// Routes

app.get("/", (req, res) => {
  res.send("API Running...");
});


app.use("/api", teacherRoutes);
app.use("/api", testimonialRoutes)
app.use("/api", blogRoutes);



const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
      console.log(`Server running on port ${PORT}`);
})
