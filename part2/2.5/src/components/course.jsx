const Header = ({header}) => <h2>{header}</h2>
const Content = ({content}) => content.map(part => <Part key={part.id} part={part} />)
const Part = ({part}) => <p>{part.name} {part.exercises}</p>
const Total = ({parts}) => <p> <b>total {parts.reduce((total, part) => total + part.exercises, 0)} of exercises</b></p>

const Course = ({ course }) => {
  return (
  <>
    <Header header={course.name} />
    <Content content={course.parts} />
    <Total parts={course.parts} />
  </>
  )
}

export default Course