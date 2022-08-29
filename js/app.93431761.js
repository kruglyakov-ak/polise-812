(function(){"use strict";var t={4650:function(t,s,e){var r=e(144),a=e(998),n=function(){var t=this,s=t._self._c;return s(a.Z,[s("router-view")],1)},i=[],o=e(1001),u={},l=(0,o.Z)(u,n,i,!1,null,null,null),c=l.exports,d=e(8345),p=function(){var t=this,s=t._self._c;return s("div",[t.getLoadingUsers?s("LoaderSpiner"):t.getUsers.length?s("UsersList",{attrs:{users:t.getUsers}}):s("h1",[t._v("Список пользователей пуст")])],1)},h=[],m=function(){var t=this,s=t._self._c;return s("div",{staticClass:"users-list"},[t._m(0),t._l(t.users,(function(t){return s("UsersListCard",{key:t.id,attrs:{user:t}})}))],2)},v=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"title-wrap"},[s("h1",[t._v("Список пользователей")])])}],f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"user-card"},[s("router-link",{staticClass:"link",attrs:{to:{name:"userCard",params:{id:t.user.id},query:{page:"albums"}}}},[t.avatarLoading?s("LoaderSpiner",{staticClass:"loader"}):s("img",{attrs:{width:"150",height:"150",src:t.avatar.thumbnailUrl,alt:t.user.name}})],1),s("div",{staticClass:"card-desc"},[s("router-link",{staticClass:"name",attrs:{to:{name:"userCard",params:{id:t.user.id},query:{page:"albums"}}}},[s("p",[t._v(t._s(t.user.name))])]),s("p",{staticClass:"city"},[t._v("Город: "+t._s(t.user.address.city))]),s("p",{staticClass:"email"},[t._v("email: "+t._s(t.user.email))])],1)],1)},b=[],g=function(){var t=this,s=t._self._c;return s("div",{staticClass:"lds-dual-ring"})},_=[],y={},C=(0,o.Z)(y,g,_,!1,null,null,null),L=C.exports,U={props:{user:{type:Object,required:!0}},data(){return{avatar:"",avatarLoading:!0}},mounted(){fetch(`https://jsonplaceholder.typicode.com/photos/${this.user.id}`).then((t=>t.json())).then((t=>{this.avatar=t,this.avatarLoading=!1}))},components:{LoaderSpiner:L}},T=U,j=(0,o.Z)(T,f,b,!1,null,"057dc8b0",null),P=j.exports,Z={components:{UsersListCard:P},props:{users:{type:Array,required:!0}}},k=Z,w=(0,o.Z)(k,m,v,!1,null,"6f2ef528",null),S=w.exports,A=e(629),O={components:{UsersList:S,LoaderSpiner:L},computed:(0,A.Se)(["getLoadingUsers","getUsers"]),methods:(0,A.nv)(["fetchUsers","fetchAvatars"]),mounted(){this.fetchUsers()}},x=O,$=(0,o.Z)(x,p,h,!1,null,"60712e56",null),q=$.exports,M=function(){var t=this,s=t._self._c;return s("div",{staticClass:"user"},[s("MainNav"),s("UserCard",{attrs:{avatar:this.avatar,user:this.user}})],1)},I=[],N=function(){var t=this,s=t._self._c;return s("nav",[s("li",[s("router-link",{staticClass:"link",attrs:{to:{name:"usersList"}}},[t._v("К списку пользователей ")])],1)])},D=[],E={},F=E,z=(0,o.Z)(F,N,D,!1,null,"96ec323c",null),B=z.exports,G=function(){var t=this,s=t._self._c;return s("div",{staticClass:"user-card"},[s("div",{staticClass:"left-content"},[t.avatar?s("img",{attrs:{src:t.avatar.url,alt:t.user.name}}):s("LoaderSpiner"),t.user&&t.user.address?s("div",{staticClass:"description"},[s("p",[t._v(t._s(t.user.name))]),s("p",[t._v("email: "+t._s(t.user.email))]),s("p",[t._v("Телефон: "+t._s(t.user.phone))]),s("p",[t._v("Город: "+t._s(t.user.address.city))])]):s("LoaderSpiner")],1),s("div",{staticClass:"right-content"},[s("UserCardTabs",{attrs:{activeTab:t.activeTab},on:{onTabClick:t.onTabClick}}),"albums"===t.activeTab?s("div",[t.albumsLoading?s("LoaderSpiner"):s("UserCardAlbums",{attrs:{albums:t.getAlbums}})],1):"posts"===t.activeTab?s("div",[t.postsLoading?s("LoaderSpiner"):s("UserCardPosts",{attrs:{posts:t.getPost}})],1):t._e()],1)])},H=[],J=function(){var t=this,s=t._self._c;return s("div",{staticClass:"tabs"},[s("button",{class:{active:"albums"===t.activeTab},attrs:{disabled:"albums"===t.activeTab},on:{click:t.onTabClick}},[t._v(" Альбомы ")]),s("button",{class:{active:"posts"===t.activeTab},attrs:{disabled:"posts"===t.activeTab},on:{click:t.onTabClick}},[t._v(" Посты ")])])},K=[],Q={props:{activeTab:{type:String,default:"album"}},methods:{onTabClick(){this.$emit("onTabClick",this.activeTab)}}},R=Q,V=(0,o.Z)(R,J,K,!1,null,"344ca2e6",null),W=V.exports,X=function(){var t=this,s=t._self._c;return s("div",t._l(t.albums,(function(e){return s("div",{key:e.id},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("AlbumSwiper",{attrs:{album:e}})],1)})),0)},Y=[],tt=e(8528),st=e(2020),et=function(){var t=this,s=t._self._c;return s(tt.Z,{attrs:{height:"200","hide-delimiter-background":"","show-arrows-on-hover":""}},[t.photosLoading?s("LoaderSpiner"):t._l(t.photos,(function(t,e){return s(st.Z,{key:e,attrs:{src:t.url}})}))],2)},rt=[],at={data(){return{photos:[],photosLoading:!0}},props:{album:{type:Object,required:!0}},mounted(){fetch(`https://jsonplaceholder.typicode.com/albums/${this.album.id}/photos?_limit=5`).then((t=>t.json())).then((t=>{this.photos=t,this.photosLoading=!1}))},components:{LoaderSpiner:L}},nt=at,it=(0,o.Z)(nt,et,rt,!1,null,"084b6836",null),ot=it.exports,ut={components:{AlbumSwiper:ot},props:{albums:{type:Array,required:!0}}},lt=ut,ct=(0,o.Z)(lt,X,Y,!1,null,"8f6a5558",null),dt=ct.exports,pt=function(){var t=this,s=t._self._c;return s("div",[s("ul",t._l(t.posts,(function(e){return s("li",{key:e.id},[s("p",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"descrioption"},[t._v(t._s(e.body))])])})),0)])},ht=[],mt={props:{posts:{type:Array,required:!0}}},vt=mt,ft=(0,o.Z)(vt,pt,ht,!1,null,"b02f5ace",null),bt=ft.exports,gt={data(){return{activeTab:this.$route.query.page,id:this.$route.params.id,albumsLoading:!0,postsLoading:!0}},props:{user:{type:Object,required:!0},avatar:{type:Object,required:!0}},computed:(0,A.Se)(["getPost","getAlbums","getAlbumsLoading"]),methods:{...(0,A.nv)(["fetchPosts","fetchAlbums","resetCurrentUser"]),onTabClick(){"albums"===this.$route.query.page?(this.$router.push({query:{page:"posts"}}),this.activeTab="posts"):(this.$router.push({query:{page:"albums"}}),this.activeTab="albums")},async loadAlbums(){await this.fetchAlbums(this.id),this.albumsLoading=!1},async loadPosts(){await this.fetchPosts(this.id),this.postsLoading=!1}},mounted(){this.loadAlbums(),this.loadPosts()},beforeDestroy(){this.resetCurrentUser()},components:{LoaderSpiner:L,UserCardTabs:W,UserCardAlbums:dt,UserCardPosts:bt}},_t=gt,yt=(0,o.Z)(_t,G,H,!1,null,"247481b1",null),Ct=yt.exports,Lt={data(){return{id:this.$route.params.id,user:{},avatar:{}}},components:{MainNav:B,UserCard:Ct},mounted(){fetch(`https://jsonplaceholder.typicode.com/users/${this.id}`).then((t=>t.json())).then((t=>{this.user=t})),fetch(`https://jsonplaceholder.typicode.com/photos/${this.id}`).then((t=>t.json().then((t=>this.avatar=t))))}},Ut=Lt,Tt=(0,o.Z)(Ut,M,I,!1,null,"d587b498",null),jt=Tt.exports;r.ZP.use(d.ZP);const Pt=[{path:"/",name:"usersList",component:q},{path:"/user/:id",name:"userCard",component:jt}],Zt=new d.ZP({mode:"history",base:"/",routes:Pt});var kt=Zt,wt={state:{users:[],loadingUsers:!0},mutations:{setUsers(t,s){t.users=s},setLoading(t,s){t.loadingUsers=s}},getters:{getUsers(t){return t.users},getLoadingUsers(t){return t.loadingUsers}},actions:{async fetchUsers({commit:t}){const s=await fetch("https://jsonplaceholder.typicode.com/users").then((t=>t.json()));t("setUsers",s),t("setLoading",!1)}}},St={state:{post:[],albums:[]},mutations:{setPosts(t,s){t.posts=s},setAlbums(t,s){t.albums=s}},getters:{getPost(t){return t.posts},getAlbums(t){return t.albums}},actions:{async fetchPosts({commit:t},s){const e=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${s}`).then((t=>t.json()));t("setPosts",e)},async fetchAlbums({commit:t},s){const e=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${s}`).then((t=>t.json()));t("setAlbums",e)},resetCurrentUser({commit:t}){t("setAlbums",[]),t("setPosts",[])}}};r.ZP.use(A.ZP);var At=new A.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{UserModel:wt,CurrentUser:St}}),Ot=e(8864);r.ZP.use(Ot.Z);var xt=new Ot.Z({});r.ZP.config.productionTip=!1,new r.ZP({router:kt,store:At,vuetify:xt,render:t=>t(c)}).$mount("#app")}},s={};function e(r){var a=s[r];if(void 0!==a)return a.exports;var n=s[r]={exports:{}};return t[r](n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(s,r,a,n){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],n=t[c][2];for(var o=!0,u=0;u<r.length;u++)(!1&n||i>=n)&&Object.keys(e.O).every((function(t){return e.O[t](r[u])}))?r.splice(u--,1):(o=!1,n<i&&(i=n));if(o){t.splice(c--,1);var l=a();void 0!==l&&(s=l)}}return s}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[r,a,n]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(s){return 0===t[s]};var s=function(s,r){var a,n,i=r[0],o=r[1],u=r[2],l=0;if(i.some((function(s){return 0!==t[s]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(u)var c=u(e)}for(s&&s(r);l<i.length;l++)n=i[l],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(c)},r=self["webpackChunkpolise_812"]=self["webpackChunkpolise_812"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(4650)}));r=e.O(r)})();
//# sourceMappingURL=app.93431761.js.map