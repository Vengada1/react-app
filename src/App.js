import './App.css';

export default function App() {
  return (
    <div className="App">
      <Details
        line1="FREE"
        line2="$"
        linee2="/month"
        linee3="0"
        access="✓"
        unacess="✕"
        lin1="Single User"
        lin2="5GB Storage"
        lin3="Unlimited Public Projects"
        lin4="Community Access"
        lin5="Unlimited Private Projects"
        lin6="Dedicated Phone Support"
        lin7="Free Subdomain"
        lin8="Monthly Status Reports"
      />

      <Details1
        line1="PLUS"
        line2="$"
        linee2="/month"
        linee3="9"
        access="✓"
        unacess="✕"
        lin1="5 Users"
        lin2="50GB Storage"
        lin3="Unlimited Public Projects"
        lin4="Community Access"
        lin5="Unlimited Private Projects"
        lin6="Dedicated Phone Support"
        lin7="Free Subdomain"
        lin8="Monthly Status Reports"
      />

      <Details2
        line1="PRO"
        line2="$"
        linee2="/month"
        linee3="49"
        access="✓"
        unacess="✕"
        lin1="5 Users"
        lin2="50GB Storage"
        lin3="Unlimited Public Projects"
        lin4="Community Access"
        lin5="Unlimited Private Projects"
        lin6="Dedicated Phone Support"
        lin7="Free Subdomain"
        lin8="Monthly Status Reports"
      />
    </div>
  );
}
function Details(prop) {
  return (
    <div className="card">
      <h5 id="header1">{prop.line1}</h5>
      <h3 id="header2">
        {prop.line2}
        {prop.linee3}
        <sub className="lower">{prop.linee2}</sub>
      </h3>
      <hr />
      <div id="inside">
        <p>
          <span>{prop.access} </span>
          {prop.lin1}
        </p>
        <p>
          <span>{prop.access} </span>
          {prop.lin2}
        </p>
        <p>
          <span>{prop.access} </span>
          {prop.lin3}
        </p>
        <p>
          <span>{prop.access} </span>
          {prop.lin4}
        </p>
        <p>
          <span>{prop.unacess} </span>
          {prop.lin5}
        </p>
        <p>
          <span>{prop.unacess} </span>
          {prop.lin6}
        </p>
        <p>
          <span>{prop.unacess} </span>
          {prop.lin7}
        </p>
        <p>
          <span>{prop.unacess} </span>
          {prop.lin8}
        </p>
        <button className="button">Buy</button>
      </div>
    </div>
  );
}

function Details1(prop) {
  return (
    <div className="card">
      <h5 className="header1">{prop.line1}</h5>
      <h3 className="header2">
        {prop.line2}
        {prop.linee3}
        <sub className="lower">{prop.linee2}</sub>
      </h3>
      <hr />
      <p className="header1">
        <span>{prop.access} </span>
        {prop.lin1}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin2}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin3}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin4}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin5}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin6}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin7}
      </p>
      <p>
        <span>{prop.unacess} </span>
        {prop.lin8}
      </p>
      <button className="button">Buy</button>
    </div>
  );
}

function Details2(prop) {
  return (
    <div className="card">
      <h5 className="header1">{prop.line1}</h5>
      <h3 className="header2">
        {prop.line2}
        {prop.linee3}
        <sub className="lower">{prop.linee2}</sub>
      </h3>
      <hr />
      <p className="header1">
        <span>{prop.access} </span>
        {prop.lin1}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin2}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin3}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin4}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin5}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin6}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin7}
      </p>
      <p>
        <span>{prop.access} </span>
        {prop.lin8}
      </p>
      <button className="button">Buy</button>
    </div>
  );
}
