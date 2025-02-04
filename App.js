//const heading = React.createElement("h1", { id: "heading" }, "Hello from React");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "H1 tag"),
    React.createElement("h2", { id: "heading" }, "H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "H1 tag"),
    React.createElement("h2", { id: "heading" }, "H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
