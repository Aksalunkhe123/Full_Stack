const mongoose = require("mongoose");
const readline = require("readline-sync");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/full_stack")
  .then(() => {
    console.log("✅ Connected to MongoDB");
    mainMenu();
  })
  .catch((err) => {
    console.log("❌ Connection Error:", err);
  });

// Student Schema
const studentSchema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  department: String,
});

// Student Model
const Student = mongoose.model("Student", studentSchema);

// Main Menu
async function mainMenu() {
  while (true) {
    console.log("\n========== Student Record System ==========");
    console.log("1. Insert New Student");
    console.log("2. Update Student");
    console.log("3. Delete Student");
    console.log("4. View All Students");
    console.log("5. Exit");

    const choice = readline.question("Enter your choice (1-5): ");

    switch (choice) {
      // INSERT
      case "1":
        const name = readline.question("Enter Name: ");
        const rollNo = parseInt(
          readline.question("Enter Roll Number: ")
        );
        const department = readline.question("Enter Department: ");

        const student = new Student({
          name,
          rollNo,
          department,
        });

        await student.save();
        console.log("✅ Student Inserted Successfully.");
        break;

      // UPDATE
      case "2":
        const updateRoll = parseInt(
          readline.question("Enter Roll Number to Update: ")
        );
        const newName = readline.question("Enter New Name: ");

        const updateResult = await Student.updateOne(
          { rollNo: updateRoll },
          { $set: { name: newName } }
        );

        if (updateResult.matchedCount > 0)
          console.log("✅ Student Updated Successfully.");
        else
          console.log("❌ Student Not Found.");

        break;

      // DELETE
      case "3":
        const deleteRoll = parseInt(
          readline.question("Enter Roll Number to Delete: ")
        );

        const deleteResult = await Student.deleteOne({
          rollNo: deleteRoll,
        });

        if (deleteResult.deletedCount > 0)
          console.log("✅ Student Deleted Successfully.");
        else
          console.log("❌ Student Not Found.");

        break;

      // VIEW
      case "4":
        const students = await Student.find();

        if (students.length === 0) {
          console.log("No Records Found.");
        } else {
          console.log("\n========== Student Records ==========");
          students.forEach((student) => {
            console.log(
              `Name: ${student.name}, Roll No: ${student.rollNo}, Department: ${student.department}`
            );
          });
        }

        break;

      // EXIT
      case "5":
        console.log("👋 Exiting...");
        await mongoose.connection.close();
        process.exit(0);

      default:
        console.log("❌ Invalid Choice. Please Enter 1 to 5.");
    }
  }
}