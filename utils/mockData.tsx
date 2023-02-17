export const getData = () => {
    const data = [{
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      status: "Active",
      role: "Admin",
      age: 27,
      imgUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Product Directives Officer",
      department: "Intranet",
      status: "Active",
      role: "Owner",
      imgUrl:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Forward Response Developer",
      department: "Directives",
      status: "Active",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Central Security Manager",
      department: "Program",
      status: "Active",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Lean Implementation Liaison",
      department: "Mobility",
      status: "Active",
      role: "Admin",
      imgUrl:
        "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Cameron Williamson",
      email: "cameron.williamson@example.com",
      title: "Internal Applications Engineer",
      department: "Security",
      status: "Active",
      role: "Member",
      imgUrl:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },]
    return [...data, ...data, ...data];
};


export const testProgressBarData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

export const carouselData = [
  {id: 0,image: "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg", active:false},
  {id: 1,image: "/gorsel1.jpg", active:true},
  {id: 2, image: "/gorsel2.jpg", active: false}
]