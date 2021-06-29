/*!
  Highlight.js v11.0.1 (git: 1cf31f015d)
  (c) 2006-2021 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function t(e){
    return e instanceof Map?e.clear=e.delete=e.set=()=>{
        throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
        throw Error("set is read-only")
    }),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((n=>{var i=e[n]
    ;"object"!=typeof i||Object.isFrozen(i)||t(i)})),e}
    e.exports=t,e.exports.default=t;var n=e.exports;class i{constructor(e){
        void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
        ignoreMatch(){this.isMatchIgnored=!0}}function r(e){
        return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
    }function s(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
    ;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}const o=e=>!!e.kind
    ;class a{constructor(e,t){
        this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
        this.buffer+=r(e)}openNode(e){if(!o(e))return;let t=e.kind
    ;t=e.sublanguage?"language-"+t:((e,{prefix:t})=>{if(e.includes(".")){
        const n=e.split(".")
        ;return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")
    }return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){
        o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
        this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
        children:[]},this.stack=[this.rootNode]}get top(){
        return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
        this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
    ;this.add(t),this.stack.push(t)}closeNode(){
        if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
        for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
        walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
            return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
                t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
            "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
                l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
        addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
        addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
        ;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
            return new a(this,this.options).value()}finalize(){return!0}}function g(e){
        return e?"string"==typeof e?e:e.source:null}function d(...e){
        return e.map((e=>g(e))).join("")}function u(...e){return"("+((e=>{
        const t=e[e.length-1]
        ;return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}
    })(e).capture?"":"?:")+e.map((e=>g(e))).join("|")+")"}function h(e){
        return RegExp(e.toString()+"|").exec("").length-1}
    const f=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
    ;function p(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n
    ;let i=g(e),r="";for(;i.length>0;){const e=f.exec(i);if(!e){r+=i;break}
        r+=i.substring(0,e.index),
            i=i.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+t):(r+=e[0],
        "("===e[0]&&n++)}return r})).map((e=>`(${e})`)).join(t)}
    const b="[a-zA-Z]\\w*",m="[a-zA-Z_]\\w*",E="\\b\\d+(\\.\\d+)?",x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",y="\\b(0b[01]+)",w={
        begin:"\\\\[\\s\\S]",relevance:0},_={scope:"string",begin:"'",end:"'",
        illegal:"\\n",contains:[w]},v={scope:"string",begin:'"',end:'"',illegal:"\\n",
        contains:[w]},O=(e,t,n={})=>{const i=s({scope:"comment",begin:e,end:t,
        contains:[]},n);i.contains.push({scope:"doctag",
        begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
    ;const r=u("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
    ;return i.contains.push({begin:d(/[ ]+/,"(",r,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i
    },k=O("//","$"),N=O("/\\*","\\*/"),S=O("#","$");var M=Object.freeze({
        __proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:b,UNDERSCORE_IDENT_RE:m,
        NUMBER_RE:E,C_NUMBER_RE:x,BINARY_NUMBER_RE:y,
        RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG:(e={})=>{const t=/^#![ ]*\//
        ;return e.binary&&(e.begin=d(t,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:t,
            end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},
        BACKSLASH_ESCAPE:w,APOS_STRING_MODE:_,QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:{
            begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },COMMENT:O,C_LINE_COMMENT_MODE:k,C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:S,
        NUMBER_MODE:{scope:"number",begin:E,relevance:0},C_NUMBER_MODE:{scope:"number",
            begin:x,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:y,relevance:0},
        REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
                end:/\/[gimuy]*/,illegal:/\n/,contains:[w,{begin:/\[/,end:/\]/,relevance:0,
                    contains:[w]}]}]},TITLE_MODE:{scope:"title",begin:b,relevance:0},
        UNDERSCORE_TITLE_MODE:{scope:"title",begin:m,relevance:0},METHOD_GUARD:{
            begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
            "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
                t.data._beginMatch!==e[1]&&t.ignoreMatch()}})});function R(e,t){
        "."===e.input[e.index-1]&&t.ignoreMatch()}function j(e,t){
        void 0!==e.className&&(e.scope=e.className,delete e.className)}function A(e,t){
        t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin=R,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
        void 0===e.relevance&&(e.relevance=0))}function I(e,t){
        Array.isArray(e.illegal)&&(e.illegal=u(...e.illegal))}function B(e,t){
        if(e.match){
            if(e.begin||e.end)throw Error("begin & end are not supported with match")
                ;e.begin=e.match,delete e.match}}function T(e,t){
        void 0===e.relevance&&(e.relevance=1)}const L=(e,t)=>{if(!e.beforeMatch)return
            ;if(e.starts)throw Error("beforeMatch cannot be used with starts")
            ;const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]
        })),e.keywords=n.keywords,
            e.begin=d(n.beforeMatch,d("(?=",n.begin,")")),e.starts={relevance:0,
            contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch
        },D=["of","and","for","in","not","or","if","then","parent","list","value"]
    ;function P(e,t,n="keyword"){const i=Object.create(null)
    ;return"string"==typeof e?r(n,e.split(" ")):Array.isArray(e)?r(n,e):Object.keys(e).forEach((n=>{
        Object.assign(i,P(e[n],t,n))})),i;function r(e,n){
        t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((t=>{const n=t.split("|")
        ;i[n[0]]=[e,C(n[0],n[1])]}))}}function C(e,t){
        return t?Number(t):(e=>D.includes(e.toLowerCase()))(e)?0:1}const H={},$=e=>{
        console.error(e)},U=(e,...t)=>{console.log("WARN: "+e,...t)},z=(e,t)=>{
        H[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),H[`${e}/${t}`]=!0)
    },K=Error();function W(e,t,{key:n}){let i=0;const r=e[n],s={},o={}
    ;for(let e=1;e<=t.length;e++)o[e+i]=r[e],s[e+i]=!0,i+=h(t[e-1])
    ;e[n]=o,e[n]._emit=s,e[n]._multi=!0}function X(e){(e=>{
        e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
            delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
        _wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
    }),(e=>{if(Array.isArray(e.begin)){
        if(e.skip||e.excludeBegin||e.returnBegin)throw $("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
            K
            ;if("object"!=typeof e.beginScope||null===e.beginScope)throw $("beginScope must be object"),
            K;W(e,e.begin,{key:"beginScope"}),e.begin=p(e.begin,{joinWith:""})}})(e),(e=>{
        if(Array.isArray(e.end)){
            if(e.skip||e.excludeEnd||e.returnEnd)throw $("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                K
                ;if("object"!=typeof e.endScope||null===e.endScope)throw $("endScope must be object"),
                K;W(e,e.end,{key:"endScope"}),e.end=p(e.end,{joinWith:""})}})(e)}function G(e){
        function t(t,n){return RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}
        class n{constructor(){
            this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
            addRule(e,t){
                t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
                    this.matchAt+=h(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
            ;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(p(e,{joinWith:"|"
            }),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
            ;const t=this.matcherRe.exec(e);if(!t)return null
                ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),i=this.matchIndexes[n]
            ;return t.splice(0,n),Object.assign(t,i)}}class i{constructor(){
            this.rules=[],this.multiRegexes=[],
                this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
            if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
            ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
                t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
            return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
            this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
            const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
            ;let n=t.exec(e)
            ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
                const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
            return n&&(this.regexIndex+=n.position+1,
            this.regexIndex===this.count&&this.considerAll()),n}}
        if(e.compilerExtensions||(e.compilerExtensions=[]),
        e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
            ;return e.classNameAliases=s(e.classNameAliases||{}),function n(r,o){const a=r
        ;if(r.isCompiled)return a
            ;[j,B,X,L].forEach((e=>e(r,o))),e.compilerExtensions.forEach((e=>e(r,o))),
            r.__beforeBegin=null,[A,I,T].forEach((e=>e(r,o))),r.isCompiled=!0;let l=null
        ;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),
            l=r.keywords.$pattern,
            delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=P(r.keywords,e.case_insensitive)),
            a.keywordPatternRe=t(l,!0),
        o&&(r.begin||(r.begin=/\B|\b/),a.beginRe=t(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),
        r.end&&(a.endRe=t(r.end)),
            a.terminatorEnd=g(r.end)||"",r.endsWithParent&&o.terminatorEnd&&(a.terminatorEnd+=(r.end?"|":"")+o.terminatorEnd)),
        r.illegal&&(a.illegalRe=t(r.illegal)),
        r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((t=>s(e,{
            variants:null},t)))),e.cachedVariants?e.cachedVariants:Z(e)?s(e,{
            starts:e.starts?s(e.starts):null
        }):Object.isFrozen(e)?s(e):e))("self"===e?r:e)))),r.contains.forEach((e=>{n(e,a)
        })),r.starts&&n(r.starts,o),a.matcher=(e=>{const t=new i
        ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
        }))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"
        }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(a),a}(e)}function Z(e){
        return!!e&&(e.endsWithParent||Z(e.starts))}const F=r,V=s,q=Symbol("nomatch")
    ;var J=(e=>{const t=Object.create(null),r=Object.create(null),s=[];let o=!0
    ;const a="Could not find the language '{}', did you forget to load/include a language module?",l={
        disableAutodetect:!0,name:"Plain text",contains:[]};let g={
        ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
        languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
        cssSelector:"pre code",languages:null,__emitter:c};function d(e){
        return g.noHighlightRe.test(e)}function u(e,t,n,i){let r="",s=""
    ;"object"==typeof t?(r=e,
        n=t.ignoreIllegals,s=t.language,i=void 0):(z("10.7.0","highlight(lang, code, ...args) has been deprecated."),
        z("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
        s=e,r=t),void 0===n&&(n=!0);const o={code:r,language:s};w("before:highlight",o)
    ;const a=o.result?o.result:h(o.language,o.code,n,i)
    ;return a.code=o.code,w("after:highlight",a),a}function h(e,n,r,s){
        const l=Object.create(null);function c(){if(!k.keywords)return void S.addText(M)
            ;let e=0;k.keywordPatternRe.lastIndex=0;let t=k.keywordPatternRe.exec(M),n=""
        ;for(;t;){n+=M.substring(e,t.index)
        ;const r=_.case_insensitive?t[0].toLowerCase():t[0],s=(i=r,k.keywords[i]);if(s){
            const[e,i]=s
            ;if(S.addText(n),n="",l[r]=(l[r]||0)+1,l[r]<=7&&(R+=i),e.startsWith("_"))n+=t[0];else{
                const n=_.classNameAliases[e]||e;S.addKeyword(t[0],n)}}else n+=t[0]
        ;e=k.keywordPatternRe.lastIndex,t=k.keywordPatternRe.exec(M)}var i
        ;n+=M.substr(e),S.addText(n)}function d(){null!=k.subLanguage?(()=>{
            if(""===M)return;let e=null;if("string"==typeof k.subLanguage){
                if(!t[k.subLanguage])return void S.addText(M)
                    ;e=h(k.subLanguage,M,!0,N[k.subLanguage]),N[k.subLanguage]=e._top
            }else e=f(M,k.subLanguage.length?k.subLanguage:null)
            ;k.relevance>0&&(R+=e.relevance),S.addSublanguage(e._emitter,e.language)
        })():c(),M=""}function u(e,t){let n=1;for(;void 0!==t[n];){if(!e._emit[n]){n++
        ;continue}const i=_.classNameAliases[e[n]]||e[n],r=t[n]
        ;i?S.addKeyword(r,i):(M=r,c(),M=""),n++}}function p(e,t){
            return e.scope&&"string"==typeof e.scope&&S.openNode(_.classNameAliases[e.scope]||e.scope),
            e.beginScope&&(e.beginScope._wrap?(S.addKeyword(M,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
                M=""):e.beginScope._multi&&(u(e.beginScope,t),M="")),k=Object.create(e,{parent:{
                    value:k}}),k}function b(e,t,n){let r=((e,t)=>{const n=e&&e.exec(t)
        ;return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e)
        ;e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){
            for(;e.endsParent&&e.parent;)e=e.parent;return e}}
            if(e.endsWithParent)return b(e.parent,t,n)}function m(e){
            return 0===k.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function x(e){
            const t=e[0],i=n.substr(e.index),r=b(k,e,i);if(!r)return q;const s=k
            ;k.endScope&&k.endScope._wrap?(d(),
                S.addKeyword(t,k.endScope._wrap)):k.endScope&&k.endScope._multi?(d(),
                u(k.endScope,e)):s.skip?M+=t:(s.returnEnd||s.excludeEnd||(M+=t),
                d(),s.excludeEnd&&(M=t));do{
                k.scope&&!k.isMultiClass&&S.closeNode(),k.skip||k.subLanguage||(R+=k.relevance),
                    k=k.parent}while(k!==r.parent)
                ;return r.starts&&p(r.starts,e),s.returnEnd?0:t.length}let y={};function w(t,s){
            const a=s&&s[0];if(M+=t,null==a)return d(),0
                ;if("begin"===y.type&&"end"===s.type&&y.index===s.index&&""===a){
                if(M+=n.slice(s.index,s.index+1),!o){const t=Error(`0 width match regex (${e})`)
                ;throw t.languageName=e,t.badRule=y.rule,t}return 1}
            if(y=s,"begin"===s.type)return(e=>{
                const t=e[0],n=e.rule,r=new i(n),s=[n.__beforeBegin,n["on:begin"]]
                ;for(const n of s)if(n&&(n(e,r),r.isMatchIgnored))return m(t)
                    ;return n.skip?M+=t:(n.excludeBegin&&(M+=t),
                    d(),n.returnBegin||n.excludeBegin||(M=t)),p(n,e),n.returnBegin?0:t.length})(s)
                ;if("illegal"===s.type&&!r){
                const e=Error('Illegal lexeme "'+a+'" for mode "'+(k.scope||"<unnamed>")+'"')
                ;throw e.mode=k,e}if("end"===s.type){const e=x(s);if(e!==q)return e}
            if("illegal"===s.type&&""===a)return 1
                ;if(A>1e5&&A>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
                ;return M+=a,a.length}const _=E(e)
        ;if(!_)throw $(a.replace("{}",e)),Error('Unknown language: "'+e+'"')
            ;const v=G(_);let O="",k=s||v;const N={},S=new g.__emitter(g);(()=>{const e=[]
        ;for(let t=k;t!==_;t=t.parent)t.scope&&e.unshift(t.scope)
        ;e.forEach((e=>S.openNode(e)))})();let M="",R=0,j=0,A=0,I=!1;try{
            for(k.matcher.considerAll();;){
                A++,I?I=!1:k.matcher.considerAll(),k.matcher.lastIndex=j
                ;const e=k.matcher.exec(n);if(!e)break;const t=w(n.substring(j,e.index),e)
                ;j=e.index+t}return w(n.substr(j)),S.closeAllNodes(),S.finalize(),O=S.toHTML(),{
                language:e,value:O,relevance:R,illegal:!1,_emitter:S,_top:k}}catch(t){
            if(t.message&&t.message.includes("Illegal"))return{language:e,value:F(n),
                illegal:!0,relevance:0,_illegalBy:{message:t.message,index:j,
                    context:n.slice(j-100,j+100),mode:t.mode,resultSoFar:O},_emitter:S};if(o)return{
                language:e,value:F(n),illegal:!1,relevance:0,errorRaised:t,_emitter:S,_top:k}
                ;throw t}}function f(e,n){n=n||g.languages||Object.keys(t);const i=(e=>{
        const t={value:F(e),illegal:!1,relevance:0,_top:l,_emitter:new g.__emitter(g)}
        ;return t._emitter.addText(e),t})(e),r=n.filter(E).filter(y).map((t=>h(t,e,!1)))
    ;r.unshift(i);const s=r.sort(((e,t)=>{
        if(e.relevance!==t.relevance)return t.relevance-e.relevance
            ;if(e.language&&t.language){if(E(e.language).supersetOf===t.language)return 1
            ;if(E(t.language).supersetOf===e.language)return-1}return 0})),[o,a]=s,c=o
    ;return c.secondBest=a,c}function p(e){let t=null;const n=(e=>{
        let t=e.className+" ";t+=e.parentNode?e.parentNode.className:""
        ;const n=g.languageDetectRe.exec(t);if(n){const t=E(n[1])
        ;return t||(U(a.replace("{}",n[1])),
            U("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}
        return t.split(/\s+/).find((e=>d(e)||E(e)))})(e);if(d(n))return
        ;w("before:highlightElement",{el:e,language:n
    }),t=e;const i=t.textContent,s=n?u(i,{language:n,ignoreIllegals:!0
    }):f(i);e.innerHTML=s.value,((e,t,n)=>{const i=t&&r[t]||n
    ;e.classList.add("hljs"),e.classList.add("language-"+i)
    })(e,n,s.language),e.result={language:s.language,re:s.relevance,
        relevance:s.relevance},s.secondBest&&(e.secondBest={
        language:s.secondBest.language,relevance:s.secondBest.relevance
    }),w("after:highlightElement",{el:e,result:s,text:i})}let b=!1;function m(){
        "loading"!==document.readyState?document.querySelectorAll(g.cssSelector).forEach(p):b=!0
    }function E(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}
        function x(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
            r[e.toLowerCase()]=t}))}function y(e){const t=E(e)
        ;return t&&!t.disableAutodetect}function w(e,t){const n=e;s.forEach((e=>{
            e[n]&&e[n](t)}))}
        "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
            b&&m()}),!1),Object.assign(e,{highlight:u,highlightAuto:f,highlightAll:m,
            highlightElement:p,
            highlightBlock:e=>(z("10.7.0","highlightBlock will be removed entirely in v12.0"),
                z("10.7.0","Please use highlightElement now."),p(e)),configure:e=>{g=V(g,e)},
            initHighlighting:()=>{
                m(),z("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
            initHighlightingOnLoad:()=>{
                m(),z("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
            },registerLanguage:(n,i)=>{let r=null;try{r=i(e)}catch(e){
                if($("Language definition for '{}' could not be registered.".replace("{}",n)),
                    !o)throw e;$(e),r=l}
                r.name||(r.name=n),t[n]=r,r.rawDefinition=i.bind(null,e),r.aliases&&x(r.aliases,{
                    languageName:n})},unregisterLanguage:e=>{delete t[e]
            ;for(const t of Object.keys(r))r[t]===e&&delete r[t]},
            listLanguages:()=>Object.keys(t),getLanguage:E,registerAliases:x,
            autoDetection:y,inherit:V,addPlugin:e=>{(e=>{
                e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{
                    e["before:highlightBlock"](Object.assign({block:t.el},t))
                }),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{
                    e["after:highlightBlock"](Object.assign({block:t.el},t))})})(e),s.push(e)}
        }),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0},e.versionString="11.0.1"
        ;for(const e in M)"object"==typeof M[e]&&n(M[e]);return Object.assign(e,M),e
    })({}),Y=Object.freeze({__proto__:null});const Q=J
    ;for(const e of Object.keys(Y)){const t=e.replace("grmr_","")
    ;Q.registerLanguage(t,Y[e])}return Q}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("javascript",(()=>{"use strict"
;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],t=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],s=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],r=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],i=["arguments","this","super","console","window","document","localStorage","module","global"],c=[].concat(r,t,s)
;function o(e){return l("(?=",e,")")}function l(...e){return e.map((e=>{
    return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return b=>{
    const g=e,d={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,
            isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,t=e.input[a]
            ;"<"!==t?">"===t&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
            ;return-1!==e.input.indexOf(a,n)})(e,{after:a
            })||n.ignoreMatch()):n.ignoreMatch()}},u={$pattern:e,keyword:n,literal:a,
            built_in:c,"variable.language":i
        },m="\\.([0-9](_?[0-9])*)",E="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",y={
            className:"number",variants:[{
                begin:`(\\b(${E})((${m})|\\.)?|(${m}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
                begin:`\\b(${E})\\b((${m})\\b|\\.)?|(${m})\\b`},{
                begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                begin:"\\b0[0-7]+n?\\b"}],relevance:0},_={className:"subst",begin:"\\$\\{",
            end:"\\}",keywords:u,contains:[]},N={begin:"html`",end:"",starts:{end:"`",
                returnEnd:!1,contains:[b.BACKSLASH_ESCAPE,_],subLanguage:"xml"}},f={
            begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                contains:[b.BACKSLASH_ESCAPE,_],subLanguage:"css"}},A={className:"string",
            begin:"`",end:"`",contains:[b.BACKSLASH_ESCAPE,_]},v={className:"comment",
            variants:[b.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                    begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
                        begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
                        excludeBegin:!0,relevance:0},{className:"variable",begin:g+"(?=\\s*(-)|$)",
                        endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
            }),b.C_BLOCK_COMMENT_MODE,b.C_LINE_COMMENT_MODE]
        },p=[b.APOS_STRING_MODE,b.QUOTE_STRING_MODE,N,f,A,y,b.REGEXP_MODE]
    ;_.contains=p.concat({begin:/\{/,end:/\}/,keywords:u,contains:["self"].concat(p)
    });const h=[].concat(v,_.contains),S=h.concat([{begin:/\(/,end:/\)/,keywords:u,
        contains:["self"].concat(h)}]),w={className:"params",begin:/\(/,end:/\)/,
        excludeBegin:!0,excludeEnd:!0,keywords:u,contains:S},R={variants:[{
            match:[/class/,/\s+/,g],scope:{1:"keyword",3:"title.class"}},{
            match:[/extends/,/\s+/,l(g,"(",l(/\./,g),")*")],scope:{1:"keyword",
                3:"title.class.inherited"}}]},O={relevance:0,
        match:/\b[A-Z][a-z]+([A-Z][a-z]+)*/,className:"title.class",keywords:{
            _:[...t,...s]}},I={variants:[{match:[/function/,/\s+/,g,/(?=\s*\()/]},{
            match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},
        label:"func.def",contains:[w],illegal:/%/},T={
        match:l(/\b/,(x=[...r,"super"],l("(?!",x.join("|"),")")),g,o(/\(/)),
        className:"title.function",relevance:0};var x;const M={
        begin:l(/\./,o(l(g,/(?![0-9A-Za-z$_(])/))),end:g,excludeBegin:!0,
        keywords:"prototype",className:"property",relevance:0},k={
        match:[/get|set/,/\s+/,g,/(?=\()/],className:{1:"keyword",3:"title.function"},
        contains:[{begin:/\(\)/},w]
    },C="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+b.UNDERSCORE_IDENT_RE+")\\s*=>",B={
        match:[/const|var|let/,/\s+/,g,/\s*/,/=\s*/,o(C)],className:{1:"keyword",
            3:"title.function"},contains:[w]};return{name:"Javascript",
        aliases:["js","jsx","mjs","cjs"],keywords:u,exports:{PARAMS_CONTAINS:S},
        illegal:/#(?![$_A-z])/,contains:[b.SHEBANG({label:"shebang",binary:"node",
            relevance:5}),{label:"use_strict",className:"meta",relevance:10,
            begin:/^\s*['"]use (strict|asm)['"]/
        },b.APOS_STRING_MODE,b.QUOTE_STRING_MODE,N,f,A,v,y,O,{className:"attr",
            begin:g+o(":"),relevance:0},B,{
            begin:"("+b.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
            keywords:"return throw case",relevance:0,contains:[v,b.REGEXP_MODE,{
                className:"function",begin:C,returnBegin:!0,end:"\\s*=>",contains:[{
                    className:"params",variants:[{begin:b.UNDERSCORE_IDENT_RE,relevance:0},{
                        className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
                        excludeEnd:!0,keywords:u,contains:S}]}]},{begin:/,/,relevance:0},{match:/\s+/,
                relevance:0},{variants:[{begin:"<>",end:"</>"},{begin:d.begin,
                    "on:begin":d.isTrulyOpeningTag,end:d.end}],subLanguage:"xml",contains:[{
                    begin:d.begin,end:d.end,skip:!0,contains:["self"]}]}]},I,{
            beginKeywords:"while if switch catch for"},{
            begin:"\\b(?!function)"+b.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin:!0,label:"func.def",contains:[w,b.inherit(b.TITLE_MODE,{begin:g,
                className:"title.function"})]},{match:/\.\.\./,relevance:0},M,{match:"\\$"+g,
            relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
            contains:[w]},T,{relevance:0,match:/\b[A-Z][A-Z_]+\b/,
            className:"variable.constant"},R,k,{match:/\$[(.]/}]}}})());
