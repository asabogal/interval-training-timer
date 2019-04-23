(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,n){e.exports=n.p+"static/media/IntroAlert.8ecbe56d.mp3"},38:function(e,t,n){e.exports=n.p+"static/media/IntervalAlert.7a55923a.mp3"},43:function(e,t,n){e.exports=n(66)},59:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(20),i=n.n(s),o=n(80),l=n(81),c=n(82),u=n(9),m=n(10),p=n(13),g=n(11),h=n(14),E=n(75),d=n(76),f=n(77),v=n(71),S=n(79),T=n(72),b=n(73),O=n(22),C=n(67),y=n(68),j=n(69),N=n(70),w="http://localhost:3001",k=n(16),_=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(O.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault(),n.props.createWorkout(n.state),n.props.setCustomSettings(n.state),n.props.toggle()},n.state={name:"",sets:0,running_sets:0,interval:0,rest:0,running:!1,running_time:0},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{onSubmit:this.handleSubmit},r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Workout Name"),r.a.createElement(N.a,{onChange:this.handleChange,name:"name",value:this.state.name,bsSize:"sm",required:!0})),r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Number of Sets"),r.a.createElement(N.a,{onChange:this.handleChange,type:"number",min:"1",name:"sets",value:this.state.sets,bsSize:"sm"})),r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Interval Length (secs)"),r.a.createElement(N.a,{onChange:this.handleChange,type:"number",min:"3",max:"60",name:"interval",value:this.state.interval,bsSize:"sm"})),r.a.createElement(y.a,null,r.a.createElement(j.a,null,"Rest Length (secs)"),r.a.createElement(N.a,{onChange:this.handleChange,type:"number",min:"3",max:"60",name:"rest",value:this.state.rest,bsSize:"sm"})),r.a.createElement(y.a,null,r.a.createElement(N.a,{type:"submit",value:"Update Settings",bsSize:"sm"}))))}}]),t}(r.a.Component),I=Object(k.b)(null,{createWorkout:function(e){var t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({workout:e})};return function(e){fetch("".concat(w,"/workouts"),t).then(function(e){return e.json()}).then(function(t){return e({type:"CREATE_WORKOUT",workout:t})}).catch(function(e){return e})}}})(_),R=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).toggle=function(){n.setState({modal:!n.state.modal})},n.state={modal:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{outline:!0,color:"info",size:"sm",onClick:this.toggle},"Customize"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(T.a,{toggle:this.toggle},"Customize Settings:"),r.a.createElement(b.a,null,r.a.createElement(I,{setCustomSettings:this.props.setCustomSettings,toggle:this.toggle}))))}}]),t}(r.a.Component),A=n(74),U=function(e){var t=e.workout,n=e.setCustomSettings,a=e.toggle;return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){n(t),a()}},t.name))},W=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchWorkouts()}},{key:"render",value:function(){var e=this.props,t=e.workouts,n=e.setCustomSettings,a=e.toggle;return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(U,{key:e.id,workout:e,setCustomSettings:n,toggle:a})}))}}]),t}(r.a.Component),x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).toggle=function(){n.setState({modal:!n.state.modal})},n.state={modal:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.workouts,n=e.setCustomSettings,a=e.fetchWorkouts;return r.a.createElement("div",null,r.a.createElement(v.a,{outline:!0,color:"info",size:"sm",onClick:this.toggle},"Workouts"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(T.a,{toggle:this.toggle},"Workouts"),r.a.createElement(b.a,null,r.a.createElement(W,{workouts:t,setCustomSettings:n,fetchWorkouts:a,toggle:this.toggle})),r.a.createElement(A.a,null)))}}]),t}(r.a.Component),D=Object(k.b)(function(e){return{workouts:e.workouts}},{fetchWorkouts:function(){var e={method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}};return function(t){fetch("".concat(w,"/workouts"),e).then(function(e){return e.json()}).then(function(e){return t({type:"FETCH_WORKOUTS",workouts:e})}).catch(function(e){return e})}}})(x),G=function(e){var t=e.setCustomSettings;return r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement(D,{setCustomSettings:t}),r.a.createElement(R,{setCustomSettings:t}))),r.a.createElement("hr",{className:"my-2"}))},z=function(e){var t=e.name,n=e.sets,a=e.runningSets,s=e.interval,i=e.rest,o=e.runningTime,l=function(e){var t=Math.floor(e/60),n=e-60*t;return n<10?r.a.createElement("h1",{className:"display-2"},"0",t,":0",n):r.a.createElement("h1",{className:"display-2"},"0",t,":",n)},c=function(e){var t=Math.floor(e/60),n=e-60*t;return n<10?r.a.createElement("h1",{className:"display-1"},"0",t,":0",n):r.a.createElement("h1",{className:"display-1"},"0",t,":",n)};return r.a.createElement(E.a,{className:"container-bg"},r.a.createElement(d.a,null,r.a.createElement(f.a,null,r.a.createElement("h5",null,t),"Set ",a+1,"/",n,function(e,t){return t>0?l(t):0===t?c(e):r.a.createElement("h3",null,"--")}(s,i),"Elapsed",function(e){var t=Math.floor(e/60),n=e-60*t;return n<10?r.a.createElement("p",null,"0",t,":0",n):r.a.createElement("p",null,"0",t,":",n)}(o))))},H=function(e){var t=e.handleStartStop,n=e.handleResetTimer,a=e.running;return r.a.createElement(E.a,null,r.a.createElement("hr",{className:"my-2"}),r.a.createElement("div",null,r.a.createElement(v.a,{className:"btn-circle btn-xl",outline:!0,color:"info",onClick:t},a?"PAUSE":"START")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(v.a,{outline:!0,color:"info",onClick:n},"Reset")))},L=n(37),M=n.n(L),P=n(38),K=n.n(P),J=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).setCustomSettings=function(e){n.props.setCustomSettings(e),n.currentSettings=e,n.props.state.running&&n.stopTimer()},n.handleStartStop=function(){n.props.state.running?n.stopTimer():n.startTimer()},n.startTimer=function(){console.log("timer state is:",n.props.state),n.props.state.sets>0?(n.props.updateRunning(),n.props.state.rest>0?n.restTimer=setInterval(n.restCountdown,1e3):n.intervalTimer=setInterval(n.intervalCountdown,1e3)):n.props.updateRunningSets(n.props.state.sets)},n.restCountdown=function(){var e=n.props.state.rest-1,t=n.props.state.running_time+1;n.props.restCountdown(e,t),n.playAlert(),0===e&&(clearInterval(n.restTimer),n.intervalTimer=setInterval(n.intervalCountdown,1e3))},n.intervalCountdown=function(){var e=n.props.state.interval-1,t=n.props.state.running_time+1;if(n.props.intervalCountdown(e,t),n.playAlert(),0===e){clearInterval(n.intervalTimer);var a=n.props.state,r=a.sets,s=a.running_sets,i=n.currentSettings,o=i.interval,l=i.rest;n.props.reloadTimer(r,s,o,l),n.startTimer()}},n.stopTimer=function(){n.pauseAlert(),clearInterval(n.restTimer),clearInterval(n.intervalTimer),n.props.stopRunning()},n.handleResetTimer=function(){n.stopTimer(),n.props.setCurrentSettings(n.currentSettings)},n.playAlert=function(){var e=n.alerts.introAlert,t=n.alerts.intervalAlert;3===n.props.state.rest?(e.volume=.3,e.play()):0===n.props.state.interval&&(t.volume=.3,t.play())},n.pauseAlert=function(){var e=n.alerts.introAlert;e.pause(),e.currentTime=n.currentSettings.rest},n.currentSettings={name:"",sets:0,runningSets:0,interval:0,rest:0,running:!1,runningTime:0},n.alerts={introAlert:new Audio(M.a),intervalAlert:new Audio(K.a)},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.state,t=e.name,n=e.rest,a=e.interval,s=e.running_sets,i=e.running,o=e.running_time,l=this.currentSettings.sets;return r.a.createElement("div",{className:"App timer-container"},r.a.createElement(G,{setHighIntensity:this.setHighIntensity,setLowIntensity:this.setLowIntensity,setCustomSettings:this.setCustomSettings}),r.a.createElement(z,{name:t,runningSets:s,sets:l,interval:a,rest:n,runningTime:o}),r.a.createElement(H,{handleStartStop:this.handleStartStop,handleResetTimer:this.handleResetTimer,running:i}))}}]),t}(r.a.Component),B=Object(k.b)(function(e){return{state:e.settings}},{setCustomSettings:function(e){return{type:"SET_CUSTOM_SETTINGS",settings:e}},updateRunning:function(){return{type:"UPDATE_RUNNING"}},updateRunningSets:function(e){return{type:"UPDATE_RUNING_SETS",runningSets:e}},stopRunning:function(){return{type:"STOP_RUNNING"}},restCountdown:function(e,t){return{type:"REST_COUNTDOWN",currentSeconds:e,elapsedTime:t}},intervalCountdown:function(e,t){return{type:"INTERVAL_COUNTDOWN",currentSeconds:e,elapsedTime:t}},reloadTimer:function(e,t,n,a){return{type:"RELOAD_TIMER",sets:e,running_sets:t,interval:n,rest:a}},setCurrentSettings:function(e){return{type:"SET_CURRENT_SETTINGS",settings:e}}})(J),F=n(78),V=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"High-intensity interval training (HIIT), also called high-intensity intermittent exercise (HIIE) or sprint interval training (SIT), is a form of interval training, a cardiovascular exercise strategy alternating short periods of intense anaerobic exercise with less intense recovery periods, until too exhausted to continue.  "),r.a.createElement("p",null,"Use this timer to set your HIIT excersice and rest intervals. Typically ranging from 15 to 30 sets of 30 to 60 seeconds of excercise, followed by 10 to 20 seconds of rest."),r.a.createElement("p",null,"Default configurations are provided, however, you can customize your own."))},Y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(p.a)(this,Object(g.a)(t).call(this,e))).toggle=function(){n.setState({modal:!n.state.modal})},n.state={modal:!1},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F.a,{className:"App-link",to:"/",color:"info",onClick:this.toggle},"About"),r.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(T.a,{toggle:this.toggle},"Interval Trainig Timer"),r.a.createElement(b.a,null,r.a.createElement(V,null))))}}]),t}(r.a.Component),q=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h5",null,"Interval Training Timer"),r.a.createElement(Y,{className:"App-link"}))},$=(n(59),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(q,null),r.a.createElement(B,null))}}]),t}(a.Component)),Q=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:$}),r.a.createElement(c.a,{path:"/timer",component:B}),r.a.createElement(c.a,{exact:!0,path:"/workouts",component:D}),r.a.createElement(c.a,{exact:!0,path:"/workouts/new",component:R}),r.a.createElement(c.a,{path:"/about",component:V})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(62),n(64);var X=n(17),Z=n(18),ee={name:"",sets:0,running_sets:0,interval:0,rest:0,running:!1,running_time:0},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_HIGH_INTENSITY":case"SET_LOW_INTENSITY":case"SET_CUSTOM_SETTINGS":return t.settings;case"UPDATE_RUNNING":return Object(Z.a)({},e,{running:!0});case"STOP_RUNNING":return Object(Z.a)({},e,{running:!1});case"UPDATE_RUNING_SETS":return Object(Z.a)({},e,{running_sets:t.runningSets});case"REST_COUNTDOWN":return Object(Z.a)({},e,{rest:t.currentSeconds,running_time:t.elapsedTime});case"INTERVAL_COUNTDOWN":return Object(Z.a)({},e,{interval:t.currentSeconds,running_time:t.elapsedTime});case"RELOAD_TIMER":return Object(Z.a)({},e,{sets:t.sets-1,running_sets:t.running_sets+1,interval:t.interval,rest:t.rest});case"SET_CURRENT_SETTINGS":return t.settings;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WORKOUTS":return t.workouts;case"CREATE_WORKOUT":return e.concat(t.workout);default:return e}},ae=Object(X.c)({settings:te,workouts:ne}),re=n(40),se=n.n(re),ie=n(41),oe=Object(X.d)(ae,Object(X.a)(se.a,ie.a));i.a.render(r.a.createElement(k.a,{store:oe},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.382f64a8.chunk.js.map