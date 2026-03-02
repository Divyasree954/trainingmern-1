const User = ({ name, age }) => {

  const skills = ["Java", "React", "JS","Node.js", "Express.js", "MongoDB"];

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div>User name = {name}</div>
      <h3>User age = {age}</h3>

      <button onClick={handleClick}>Click</button>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};
export default User;