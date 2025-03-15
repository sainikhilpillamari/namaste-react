const parent= React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"Hey H1"),
        React.createElement("h2",{},"Hey H2")
    ]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);