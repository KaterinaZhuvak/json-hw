const studentName = document.querySelector("#name")
const studentLastName = document.querySelector("#surname")
const studentAge = document.querySelector("#age")
const studentCourse = document.querySelector("#course")
const studentFaculty = document.querySelector("#faculty")
const button = document.querySelector("button")
const form = document.querySelector("#student-form")

const students = []

const studentsInfo = () => {
  const name = studentName.value
  const surname = studentLastName.value
  const age = studentAge.value
  const course = studentCourse.value
  const faculty = studentFaculty.value
  students.push({ name, surname, age, course, faculty })
  form.reset()

}
import studentsTemplate from "../templates/students.hbs";


button.addEventListener("click", (e) => {
  e.preventDefault()
  studentsInfo()


  const studentsHtml = studentsTemplate({ students })
  const studentsContainer = document.getElementById("student-container")
  studentsContainer.innerHTML = studentsHtml
  console.log(studentsHtml);


})
console.log({ students });
  




    