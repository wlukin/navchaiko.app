"use strict";(self["webpackChunknavchaiko"]=self["webpackChunknavchaiko"]||[]).push([[127],{1531:function(e,t,u){u.d(t,{Z:function(){return a}});const i={ua:"абвгґдеєжзиіїйклмнопрстуфхцчшщьюя",en:"abcdefghijklmnopqrstuvwxyz"},n=[{ua:"полуниця",en:"strawberry",group:["їжа","рослина","фрукт"]},{ua:"баНан",en:"banana",group:["їжа","рослина","фрукт"]},{ua:"СлиВа",en:"pluM",group:["їжа","рослина","фрукт"]},{ua:"персик",en:"Peach",group:["їжа","рослина","фрукт"]},{ua:"абрикос",en:"apricot",group:["їжа","рослина","фрукт"]},{ua:"груша",en:"Pear",group:["їжа","рослина","фрукт"]},{ua:"яблуко",en:"apple",group:["їжа","рослина","фрукт"]},{ua:"огірок",en:"cucumber",group:["їжа","рослина","овоч"]},{ua:"помідор",en:"tomato",group:["їжа","рослина","овоч"]},{ua:"морква",en:"Carrot",group:["їжа","рослина","овоч"]},{ua:"картопля",en:"potato",group:["їжа","рослина","овоч"]},{ua:"морозиво",en:"",group:["їжа","виріб","солодощі"]},{ua:"цукерка",en:"Candy",group:["їжа","виріб","солодощі"]},{ua:"Зефір",en:"marshmallow",group:["їжа","виріб","солодощі"]},{ua:"шоколад",en:"chocolate",group:["їжа","виріб","солодощі"]},{ua:"потяг",en:"Train",group:["транспорт","наземний"]},{ua:"машина",en:"Car",group:["транспорт","наземний"]},{ua:"автобус",en:"bus",group:["транспорт","наземний"]},{ua:"літак",en:"plane",group:["транспорт","повітряний"]},{ua:"гелікоптер",en:"helicopter",group:["транспорт","повітряний"]},{ua:"лев",en:"lion",group:["тварина","ссавець","африканська"]},{ua:"слон",en:"elephant",group:["тварина","ссавець","африканська"]},{ua:"жирафа",en:"giraffe",group:["тварина","ссавець","африканська"]},{ua:"верблюд",en:"camel",group:["тварина","ссавець","африканська"]},{ua:"заєць",en:"Hare",group:["тварина","ссавець","дика"]},{ua:"ведмідь",en:"Bear",group:["тварина","ссавець","дика"]},{ua:"їжак",en:"hedgehog",group:["тварина","ссавець","дика"]},{ua:"вовк",en:"Wolf",group:["тварина","ссавець","дика"]},{ua:"лисиця",en:"FoX",group:["тварина","ссавець","дика"]},{ua:"акула",en:"shark",group:["тварина","морська"]},{ua:"кИт",en:"whale",group:["тварина","морська"]},{ua:"дельфін",en:"dolphin",group:["тварина","морська"]},{ua:"індик",en:"turkey",group:["тварина","птах","свійська"]},{ua:"курка",en:"chicken",group:["тварина","птах","свійська"]},{ua:"півень",en:"rooster",group:["тварина","птах","свійська"]},{ua:"лелека",en:"stork",group:["тварина","птах","дика"]},{ua:"шпак",en:"starling",group:["тварина","птах","дика"]},{ua:"Качка",en:"Duck",group:["тварина","птах","дика"]},{ua:"КІТ",en:"Rat",group:["тварина","ссавець","домашня"]},{ua:"собака",en:"Dog",group:["тварина","ссавець","домашня"]},{ua:"корова",en:"Сow",group:["тварина","ссавець","свійська"]},{ua:"КоЗа",en:"Goat",group:["тварина","ссавець","свійська"]},{ua:"свиня",en:"Pig",group:["тварина","ссавець","свійська"]},{ua:"Кінь",en:"Horse",group:["тварина","ссавець","свійська"]},{ua:"кролик",en:"rabbit",group:["тварина","ссавець","свійська"]}];var a={data(){return{dictionaryListId:{}}},methods:{dictionaryGetAlphabet(e){return i[e]},dictionaryGetWordByList(e){return this.dictionaryListId[e]&&0!==this.dictionaryListId[e].length||this.dictionaryBildListId(e),n[this.dictionaryListId[e].pop()]},dictionaryBildListId(e){this.dictionaryListId[e]=[...n.keys()].filter((t=>n[t][e])).sort((()=>.5-Math.random()))}}}},1163:function(e,t){t.Z={data(){return{assertResult:"",resultFlag:null,inputFlag:!1,resultList:[],inputList:[]}},mounted(){this.gameNextLevel()},methods:{gameRefreshLevel(){this.inputList=this.buildInputList(),this.resultList=this.buildResultList()},gameNextLevel(){this.assertResult=this.buildAssertResult(),this.gameRefreshLevel()},gameCheckResult(){const e=this.resultList.map((e=>e.value)).join("");this.resultFlag=e===this.assertResult,this.inputFlag=!1}},watch:{resultList:{handler(e){const t=e.map((e=>e.value)).join("");this.inputFlag=t.length===this.assertResult.length,this.resultFlag=null},deep:!0}}}},8556:function(e,t){t.Z={methods:{tileListFindById(e,t){return e.find((e=>e.id===t))},tileListFindIdle(e){return e.find((e=>null===e.relationId&&null===e.value))},tileListRemoveGap(e,t,u){for(let i=t;i<e.length;i++){if(i===e.length-1||null===e[i+1].relationId){e[i].relationId=null,e[i].value=null,e[i].class.used=!1;break}e[i].relationId=e[i+1].relationId,e[i].value=e[i+1].value,e[i].class.used=e[i+1].class.used,u&&u[e[i].relationId]&&(u[e[i].relationId].relationId=i)}}}}},7162:function(e,t,u){u.r(t),u.d(t,{default:function(){return L}});var i=u(3396);function n(e,t,u,n,a,s){const r=(0,i.up)("InputResultGame");return(0,i.wg)(),(0,i.j4)(r,{inputFlag:e.inputFlag,resultFlag:e.resultFlag,resultList:e.resultList,inputList:e.inputList,gameId:e.gameId,modeId:e.modeId,backCategoryId:e.buildCategoryId(),onClickTileInput:s.clickTileInput,onClickTileResult:s.clickTileResult,onClickControlRefresh:e.gameRefreshLevel,onClickControlNext:e.gameNextLevel,onClickControlCheck:e.gameCheckResult},null,8,["inputFlag","resultFlag","resultList","inputList","gameId","modeId","backCategoryId","onClickTileInput","onClickTileResult","onClickControlRefresh","onClickControlNext","onClickControlCheck"])}var a=u(3692),s=u(8556),r=u(1531),l=u(1163),o=u(9450),d=u(3967),p=u(8661),g={mixins:[a.Z,s.Z,r.Z,l.Z,d.Z],components:{InputResultGame:o["default"]},data(){return{inputListMask:[],mode:{lang:"ua",lettersNumber:3}}},created(){this.buildMode()},methods:{clickTileInput(e){this.tileIsUsed(e)||this.tileBindByTile(this.tileListFindIdle(this.resultList),e,!0)},clickTileResult(e){!0!==this.resultFlag&&this.tileIsUsed(e)&&(this.tileUnbind(this.tileListFindById(this.inputList,e.relationId)),this.tileUnbind(e,!0))},buildAssertResult(){const e=this.dictionaryGetAlphabet(this.mode.lang);return this.inputListMask=[...(0,p.Oc)(e).keys()].sort((()=>.5-Math.random())).slice(-this.mode.lettersNumber),e},buildInputList(){return(0,p.Oc)(this.assertResult).filter(((e,t)=>this.inputListMask.indexOf(t)>=0)).sort((()=>.5-Math.random())).map(((e,t)=>this.tileLetterCreate(t,e)))},buildResultList(){return(0,p.Oc)(this.assertResult).map(((e,t)=>this.tileLetterCreate(t,this.inputListMask.indexOf(t)>=0?null:e)))}}},h=u(89);const c=(0,h.Z)(g,[["render",n]]);var L=c}}]);
//# sourceMappingURL=game-alphabet-letters.21806e8b.js.map