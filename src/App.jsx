import Accordion from "./components/Accordion"

function App() {
  const items = [
    {
      id: "one",
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab et delectus eligendi, vel fuga consequuntur! Odio voluptatum quos rerum nihil.",
    },
    {
      id: "two",
      label: "Can I use Javascript on a project?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam repellendus odio veniam id omnis molestiae corrupti eligendi voluptatum nostrum enim. You can use Javascript on any project you want. You can use Javascript on any project you want.",
    },
    {
      id: "three",
      label: "Can I use CSS on a project?",
      content:
        "You can use CSS on any project you want. You can use CSS on any project you want. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem hic aspernatur reprehenderit voluptate? Recusandae.",
    },
  ]
  return <Accordion items={items} />
}

export default App
