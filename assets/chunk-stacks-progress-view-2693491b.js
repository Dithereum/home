System.register(["./chunk-vendor.js","./chunk-frameworks.js"],(function(){"use strict";var t,e,s,n,a;return{setters:[function(a){t=a.d,e=a._,s=a.c,n=a.b},function(t){a=t.c}],execute:function(){class Timer{startTimer(t,e){return setInterval((()=>{const s=document.getElementById("stacks-status-duration-"+e);s&&(s.innerHTML=this.getDurationBetweenTwoDateString(t,(new Date).toUTCString()))}),1e3)}freezeTimer(t,e,s){const n=document.getElementById("stacks-status-duration-"+s);n&&(n.innerHTML=this.getDurationBetweenTwoDateString(t,e))}getDurationBetweenTwoDateString(t,e){const s=(new Date(e).getTime()-new Date(t).getTime())/1e3;if(s<60)return s+"s";if(s<3600&&s>59){return`${Math.floor(s/60)}m ${Math.floor(s%60)}s`}{const t=s%3600;return`${Math.floor(s/3600)}h ${Math.floor(t/60)}m ${Math.floor(t%60)}s`}}}let i=class StacksProgressViewElement extends HTMLElement{constructor(){super(...arguments),this.stepMessages={"repo-cloning":"Generate repository contents",config:"Apply repository settings, create environments and add secrets","workflow-run":"Run setup workflow via GitHub Actions"},this.planStatusMessages={failed:{heading:"We couldn't setup your repository",subheading:"Something went wrong"},success:{heading:"Completed! Your stack is ready to go",subheading:"You can now start working on your repository"},in_progress:{heading:"Setting up your repository based on Stack...",subheading:"Depending on the stack, this might take up few minutes"}},this.intervalId=-1,this.dangerRedColor="#CB2431",this.renderStatusButton=t=>{const e=document.getElementById("stacks-status-failed-button");e&&e.setAttribute("style","failed"===t?"":"display:none");const s=document.getElementById("stacks-status-success-button");s&&s.setAttribute("style","success"===t?"":"display:none");const n=document.getElementById("stacks-status-in-progress-button");n&&n.setAttribute("style","display:none")}}connectedCallback(){this.subscription=a(this,"socket:message",(t=>{clearInterval(this.intervalId);const{data:e}=t.detail;this.render(e)}))}disconnectedCallback(){this.subscription&&this.subscription.unsubscribe()}render(e){for(let a=0;a<e.step_statuses.length;a++){const s=e.step_statuses[a].status,i=e.step_statuses[a].id;if(s&&i){const r=document.getElementById("stacks-status-icon-"+a);if(r)switch(s){case"in_progress":n(t`
    <div style="height:16px; width:16px;">
      <svg
        width="92%"
        height="92%"
        fill="none"
        viewBox="0 0 16 16"
        class="anim-rotate"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity=".5" d="M8 15A7 7 0 108 1a7 7 0 000 14v0z" stroke="#dbab0a" stroke-width="2"></path>
        <path d="M15 8a7 7 0 01-7 7" stroke="#dbab0a" stroke-width="2"></path>
        <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" fill="#dbab0a"></path>
      </svg>
    </div>
  `,r);break;case"success":n(t`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#28A745">
    <path
      fill-rule="evenodd"
      d="M8 16A8 8 0 108 0a8 8 0 000 16zm3.78-9.72a.75.75 0 00-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l4.5-4.5z"
    ></path>
  </svg>`,r);break;case"failed":n(t`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#D73A49">
    <path
      fill-rule="evenodd"
      d="M2.343 13.657A8 8 0 1113.657 2.343 8 8 0 012.343 13.657zM6.03 4.97a.75.75 0 00-1.06 1.06L6.94 8 4.97 9.97a.75.75 0 101.06 1.06L8 9.06l1.97 1.97a.75.75 0 101.06-1.06L9.06 8l1.97-1.97a.75.75 0 10-1.06-1.06L8 6.94 6.03 4.97z"
    ></path>
  </svg>`,r);break;default:n(t`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#959DA5">
    <path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path>
  </svg>`,r)}this.updateHtmlElement("stacks-status-message-"+a,this.stepMessages[i],"font-weight:bold;"),this.renderStatusDuration(e.step_statuses[a],a)}}const s=e.status;s&&(this.updateHtmlElement("stacks-status-heading",this.planStatusMessages[s].heading,"failed"===s?"color:"+this.dangerRedColor:""),this.updateHtmlElement("stacks-status-subheading",this.planStatusMessages[s].subheading,""),this.renderStatusButton(s))}renderStatusDuration(t,e){const s=new Timer;switch(t.status){case"in_progress":this.intervalId=s.startTimer(t.start_time,e);break;case"not_started":{const t=document.getElementById("stacks-status-duration-"+e);t&&(t.innerHTML="");break}default:s.freezeTimer(t.start_time,t.end_time,e)}}updateHtmlElement(t,e,s){const n=document.getElementById(t);n&&(n.innerHTML=e,n.setAttribute("style",s))}};i=e([s],i)}}}));
//# sourceMappingURL=chunk-stacks-progress-view-827ce4f9.js.map
