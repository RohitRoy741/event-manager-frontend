(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{132:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(12),r=a.n(i),c=(a(132),a(68)),l=a(69),o=a(81),d=a(79),h=a(107),u=a(16),j=a(36),m=a(90),b=a(21),v=a(30),p=a.n(v),f=a(17),O=a(214),g=a(212),x=a(211),y=a(105),D=a(196),C=a(104),S=a(197),w=a(209),k=a(2);function E(e,t){return Math.floor((e.getTime()-t.getTime())/1e3%60)}function N(e,t){return Math.floor((e.getTime()-t.getTime())/6e4%60)}function L(e,t){return Math.floor((e-t)/36e5)}var F=function(e){var t=new Date(e.eventDate),a=Object(n.useState)(new Date),s=Object(f.a)(a,2),i=s[0],r=s[1],c=Object(n.useState)(E(t,i)),l=Object(f.a)(c,2),o=l[0],d=l[1],h=Object(n.useState)(N(t,i)),u=Object(f.a)(h,2),j=u[0],m=u[1],b=Object(n.useState)(L(t,i)),v=Object(f.a)(b,2),p=v[0],O=v[1];return Object(n.useEffect)((function(){var e=setTimeout((function(){r(new Date)}),1e3);return function(){return clearTimeout(e)}}),[i]),Object(n.useEffect)((function(){d(E(t,i))}),[i,o]),Object(n.useEffect)((function(){m(N(t,i))}),[i,j]),Object(n.useEffect)((function(){O(L(t,i))}),[i,p]),Object(k.jsxs)("h3",{className:"timer",children:["Starts In: ",p," Hours, ",j," minutes and ",o," seconds"]})},A=function(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):null},P=function(){return sessionStorage.getItem("token")||null},V=function(e,t){sessionStorage.setItem("token",t),sessionStorage.setItem("user",JSON.stringify(e))};var I=function(e){var t=A(),a=Object(n.useState)(!1),s=Object(f.a)(a,2),i=s[0],r=s[1],c=function(){return r(!1)},l={};return e.image&&(l={backgroundImage:"linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url(".concat(e.image,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}),console.log(e.timeout),Object(k.jsxs)("div",{children:[Object(k.jsxs)(O.a,{expand:"lg",variant:"dark",bg:"primary",className:"navbar",children:[Object(k.jsx)(O.a.Brand,{href:"#home",children:"Event Manager"}),Object(k.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(O.a.Collapse,{id:"basic-navbar-nav",className:"navbar-items",children:Object(k.jsxs)(g.a,{children:[Object(k.jsx)(g.a.Link,{href:"#home",className:"navbar-item username",children:t.username}),Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 user-icon web",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),Object(k.jsx)(g.a.Link,{href:"#my-events",className:"navbar-item",onClick:e.showEvents,children:"Events"}),Object(k.jsx)(g.a.Link,{href:"#schedule",className:"navbar-item",onClick:e.showSchedule,children:"Schedule"}),Object(k.jsx)(g.a.Link,{href:"#link",className:"navbar-item",onClick:function(){return r(!0)},children:"Create-Event"}),Object(k.jsx)(g.a.Link,{href:"#history",className:"navbar-item logout",onClick:e.handleLogOut,children:"Logout"}),Object(k.jsx)("div",{onClick:e.handleLogOut,children:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 logout-icon web",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})})]}),Object(k.jsxs)("div",{className:"title",style:l,children:[Object(k.jsx)("h1",{className:"event-name",children:e.targetEventName?e.targetEventName:"Name"}),Object(k.jsxs)("h3",{className:"event-date",children:["Hosted By:"," ",e.targetEventDate?e.targetEventCompany:"Company"]}),Object(k.jsx)(F,{eventDate:e.timeout})]}),Object(k.jsx)(x.a,{onSubmit:e.handleSubmit,children:Object(k.jsxs)(x.a.Row,{className:"align-items-center search-form",children:[Object(k.jsxs)(y.a,{xs:"auto",children:[Object(k.jsx)(x.a.Label,{htmlFor:"inlineFormInput",srOnly:!0,children:"Criteria"}),Object(k.jsxs)(x.a.Control,{as:"select",className:"web",id:"inlineFormInput",value:e.filterKey,name:"filterKey",onChange:function(t){e.handleChange(t.target.name,t.target.value)},children:[Object(k.jsx)("option",{value:"name",children:"Name"}),Object(k.jsx)("option",{value:"city",children:"City"}),Object(k.jsx)("option",{value:"company",children:"Company"})]})]}),Object(k.jsxs)(y.a,{xs:"auto",children:[Object(k.jsx)(x.a.Label,{htmlFor:"inlineFormInputGroup",srOnly:!0,children:"Value"}),Object(k.jsx)(D.a,{children:Object(k.jsx)(C.a,{type:"text",placeholder:"Search",id:"inlineFormInputGroup",name:"searchValue",value:e.inputValue,onChange:function(t){e.handleChange(t.target.name,t.target.value)}})})]}),Object(k.jsx)(y.a,{xs:"auto",children:Object(k.jsx)(S.a,{type:"submit",variant:"warning",children:"Search"})}),e.isFilterApplied?Object(k.jsx)(y.a,{xs:"auto",children:Object(k.jsx)(S.a,{variant:"danger",type:"reset",onClick:e.handleReset,children:"Reset"})}):null]})}),Object(k.jsx)(w.a,{show:i,onHide:c,backdrop:"static",keyboard:!1,children:Object(k.jsxs)(x.a,{onSubmit:function(t){return c(),e.createEvent(t)},children:[Object(k.jsx)(w.a.Header,{closeButton:!0,children:Object(k.jsx)(w.a.Title,{children:"Event Creation Form"})}),Object(k.jsxs)(w.a.Body,{children:[Object(k.jsxs)(x.a.Group,{controlId:"formGroupEmail",children:[Object(k.jsx)(x.a.Label,{children:"Event Name"}),Object(k.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Name of event",name:"name",value:e.name,onChange:e.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"Company Name"}),Object(k.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"Company",name:"company",value:e.company,onChange:e.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"City"}),Object(k.jsx)(x.a.Control,{required:!0,type:"text",placeholder:"City",name:"city",value:e.city,onChange:e.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"Date"}),Object(k.jsx)(x.a.Control,{required:!0,type:"datetime-local",placeholder:"Date",name:"date",value:e.date,onChange:e.handleAddEvent})]})]}),Object(k.jsxs)(w.a.Footer,{children:[Object(k.jsx)(S.a,{variant:"success",type:"submit",children:"Submit"}),Object(k.jsx)(S.a,{variant:"primary",onClick:c,children:"Close"})]})]})})]})},T=a(215);var R=function(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),s=a[0],i=a[1],r=function(){return i(!1)},c=function(){return i(!0)},l=Object(n.useState)(""),o=Object(f.a)(l,2),d=o[0],h=o[1];return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"card-block",children:Object(k.jsxs)(T.a,{style:{width:"18rem"},children:[Object(k.jsx)(T.a.Img,{variant:"top",src:e.data.img}),Object(k.jsxs)(T.a.Body,{children:[Object(k.jsx)(T.a.Title,{children:e.data.name}),Object(k.jsx)(T.a.Text,{children:Object(k.jsxs)("strong",{children:["Date: ",e.date]})}),Object(k.jsxs)(T.a.Text,{children:["Company: ",e.data.company.name]}),Object(k.jsxs)(T.a.Text,{children:["Place: ",e.data.address.city]}),e.data.rsvp?Object(k.jsx)(S.a,{variant:"success",onClick:function(){return h("Event RSVP removed. Please check your schedule."),c(),e.removeRSVP(e.data._id,e.data.id)},className:"mr-1",children:"Added"}):Object(k.jsx)(S.a,{variant:"primary",onClick:function(){return h("Event RSVP successful. Please check your schedule."),c(),e.addRSVP(e.data._id,e.data.id)},className:"mr-1",children:"RSVP"}),Object(k.jsx)(S.a,{variant:"secondary",onClick:function(){return e.handleShow(e.data.id,e.data._id,e.data,e.date)},className:"mr-1",children:"Update"}),Object(k.jsx)(S.a,{variant:"danger",onClick:function(){return e.deleteEvent(e.data._id,e.data.id)},children:"Delete"})]})]})}),Object(k.jsxs)(w.a,{show:s,onHide:r,backdrop:"static",keyboard:!1,children:[Object(k.jsx)(w.a.Header,{closeButton:!0,children:Object(k.jsx)(w.a.Title,{children:e.data.name})}),Object(k.jsx)(w.a.Body,{children:d}),Object(k.jsx)(w.a.Footer,{children:Object(k.jsx)(S.a,{variant:"primary",onClick:r,children:"Close"})})]})]})};var B=function(e){return Object(k.jsxs)(x.a,{className:"filter",children:[Object(k.jsx)("h3",{children:"Filters"}),Object(k.jsxs)("div",{className:"mb-3",children:[Object(k.jsx)(x.a.Check,{inline:!0,label:"All time",name:"filterKey",value:"allTime",type:"radio",id:"default-radio-1",onChange:e.handleChange}),Object(k.jsx)(x.a.Check,{inline:!0,label:"This week",name:"filterKey",value:"thisWeek",type:"radio",id:"default-radio-2",onChange:e.handleChange}),Object(k.jsx)(x.a.Check,{inline:!0,label:"This month",name:"filterKey",type:"radio",value:"thisMonth",id:"default-radio-3",onChange:e.handleChange}),Object(k.jsx)(x.a.Check,{inline:!0,label:"In next 3 months",name:"filterKey",type:"radio",value:"in3Months",id:"default-radio-4",onChange:e.handleChange})]},"inline-radio")]})},G=a(198),_=a(91),K=(a(155),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLogOut=function(){n.setState({isDataLoaded:!1});var e=P();p.a.post("https://salamander-event-manager.herokuapp.com/v1/users/logout",{},{headers:{Authorization:"Bearer "+e}}).then((function(){n.setState({isDataLoaded:!0}),sessionStorage.removeItem("user"),sessionStorage.removeItem("token"),n.props.history.push("/")})).catch((function(e){return console.log(e)}))},n.notify=function(e){return _.b.success(e,{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},n.state={data:null,_id:"",id:0,name:"",city:"",company:"",eventDate:[new Date],filteredData:[],searchValue:"",filterKey:"name",isFilterApplied:!1,isDataLoaded:!1,show:!1,bannerEvent:{date:new Date,company:{name:"company"}},allData:null,schedule:!1},n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n.handleReset=n.handleReset.bind(Object(b.a)(n)),n.handleDateFilter=n.handleDateFilter.bind(Object(b.a)(n)),n.handleAddEvent=n.handleAddEvent.bind(Object(b.a)(n)),n.createEvent=n.createEvent.bind(Object(b.a)(n)),n.handleShow=n.handleShow.bind(Object(b.a)(n)),n.handleClose=n.handleClose.bind(Object(b.a)(n)),n.deleteEvent=n.deleteEvent.bind(Object(b.a)(n)),n.handleLogOut=n.handleLogOut.bind(Object(b.a)(n)),n.notify=n.notify.bind(Object(b.a)(n)),n.addRSVP=n.addRSVP.bind(Object(b.a)(n)),n.removeRSVP=n.removeRSVP.bind(Object(b.a)(n)),n.showSchedule=n.showSchedule.bind(Object(b.a)(n)),n.showEvents=n.showEvents.bind(Object(b.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e,t){"date"===e?console.log(t):this.setState(Object(m.a)({},e,t))}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),"city"===this.state.filterKey){var a=this.state.data.filter((function(e){return e.address.city.toLowerCase().includes(t.state.searchValue.toLowerCase())}));this.setState({filteredData:a,searchValue:"",filterKey:"name",isFilterApplied:!0})}else if("company"===this.state.filterKey){var n=this.state.data.filter((function(e){return e.company.name.toLowerCase().includes(t.state.searchValue.toLowerCase())}));this.setState({filteredData:n,searchValue:"",filterKey:"name",isFilterApplied:!0})}else if("name"===this.state.filterKey){var s=this.state.data.filter((function(e){return e.name.toLowerCase().includes(t.state.searchValue.toLowerCase())}));this.setState({filteredData:s,searchValue:"",filterKey:"name",isFilterApplied:!0})}}},{key:"handleReset",value:function(){this.setState((function(e){return{filteredData:e.data,isFilterApplied:!1}}))}},{key:"handleDateFilter",value:function(e){if("allTime"===e.target.value)this.setState((function(e){return{filteredData:e.data}}));else if("thisWeek"===e.target.value){var t=this.state.data.filter((function(e){return(e.date-new Date)/864e5<=7}));this.setState({filteredData:t})}else if("thisMonth"===e.target.value){var a=this.state.data.filter((function(e){return e.date.getMonth()===(new Date).getMonth()}));this.setState({filteredData:a})}else if("in3Months"===e.target.value){var n=this.state.data.filter((function(e){return(e.date-new Date)/864e5<=120}));this.setState({filteredData:n})}}},{key:"handleAddEvent",value:function(e){var t=e.target,a=t.name,n=t.value;"date"===a?this.setState({eventDate:[n]}):this.setState(Object(m.a)({},a,n))}},{key:"createEvent",value:function(e){var t=this;e.preventDefault();var a={id:this.state.data.length,name:this.state.name,address:{city:this.state.city},company:{name:this.state.company},date:new Date(this.state.eventDate[0]),img:"https://source.unsplash.com/collection/4482145/700x600/?sig=".concat(this.state.data.length+1)},n=this.state.allData.concat([a]);this.setState({allData:n,data:n,filteredData:n,name:"",city:"",company:"",eventDates:[new Date]}),this.notify("Event Created Successfully");var s={name:this.state.name,city:this.state.city,company:this.state.company,date:new Date(this.state.eventDate[0])},i=P();p.a.post("https://salamander-event-manager.herokuapp.com/v1/events",s,{headers:{Authorization:"Bearer "+i}}).then((function(e){console.log(e);var n=t.state.allData;if(n[n.length-1]._id=e.data._id,t.setState({allData:n,data:n,filteredData:n,name:"",city:"",company:"",eventDates:[new Date]}),(a=n[n.length-1]).id===t.state.bannerEvent.id||a.date<t.state.bannerEvent.date){var s=t.state.allData[0];t.state.allData.forEach((function(e){e.date<s.date&&(s=e)})),t.setState({bannerEvent:s})}}))}},{key:"handleShow",value:function(e,t,a,n){console.log(e,t),this.setState({id:e,_id:t,show:!0,name:a.name,city:a.address.city,company:a.company.name,eventDate:[new Date(n)]})}},{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"updateEvent",value:function(e){var t,a,n=this;e.preventDefault();var s,i=Object(j.a)(this.state.allData);try{for(i.s();!(s=i.n()).done;){var r=s.value;if(r.id===this.state.id){t=r.img,a=r.rsvp;break}}}catch(f){i.e(f)}finally{i.f()}for(var c={id:this.state.id,name:this.state.name,address:{city:this.state.city},company:{name:this.state.company},date:new Date(this.state.eventDate[0]),img:t,rsvp:a},l=[],o=0;o<this.state.allData.length;o++)this.state.allData[o].id!==this.state.id?l.push(this.state.allData[o]):l.push(c);for(var d=[],h=0;h<this.state.data.length;h++)this.state.data[h].id!==this.state.id?d.push(this.state.data[h]):d.push(c);for(var u=[],m=0;m<this.state.filteredData.length;m++)this.state.filteredData[m].id!==this.state.id?u.push(this.state.data[m]):u.push(c);this.setState({allData:l,data:d,filteredData:u}),this.notify("Event Updated Successfully");var b={name:this.state.name,city:this.state.city,company:this.state.company,date:new Date(this.state.eventDate[0])};console.log(b,this.state._id,this.state.id);var v=P();p.a.patch("https://salamander-event-manager.herokuapp.com/v1/events/"+this.state._id,b,{headers:{Authorization:"Bearer "+v}}).then((function(e){console.log(e);for(var s={_id:e.data._id,id:n.state.id,name:n.state.name,address:{city:n.state.city},company:{name:n.state.company},date:new Date(n.state.eventDate[0]),img:t,rsvp:a},i=[],r=0;r<n.state.allData.length;r++)n.state.allData[r].id!==n.state.id?i.push(n.state.allData[r]):i.push(s);for(var c=[],l=0;l<n.state.data.length;l++)n.state.data[l].id!==n.state.id?c.push(n.state.data[l]):c.push(s);for(var o=[],d=0;d<n.state.filteredData.length;d++)n.state.filteredData[d].id!==n.state.id?o.push(n.state.data[d]):o.push(s);if(n.setState({allData:i,data:c,filteredData:o}),s.id===n.state.bannerEvent.id||s.date<n.state.bannerEvent.date){var h=n.state.allData[0];n.state.allData.forEach((function(e){e.date<h.date&&(h=e)})),n.setState({bannerEvent:h})}}))}},{key:"deleteEvent",value:function(e,t){var a=this;console.log(e);var n=this.state.allData.filter((function(e){return e.id!==t})),s=this.state.data.filter((function(e){return e.id!==t})),i=this.state.filteredData.filter((function(e){return e.id!==t}));this.setState({allData:n,data:s,filteredData:i}),this.notify("Event Deleted Successfully");var r=P();p.a.delete("https://salamander-event-manager.herokuapp.com/v1/events/"+e,{headers:{Authorization:"Bearer "+r}}).then((function(e){if(t===a.state.bannerEvent.id){console.log(a.state.allData);var n=a.state.allData[0];a.state.allData.forEach((function(e){e.date<n.date&&(n=e)})),a.setState({bannerEvent:n})}console.log(e)}))}},{key:"showSchedule",value:function(){var e=this.state.allData.filter((function(e){return e.rsvp}));if(0===e.length)return this.notify("Your schedule is clear");this.setState({data:e,filteredData:e,schedule:!0})}},{key:"showEvents",value:function(){this.setState((function(e){return{data:e.allData,filteredData:e.allData,schedule:!1}}))}},{key:"addRSVP",value:function(e,t){var a,n=this.state.filteredData,s=Object(j.a)(n);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.id===t&&(i.rsvp=!0)}}catch(v){s.e(v)}finally{s.f()}var r,c=this.state.data,l=Object(j.a)(c);try{for(l.s();!(r=l.n()).done;){var o=r.value;o.id===t&&(o.rsvp=!0)}}catch(v){l.e(v)}finally{l.f()}var d,h=this.state.allData,u=Object(j.a)(h);try{for(u.s();!(d=u.n()).done;){var m=d.value;m.id===t&&(m.rsvp=!0)}}catch(v){u.e(v)}finally{u.f()}this.setState({allData:h,data:c,filteredData:n});var b=P();p.a.post("https://salamander-event-manager.herokuapp.com/v1/rsvp/add/"+e,{},{headers:{Authorization:"Bearer "+b}}).then((function(e){console.log(e)}))}},{key:"removeRSVP",value:function(e,t){console.log(t);var a,n=this.state.filteredData,s=Object(j.a)(n);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.id===t&&(i.rsvp=!1)}}catch(v){s.e(v)}finally{s.f()}var r,c=this.state.data,l=Object(j.a)(c);try{for(l.s();!(r=l.n()).done;){var o=r.value;o.id===t&&(o.rsvp=!1)}}catch(v){l.e(v)}finally{l.f()}var d,h=this.state.allData,u=Object(j.a)(h);try{for(u.s();!(d=u.n()).done;){var m=d.value;m.id===t&&(m.rsvp=!1)}}catch(v){u.e(v)}finally{u.f()}this.state.schedule&&(n=n.filter((function(e){return e.id!==t})),c=c.filter((function(e){return e.id!==t}))),this.setState({allData:h,data:c,filteredData:n}),this.state.schedule&&this.notify("Event RSVP removed!");var b=P();p.a.post("https://salamander-event-manager.herokuapp.com/v1/rsvp/remove/"+e,{},{headers:{Authorization:"Bearer "+b}}).then((function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,t=P(),a=A();console.log(a),p.a.get("https://salamander-event-manager.herokuapp.com/v1/events",{headers:{Authorization:"Bearer "+t}}).then((function(e){e=e.data,console.log(e);var t,n=[],s={},i=new Date(2027,11,30),r=0,c=Object(j.a)(e);try{for(c.s();!(t=c.n()).done;){var l,o=t.value,d=!1,h=Object(j.a)(o.attendees);try{for(h.s();!(l=h.n()).done;){if(l.value._id.toString()===a._id.toString()){d=!0;break}}}catch(m){h.e(m)}finally{h.f()}console.log(o.name,d);var u={_id:o._id,id:r++,name:o.name,address:{city:o.city},company:{name:o.company},date:new Date(o.date),img:"https://source.unsplash.com/collection/4482145/700x600/?sig=".concat(r),rsvp:d};u.date<i&&(s=u,i=u.date),n.push(u)}}catch(m){c.e(m)}finally{c.f()}return{newEvents:n,targetEvent:s}})).then((function(t){e.setState((function(e){return{allData:t.newEvents,data:t.newEvents,filteredData:t.newEvents,isDataLoaded:!0,bannerEvent:t.targetEvent}}))}))}},{key:"render",value:function(){var e=this,t=[];this.state.isDataLoaded&&(t=this.state.filteredData.map((function(t,a){return Object(k.jsx)(R,{data:t,date:t.date.toDateString(),handleShow:e.handleShow,deleteEvent:e.deleteEvent,addRSVP:e.addRSVP,removeRSVP:e.removeRSVP},a)})));var a=Object(k.jsx)(G.a,{style:{position:"fixed",top:"50%",left:"50%",justifyContent:"center",width:"60px",height:"60px"},animation:"border",variant:"primary",role:"status",children:Object(k.jsx)("span",{className:"sr-only",children:"Loading..."})});return Object(k.jsxs)("div",{children:[Object(k.jsx)(_.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(k.jsx)(I,{inputValue:this.state.searchValue,handleChange:this.handleChange,filterKey:this.state.filterKey,handleSubmit:this.handleSubmit,isFilterApplied:this.state.isFilterApplied,handleReset:this.handleReset,handleAddEvent:this.handleAddEvent,name:this.state.name,city:this.state.city,company:this.state.company,date:this.state.eventDate[0],createEvent:this.createEvent,targetEventName:this.state.bannerEvent.name,targetEventDate:this.state.bannerEvent.date.toDateString(),targetEventCompany:this.state.bannerEvent.company.name,timeout:this.state.bannerEvent.date.toString(),image:this.state.bannerEvent.img,handleLogOut:this.handleLogOut,showSchedule:this.showSchedule,showEvents:this.showEvents}),Object(k.jsxs)("div",{className:"main-content",children:[Object(k.jsx)("div",{className:"filter-div",children:Object(k.jsx)(B,{handleChange:this.handleDateFilter})}),Object(k.jsx)("h3",{children:"Events"}),Object(k.jsx)("div",{className:"card-list",children:this.state.isDataLoaded?t:a})]}),Object(k.jsx)(w.a,{show:this.state.show,onHide:this.handleClose,backdrop:"static",keyboard:!1,children:Object(k.jsxs)(x.a,{onSubmit:function(t){e.handleClose(),e.updateEvent(t)},children:[Object(k.jsx)(w.a.Header,{closeButton:!0,children:Object(k.jsx)(w.a.Title,{children:"Event Update Form"})}),Object(k.jsxs)(w.a.Body,{children:[Object(k.jsxs)(x.a.Group,{controlId:"formGroupEmail",children:[Object(k.jsx)(x.a.Label,{children:"Event Name"}),Object(k.jsx)(x.a.Control,{type:"text",placeholder:"Name of event",name:"name",value:this.state.name,onChange:this.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"Company Name"}),Object(k.jsx)(x.a.Control,{type:"text",placeholder:"Company",name:"company",value:this.state.company,onChange:this.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"City"}),Object(k.jsx)(x.a.Control,{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.handleAddEvent})]}),Object(k.jsxs)(x.a.Group,{controlId:"formGroupPassword",children:[Object(k.jsx)(x.a.Label,{children:"Date"}),Object(k.jsx)(x.a.Control,{type:"datetime-local",placeholder:"Date",name:"date",value:this.state.date,onChange:this.handleAddEvent})]})]}),Object(k.jsxs)(w.a.Footer,{children:[Object(k.jsx)(S.a,{variant:"success",type:"submit",children:"Submit"}),Object(k.jsx)(S.a,{variant:"primary",onClick:this.handleClose,children:"Close"})]})]})})]})}}]),a}(s.a.Component)),M=a(216),W=a(206),H=a(204),z=a(208),q=a(205),U=a(213),J=a(201),Y=a(207),Q=a(210),X=a(78),Z=a.n(X),$=a(108),ee=a(202),te=a(203);function ae(){return Object(k.jsxs)($.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(J.a,{color:"inherit",href:"https://material-ui.com/",children:"Dell Technologies"})," ",(new Date).getFullYear(),"."]})}var ne=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var se=function(e){var t=ne(),a=Object(n.useState)(""),s=Object(f.a)(a,2),i=s[0],r=s[1],c=Object(n.useState)(""),l=Object(f.a)(c,2),o=l[0],d=l[1],h=Object(n.useState)(null),u=Object(f.a)(h,2),j=u[0],m=u[1],b=Object(n.useState)(!1),v=Object(f.a)(b,2),O=v[0],g=v[1],x=Object(k.jsx)(G.a,{style:{position:"fixed",top:"50%",left:"50%",justifyContent:"center",width:"60px",height:"60px"},animation:"border",variant:"primary",role:"status",children:Object(k.jsx)("span",{className:"sr-only",children:"Loading..."})});return Object(k.jsxs)(te.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(H.a,{}),Object(k.jsxs)("div",{className:t.paper,children:[Object(k.jsx)(M.a,{className:t.avatar,children:Object(k.jsx)(Z.a,{})}),Object(k.jsx)($.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(k.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),m(null),g(!0),p.a.post("https://salamander-event-manager.herokuapp.com/v1/users/login",{username:i,password:o}).then((function(t){g(!1),V(t.data.user,t.data.token),e.history.push("/dashboard")})).catch((function(e){g(!1),m("Login Failed"),console.log(e)}))},children:[Object(k.jsx)(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"username",autoComplete:"email",value:i,onChange:function(e){return r(e.target.value)},autoFocus:!0}),Object(k.jsx)(z.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:o,onChange:function(e){return d(e.target.value)},autoComplete:"current-password"}),Object(k.jsx)(q.a,{control:Object(k.jsx)(U.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(k.jsx)(W.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"SIGN IN"}),j,Object(k.jsxs)(Y.a,{container:!0,children:[Object(k.jsx)(Y.a,{item:!0,xs:!0,children:Object(k.jsx)(J.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(k.jsx)(Y.a,{item:!0,children:Object(k.jsx)(J.a,{href:"#",variant:"body2",onClick:function(){e.history.push("/signup")},children:"Don't have an account? Sign Up"})})]}),O?x:null]})]}),Object(k.jsx)(Q.a,{mt:8,children:Object(k.jsx)(ae,{})})]})};function ie(){return Object(k.jsxs)($.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(k.jsx)(J.a,{color:"inherit",href:"https://material-ui.com/",children:"Dell Technologies"})," ",(new Date).getFullYear(),"."]})}var re=Object(ee.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function ce(e){var t=re(),a=Object(n.useState)(""),s=Object(f.a)(a,2),i=s[0],r=s[1],c=Object(n.useState)(""),l=Object(f.a)(c,2),o=l[0],d=l[1],h=Object(n.useState)(""),u=Object(f.a)(h,2),j=u[0],m=u[1],b=Object(n.useState)(null),v=Object(f.a)(b,2),O=v[0],g=v[1],x=Object(n.useState)(!1),y=Object(f.a)(x,2),D=y[0],C=y[1],S=Object(k.jsx)(G.a,{style:{position:"fixed",top:"50%",left:"50%",justifyContent:"center",width:"60px",height:"60px"},animation:"border",variant:"primary",role:"status",children:Object(k.jsx)("span",{className:"sr-only",children:"Loading..."})});return Object(k.jsxs)(te.a,{component:"main",maxWidth:"xs",children:[Object(k.jsx)(H.a,{}),Object(k.jsxs)("div",{className:t.paper,children:[Object(k.jsx)(M.a,{className:t.avatar,children:Object(k.jsx)(Z.a,{})}),Object(k.jsx)($.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(k.jsxs)("form",{className:t.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),g(null),C(!0),p.a.post("https://salamander-event-manager.herokuapp.com/v1/users/",{username:o,password:j,email:i}).then((function(t){C(!1),console.log(t),V(t.data.user,t.data.token),e.history.push("/dashboard")})).catch((function(e){C(!1),g(e.response.data.message)}))},children:[Object(k.jsxs)(Y.a,{container:!0,spacing:2,children:[Object(k.jsx)(Y.a,{item:!0,xs:12,children:Object(k.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:i,onChange:function(e){return r(e.target.value)}})}),Object(k.jsx)(Y.a,{item:!0,xs:12,children:Object(k.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",value:o,onChange:function(e){return d(e.target.value)}})}),Object(k.jsx)(Y.a,{item:!0,xs:12,children:Object(k.jsx)(z.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return m(e.target.value)}})})]}),Object(k.jsx)(W.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"SIGN UP"}),O,Object(k.jsx)(Y.a,{container:!0,justifyContent:"flex-end",children:Object(k.jsx)(Y.a,{item:!0,children:Object(k.jsx)(J.a,{href:"/",variant:"body2",children:"Already have an account? Sign in"})})})]}),D?S:null]}),Object(k.jsx)(Q.a,{mt:5,children:Object(k.jsx)(ie,{})})]})}var le=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(k.jsx)(h.a,{basename:"/event-manager-frontend",children:Object(k.jsxs)(u.c,{children:[Object(k.jsx)(u.a,{path:"/",exact:!0,component:se}),Object(k.jsx)(u.a,{path:"/dashboard",exact:!0,component:K}),Object(k.jsx)(u.a,{path:"/signup",exact:!0,component:ce})]})})}}]),a}(s.a.Component),oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,219)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(le,{})}),document.getElementById("root")),oe()}},[[167,1,2]]]);
//# sourceMappingURL=main.d060d8c5.chunk.js.map