const express = require("express")
const cors = require("cors")
const { PrismaClient } = require("@prisma/client")

const app = express()
const port = 5000

const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

//======== Insert Users ========= //
app.post("/api/create", async (req, res) => {
  const { name, age } = req.body

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        age: parseInt(age),
      },
    })

    res.status(200).json({ message: "User created sucessfully" })
  } catch (err) {
    console.error("Error saving data", err)
    res.status(500).json({ message: "Error saving data" })
  }
})

//========= Search Users ========= //
app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (err) {
    console.error("Error fetching data:", err)
    res.status(500).json({ message: "Error fetching data" })
  }
})

//========== Delete Users ========//
app.delete("/api/delete/:userId", async (req, res) => {
  const { userId } = req.params

  try {
    const deletedUser = await prisma.user.delete({
      where: { id: parseInt(userId) },
    })
    res.status(200).json({ message: "User deleted successfully", deletedUser })
  } catch (err) {
    console.error("Error deleting data", err)
    res.status(500).json({ message: "Error deleting data" })
  }
})

//============ Update User ========== //
app.put("/api/users/:userId", async (req, res) => {
  const { userId } = req.params
  const { name, age } = req.body

  try {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { name, age : parseInt(age) },
    })

    res.status(200).json({ message: "User updated successfully", updatedUser })
  } catch (err) {
    console.error("Error updating data:", err)

    if (err.code === "P2025") {
      // P2025 is the code for "Record to update not found"
      res.status(404).json({ message: "User not found" })
    } else {
      res.status(500).json({ message: "Error updating data" })
    }
  }
})

app.listen(port, () => {
  console.log(`Server port ${port}`)
})
