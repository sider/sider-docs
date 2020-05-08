const React = require("react");

const appId = process.env.CONTEXT === "production" ? "rpwp2i8e" : "671su9bf";

class Intercom extends React.Component {
  intercomChat() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.intercomSettings = {
                app_id: "${appId}"
              };
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + "${appId}";var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `,
          }}
        />
      </>
    );
  }

  render() {
    return this.intercomChat();
  }
}

module.exports = Intercom;
