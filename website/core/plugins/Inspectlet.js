const React = require("react");

const inlineScript = `
  window.__insp = window.__insp || [];
  __insp.push(['wid', 664419537]);
  (function() {
    function ldinsp(){if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
    setTimeout(ldinsp, 500); document.readyState != "complete" ? (window.attachEvent ? window.attachEvent('onload', ldinsp) : window.addEventListener('load', ldinsp, false)) : ldinsp();
  })();
`;

class Inspectlet extends React.Component {
  render() {
    return <script type="text/javascript" id="inspectletjs" dangerouslySetInnerHTML={{ __html: inlineScript }} />;
  }
}

module.exports = Inspectlet;
