(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const f of r)if(f.type==="childList")for(const c of f.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const f={};return r.integrity&&(f.integrity=r.integrity),r.referrerPolicy&&(f.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?f.credentials="include":r.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(r){if(r.ep)return;r.ep=!0;const f=i(r);fetch(r.href,f)}})();function O(){}function Re(o){return o()}function Ae(){return Object.create(null)}function ce(o){o.forEach(Re)}function Se(o){return typeof o=="function"}function G(o,e){return o!=o?e==e:o!==e||o&&typeof o=="object"||typeof o=="function"}function je(o){return Object.keys(o).length===0}const Be=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Z(o,e){o.appendChild(e)}function l(o,e,i){o.insertBefore(e,i||null)}function t(o){o.parentNode&&o.parentNode.removeChild(o)}function Xe(o,e){for(let i=0;i<o.length;i+=1)o[i]&&o[i].d(e)}function u(o){return document.createElement(o)}function ee(o){return document.createTextNode(o)}function p(){return ee(" ")}function Ce(){return ee("")}function Ne(o,e,i,d){return o.addEventListener(e,i,d),()=>o.removeEventListener(e,i,d)}function J(o,e,i){i==null?o.removeAttribute(e):o.getAttribute(e)!==i&&o.setAttribute(e,i)}function Ue(o){return Array.from(o.childNodes)}function Ie(o,e){e=""+e,o.data!==e&&(o.data=e)}function _e(o,e,i){o.classList[i?"add":"remove"](e)}function ke(o,e){return new o(e)}let fe;function re(o){fe=o}function ze(){if(!fe)throw new Error("Function called outside component initialization");return fe}function Oe(o){ze().$$.on_mount.push(o)}const se=[],oe=[];let ne=[];const Me=[],Ke=Promise.resolve();let We=!1;function Ze(){We||(We=!0,Ke.then(Fe))}function ge(o){ne.push(o)}function Ge(o){Me.push(o)}const Le=new Set;let de=0;function Fe(){if(de!==0)return;const o=fe;do{try{for(;de<se.length;){const e=se[de];de++,re(e),Ve(e.$$)}}catch(e){throw se.length=0,de=0,e}for(re(null),se.length=0,de=0;oe.length;)oe.pop()();for(let e=0;e<ne.length;e+=1){const i=ne[e];Le.has(i)||(Le.add(i),i())}ne.length=0}while(se.length);for(;Me.length;)Me.pop()();We=!1,Le.clear(),re(o)}function Ve(o){if(o.fragment!==null){o.update(),ce(o.before_update);const e=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,e),o.after_update.forEach(ge)}}function Ye(o){const e=[],i=[];ne.forEach(d=>o.indexOf(d)===-1?e.push(d):i.push(d)),i.forEach(d=>d()),ne=e}const he=new Set;let le;function be(){le={r:0,c:[],p:le}}function ye(){le.r||ce(le.c),le=le.p}function S(o,e){o&&o.i&&(he.delete(o),o.i(e))}function X(o,e,i,d){if(o&&o.o){if(he.has(o))return;he.add(o),le.c.push(()=>{he.delete(o),d&&(i&&o.d(1),d())}),o.o(e)}else d&&d()}function Je(o,e,i){const d=o.$$.props[e];d!==void 0&&(o.$$.bound[d]=i,i(o.$$.ctx[d]))}function K(o){o&&o.c()}function U(o,e,i,d){const{fragment:r,after_update:f}=o.$$;r&&r.m(e,i),d||ge(()=>{const c=o.$$.on_mount.map(Re).filter(Se);o.$$.on_destroy?o.$$.on_destroy.push(...c):ce(c),o.$$.on_mount=[]}),f.forEach(ge)}function z(o,e){const i=o.$$;i.fragment!==null&&(Ye(i.after_update),ce(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Qe(o,e){o.$$.dirty[0]===-1&&(se.push(o),Ze(),o.$$.dirty.fill(0)),o.$$.dirty[e/31|0]|=1<<e%31}function V(o,e,i,d,r,f,c,k=[-1]){const a=fe;re(o);const w=o.$$={fragment:null,ctx:[],props:f,update:O,not_equal:r,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:Ae(),dirty:k,skip_bound:!1,root:e.target||a.$$.root};c&&c(w.root);let $=!1;if(w.ctx=i?i(o,e.props||{},(b,T,...m)=>{const y=m.length?m[0]:T;return w.ctx&&r(w.ctx[b],w.ctx[b]=y)&&(!w.skip_bound&&w.bound[b]&&w.bound[b](y),$&&Qe(o,b)),T}):[],w.update(),$=!0,ce(w.before_update),w.fragment=d?d(w.ctx):!1,e.target){if(e.hydrate){const b=Ue(e.target);w.fragment&&w.fragment.l(b),b.forEach(t)}else w.fragment&&w.fragment.c();e.intro&&S(o.$$.fragment),U(o,e.target,e.anchor,e.customElement),Fe()}re(a)}class Y{$destroy(){z(this,1),this.$destroy=O}$on(e,i){if(!Se(i))return O;const d=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return d.push(i),()=>{const r=d.indexOf(i);r!==-1&&d.splice(r,1)}}$set(e){this.$$set&&!je(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function et(o){let e;return{c(){e=u("div"),J(e,"class","svelte-1h5ldsd"),_e(e,"hover",!o[0])},m(i,d){l(i,e,d),o[5](e)},p(i,[d]){d&1&&_e(e,"hover",!i[0])},i:O,o:O,d(i){i&&t(e),o[5](null)}}}function tt(o){const e=o.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight;return e.top*1.05<=i&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function lt(o,e,i){let{path:d}=e,{options:r={}}=e,{fixed:f=!1}=e,{loopDelay:c=2e3}=e,k={preload:!0,poster:"npt:10:10",autoPlay:!0},a;Oe(()=>{let $={...k,...r},b=!1;$.autoPlay&&($.autoPlay=!1,b=!0);let T=window.AsciinemaPlayer.create("asciinema/recordings/"+d,a,$);const m=function(){a&&tt(a)&&b&&(console.debug("Scroll event triggered for "+d),document.removeEventListener("scroll",m),b=!1,T.play())};setTimeout(()=>(c&&(console.debug("Attaching end-listener for "+d),T.addEventListener("ended",()=>{setTimeout(()=>T.getCurrentTime()==T.getDuration()&&T.play(),c)})),b&&(console.debug("Attaching scroll-listener for "+d),document.addEventListener("scroll",m,{passive:!0}),m()),()=>{document.removeEventListener("scroll",m),T.dispose()}),0)});function w($){oe[$?"unshift":"push"](()=>{a=$,i(1,a)})}return o.$$set=$=>{"path"in $&&i(2,d=$.path),"options"in $&&i(3,r=$.options),"fixed"in $&&i(0,f=$.fixed),"loopDelay"in $&&i(4,c=$.loopDelay)},[f,a,d,r,c,w]}class Q extends Y{constructor(e){super(),V(this,e,lt,et,G,{path:2,options:3,fixed:0,loopDelay:4})}}function ot(o){let e,i,d,r,f,c,k,a,w,$,b,T,m,y,L,W=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,I,N,A;return N=new Q({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){e=u("h2"),e.textContent="Getting Started",i=p(),d=u("p"),d.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',r=p(),f=u("p"),f.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,c=p(),k=u("h3"),k.textContent="Hashcat",a=p(),w=u("p"),w.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,$=p(),b=u("h3"),b.textContent="Kali Linux - Prepare the rockyou.txt wordlist",T=p(),m=u("p"),m.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",y=p(),L=u("pre"),I=p(),K(N.$$.fragment),J(L,"class","language-sh")},m(v,H){l(v,e,H),l(v,i,H),l(v,d,H),l(v,r,H),l(v,f,H),l(v,c,H),l(v,k,H),l(v,a,H),l(v,w,H),l(v,$,H),l(v,b,H),l(v,T,H),l(v,m,H),l(v,y,H),l(v,L,H),L.innerHTML=W,l(v,I,H),U(N,v,H),A=!0},p:O,i(v){A||(S(N.$$.fragment,v),A=!0)},o(v){X(N.$$.fragment,v),A=!1},d(v){v&&t(e),v&&t(i),v&&t(d),v&&t(r),v&&t(f),v&&t(c),v&&t(k),v&&t(a),v&&t(w),v&&t($),v&&t(b),v&&t(T),v&&t(m),v&&t(y),v&&t(L),v&&t(I),z(N,v)}}}class He extends Y{constructor(e){super(),V(this,e,null,ot,G,{})}}function it(o){let e,i,d,r,f,c,k,a,w,$,b,T;return w=new Q({props:{path:"ntlm.cast"}}),{c(){e=u("h2"),e.textContent="Wordlist Attack",i=p(),d=u("p"),d.textContent="For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.",r=p(),f=u("blockquote"),f.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code></p>",c=p(),k=u("ul"),k.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li>`,a=p(),K(w.$$.fragment),$=p(),b=u("p"),b.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password1</code>"},m(m,y){l(m,e,y),l(m,i,y),l(m,d,y),l(m,r,y),l(m,f,y),l(m,c,y),l(m,k,y),l(m,a,y),U(w,m,y),l(m,$,y),l(m,b,y),T=!0},p:O,i(m){T||(S(w.$$.fragment,m),T=!0)},o(m){X(w.$$.fragment,m),T=!1},d(m){m&&t(e),m&&t(i),m&&t(d),m&&t(r),m&&t(f),m&&t(c),m&&t(k),m&&t(a),z(w,m),m&&t($),m&&t(b)}}}class dt extends Y{constructor(e){super(),V(this,e,null,it,G,{})}}function st(o){let e,i,d,r,f,c,k,a,w,$=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,b,T,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E,n,s;return v=new Q({props:{path:"ntlm_password1111.cast"}}),{c(){e=u("h2"),e.textContent="Hybrid Attack",i=p(),d=u("h3"),d.textContent="Introduction",r=p(),f=u("p"),f.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',c=p(),k=u("p"),k.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',a=p(),w=u("pre"),b=p(),T=u("h3"),T.textContent="Hybrid Wordlist + Brute-force Attack",m=p(),y=u("p"),y.textContent="Run the following in Hashcat",L=p(),W=u("blockquote"),W.innerHTML="<p>$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code></p>",I=p(),N=u("ul"),N.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li> 
<li><code>?d?d?d?d</code> - The character mask to append</li>`,A=p(),K(v.$$.fragment),H=p(),F=u("p"),F.innerHTML="We can now see the password is <code>password1111</code>",q=p(),j=u("h3"),j.textContent="Hybrid Mask + Wordlist Attack",D=p(),P=u("p"),P.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",R=p(),B=u("p"),B.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",E=p(),n=u("blockquote"),n.innerHTML="<p>$&gt; <code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",J(w,"class","language-undefined")},m(h,g){l(h,e,g),l(h,i,g),l(h,d,g),l(h,r,g),l(h,f,g),l(h,c,g),l(h,k,g),l(h,a,g),l(h,w,g),w.innerHTML=$,l(h,b,g),l(h,T,g),l(h,m,g),l(h,y,g),l(h,L,g),l(h,W,g),l(h,I,g),l(h,N,g),l(h,A,g),U(v,h,g),l(h,H,g),l(h,F,g),l(h,q,g),l(h,j,g),l(h,D,g),l(h,P,g),l(h,R,g),l(h,B,g),l(h,E,g),l(h,n,g),s=!0},p:O,i(h){s||(S(v.$$.fragment,h),s=!0)},o(h){X(v.$$.fragment,h),s=!1},d(h){h&&t(e),h&&t(i),h&&t(d),h&&t(r),h&&t(f),h&&t(c),h&&t(k),h&&t(a),h&&t(w),h&&t(b),h&&t(T),h&&t(m),h&&t(y),h&&t(L),h&&t(W),h&&t(I),h&&t(N),h&&t(A),z(v,h),h&&t(H),h&&t(F),h&&t(q),h&&t(j),h&&t(D),h&&t(P),h&&t(R),h&&t(B),h&&t(E),h&&t(n)}}}class nt extends Y{constructor(e){super(),V(this,e,null,st,G,{})}}function rt(o){let e,i,d,r,f,c,k,a,w,$,b,T,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E,n,s,h,g,te;return m=new Q({props:{path:"ntlm_bruteforce.cast"}}),s=new Q({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){e=u("h2"),e.textContent="Brute-force-best-force",i=p(),d=u("p"),d.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",r=p(),f=u("blockquote"),f.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",c=p(),k=u("p"),k.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',a=p(),w=u("blockquote"),w.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",$=p(),b=u("ul"),b.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,T=p(),K(m.$$.fragment),y=p(),L=u("p"),L.innerHTML="We can now see the password is <code>pass</code>",W=p(),I=u("h3"),I.textContent="Brute-force with unknown length",N=p(),A=u("p"),A.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",v=p(),H=u("p"),H.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",F=p(),q=u("blockquote"),q.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",j=p(),D=u("ul"),D.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",P=p(),R=u("p"),R.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",B=p(),E=u("blockquote"),E.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",n=p(),K(s.$$.fragment),h=p(),g=u("p"),g.innerHTML="We can now see the password is <code>p@s</code>"},m(x,C){l(x,e,C),l(x,i,C),l(x,d,C),l(x,r,C),l(x,f,C),l(x,c,C),l(x,k,C),l(x,a,C),l(x,w,C),l(x,$,C),l(x,b,C),l(x,T,C),U(m,x,C),l(x,y,C),l(x,L,C),l(x,W,C),l(x,I,C),l(x,N,C),l(x,A,C),l(x,v,C),l(x,H,C),l(x,F,C),l(x,q,C),l(x,j,C),l(x,D,C),l(x,P,C),l(x,R,C),l(x,B,C),l(x,E,C),l(x,n,C),U(s,x,C),l(x,h,C),l(x,g,C),te=!0},p:O,i(x){te||(S(m.$$.fragment,x),S(s.$$.fragment,x),te=!0)},o(x){X(m.$$.fragment,x),X(s.$$.fragment,x),te=!1},d(x){x&&t(e),x&&t(i),x&&t(d),x&&t(r),x&&t(f),x&&t(c),x&&t(k),x&&t(a),x&&t(w),x&&t($),x&&t(b),x&&t(T),z(m,x),x&&t(y),x&&t(L),x&&t(W),x&&t(I),x&&t(N),x&&t(A),x&&t(v),x&&t(H),x&&t(F),x&&t(q),x&&t(j),x&&t(D),x&&t(P),x&&t(R),x&&t(B),x&&t(E),x&&t(n),z(s,x),x&&t(h),x&&t(g)}}}class ft extends Y{constructor(e){super(),V(this,e,null,rt,G,{})}}function ct(o){let e,i,d,r,f,c,k,a,w,$,b,T=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E;return W=new Q({props:{path:"crunch.cast",options:{rows:15}}}),P=new Q({props:{path:"ntlm_rockyou2801.cast"}}),{c(){e=u("h2"),e.textContent="Combination Attacks",i=p(),d=u("p"),d.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",r=p(),f=u("p"),f.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",c=p(),k=u("p"),k.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",a=p(),w=u("p"),w.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",$=p(),b=u("pre"),m=p(),y=u("blockquote"),y.innerHTML="<p>$&gt; <code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",L=p(),K(W.$$.fragment),I=p(),N=u("p"),N.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",A=p(),v=u("p"),v.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",H=p(),F=u("blockquote"),F.innerHTML="<p>$&gt; <code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",q=p(),j=u("ul"),j.innerHTML=`<li><code>-a 1</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,D=p(),K(P.$$.fragment),R=p(),B=u("p"),B.innerHTML="We can now see the password is <code>rockyou2801</code>",J(b,"class","language-undefined")},m(n,s){l(n,e,s),l(n,i,s),l(n,d,s),l(n,r,s),l(n,f,s),l(n,c,s),l(n,k,s),l(n,a,s),l(n,w,s),l(n,$,s),l(n,b,s),b.innerHTML=T,l(n,m,s),l(n,y,s),l(n,L,s),U(W,n,s),l(n,I,s),l(n,N,s),l(n,A,s),l(n,v,s),l(n,H,s),l(n,F,s),l(n,q,s),l(n,j,s),l(n,D,s),U(P,n,s),l(n,R,s),l(n,B,s),E=!0},p:O,i(n){E||(S(W.$$.fragment,n),S(P.$$.fragment,n),E=!0)},o(n){X(W.$$.fragment,n),X(P.$$.fragment,n),E=!1},d(n){n&&t(e),n&&t(i),n&&t(d),n&&t(r),n&&t(f),n&&t(c),n&&t(k),n&&t(a),n&&t(w),n&&t($),n&&t(b),n&&t(m),n&&t(y),n&&t(L),z(W,n),n&&t(I),n&&t(N),n&&t(A),n&&t(v),n&&t(H),n&&t(F),n&&t(q),n&&t(j),n&&t(D),z(P,n),n&&t(R),n&&t(B)}}}class at extends Y{constructor(e){super(),V(this,e,null,ct,G,{})}}function ut(o){let e,i,d;return{c(){e=u("table"),e.innerHTML=`<thead><tr><th align="left">Name</th> 
<th align="left">Function</th> 
<th align="left">Description</th> 
<th align="left">Example Rule</th> 
<th align="left">Input Word</th> 
<th align="left">Output Word</th> 
<th align="left">Note</th></tr></thead> 
<tbody><tr><td align="left">Nothing</td> 
<td align="left"><code>:</code></td> 
<td align="left">Do nothing (passthrough)</td> 
<td align="left"><code>:</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Lowercase</td> 
<td align="left"><code>l</code></td> 
<td align="left">Lowercase all letters</td> 
<td align="left"><code>l</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Uppercase</td> 
<td align="left"><code>u</code></td> 
<td align="left">Uppercase all letters</td> 
<td align="left"><code>u</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Capitalize</td> 
<td align="left"><code>c</code></td> 
<td align="left">Capitalize the first letter and lower the rest</td> 
<td align="left"><code>c</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@ssw0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Invert Capitalize</td> 
<td align="left"><code>C</code></td> 
<td align="left">Lowercase first found character and uppercase the rest</td> 
<td align="left"><code>C</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Toggle Case</td> 
<td align="left"><code>t</code></td> 
<td align="left">Toggle the case of all characters in word.</td> 
<td align="left"><code>t</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSw0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Toggle @</td> 
<td align="left"><code>TN</code></td> 
<td align="left">Toggle the case of characters at position N</td> 
<td align="left"><code>T3</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@sSW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Reverse</td> 
<td align="left"><code>r</code></td> 
<td align="left">Reverse the entire word</td> 
<td align="left"><code>r</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dr0Wss@p</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate</td> 
<td align="left"><code>d</code></td> 
<td align="left">Duplicate entire word</td> 
<td align="left"><code>d</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rdp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate N</td> 
<td align="left"><code>pN</code></td> 
<td align="left">Append duplicated word N times</td> 
<td align="left"><code>p2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rdp@ssW0rdp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Reflect</td> 
<td align="left"><code>f</code></td> 
<td align="left">Duplicate word reversed</td> 
<td align="left"><code>f</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rddr0Wss@p</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Rotate Left</td> 
<td align="left"><code>{</code></td> 
<td align="left">Rotate the word left.</td> 
<td align="left"><code>{</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>@ssW0rdp</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Rotate Right</td> 
<td align="left"><code>}</code></td> 
<td align="left">Rotate the word right</td> 
<td align="left"><code>}</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dp@ssW0r</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Append Character</td> 
<td align="left"><code>$X</code></td> 
<td align="left">Append character X to end</td> 
<td align="left"><code>$1$2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rd12</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Prepend Character</td> 
<td align="left"><code>^X</code></td> 
<td align="left">Prepend character X to front</td> 
<td align="left"><code>^2^1</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>12p@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Truncate left</td> 
<td align="left"><code>[</code></td> 
<td align="left">Delete first character</td> 
<td align="left"><code>[</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Truncate right</td> 
<td align="left"><code>]</code></td> 
<td align="left">Delete last character</td> 
<td align="left"><code>]</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0r</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Delete @ N</td> 
<td align="left"><code>DN</code></td> 
<td align="left">Delete character at position N</td> 
<td align="left"><code>D3</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@sW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Extract range</td> 
<td align="left"><code>xNM</code></td> 
<td align="left">“Extract M characters starting at position N”</td> 
<td align="left"><code>x04</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ss</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Omit range</td> 
<td align="left"><code>ONM</code></td> 
<td align="left">“Delete M characters starting at position N”</td> 
<td align="left"><code>O12</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>psW0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Insert @ N</td> 
<td align="left"><code>iNX</code></td> 
<td align="left">Insert character X at position N</td> 
<td align="left"><code>i4!</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ss!W0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Overwrite @ N</td> 
<td align="left"><code>oNX</code></td> 
<td align="left">Overwrite character at position N with X</td> 
<td align="left"><code>o3$</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@s$W0rd</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Truncate @ N</td> 
<td align="left"><code>&#39;N</code></td> 
<td align="left">Truncate word at position N</td> 
<td align="left"><code>&#39;6</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0</code></td> 
<td align="left">*</td></tr> 
<tr><td align="left">Replace</td> 
<td align="left"><code>sXY</code></td> 
<td align="left">Replace all instances of X with Y</td> 
<td align="left"><code>ss$</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@$$W0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Purge</td> 
<td align="left"><code>@X</code></td> 
<td align="left">Purge all instances of X</td> 
<td align="left"><code>@s</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@W0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate first N</td> 
<td align="left"><code>zN</code></td> 
<td align="left">Duplicate first character N times</td> 
<td align="left"><code>z2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>ppp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate last N</td> 
<td align="left"><code>ZN</code></td> 
<td align="left">Duplicate last character N times</td> 
<td align="left"><code>Z2</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssW0rddd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Duplicate all</td> 
<td align="left"><code>q</code></td> 
<td align="left">Duplicate every character</td> 
<td align="left"><code>q</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>pp@@ssssWW00rrdd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Extract memory</td> 
<td align="left"><code>XNMI</code></td> 
<td align="left">Insert substring of length M starting from position N of word saved to memory at position I</td> 
<td align="left"><code>lMX428</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rdw0</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Append memory</td> 
<td align="left"><code>4</code></td> 
<td align="left">Append the word saved to memory to current word</td> 
<td align="left"><code>uMl4</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>p@ssw0rdP@SSW0RD</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Prepend memory</td> 
<td align="left"><code>6</code></td> 
<td align="left">Prepend the word saved to memory to current word</td> 
<td align="left"><code>rMr6</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>dr0Wss@pp@ssW0rd</code></td> 
<td align="left"></td></tr> 
<tr><td align="left">Memorize</td> 
<td align="left"><code>M</code></td> 
<td align="left">Memorize current word</td> 
<td align="left"><code>lMuX084</code></td> 
<td align="left"><code>p@ssW0rd</code></td> 
<td align="left"><code>P@SSp@ssw0rdW0RD</code></td> 
<td align="left"></td></tr></tbody>`,i=p(),d=u("p"),d.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(r,f){l(r,e,f),l(r,i,f),l(r,d,f)},p:O,i:O,o:O,d(r){r&&t(e),r&&t(i),r&&t(d)}}}class pt extends Y{constructor(e){super(),V(this,e,null,ut,G,{})}}function mt(o){let e,i,d,r,f,c,k,a,w,$,b,T,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E,n,s,h,g,te,x,C,ae,$e,ue,xe,pe,Te,ie,ve,me,we;return k=new pt({}),L=new Q({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),q=new Q({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),ie=new Q({props:{path:"simplerule_crack.cast"}}),{c(){e=u("h2"),e.textContent="Rules",i=p(),d=u("p"),d.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",r=p(),f=u("p"),f.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',c=p(),K(k.$$.fragment),a=p(),w=u("hr"),$=p(),b=u("p"),b.innerHTML="We will use a sample wordlist <code>password.txt</code> which is a text file with one single line, <code>password</code>.",T=p(),m=u("p"),m.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",y=p(),K(L.$$.fragment),W=p(),I=u("p"),I.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",N=p(),A=u("blockquote"),A.innerHTML="<p>$&gt; <code>hashcat password.txt -r simplerule.rule --stdout</code></p>",v=p(),H=u("ul"),H.innerHTML=`<li><code>password.txt</code> - Wordlist</li> 
<li><code>-r simplerule.rule</code> - Use rule list</li> 
<li><code>--stdout</code> - Show password candidates instead of cracking</li>`,F=p(),K(q.$$.fragment),j=p(),D=u("p"),D.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",P=p(),R=u("hr"),B=p(),E=u("p"),E.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",n=p(),s=u("ul"),s.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,h=p(),g=u("blockquote"),g.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",te=p(),x=u("hr"),C=p(),ae=u("p"),ae.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",$e=p(),ue=u("blockquote"),ue.innerHTML="<p>$&gt; <code>hashcat -m 1000 simplerule_password.txt /usr/share/wordlists/rockyou.txt -r labrule.rule</code></p>",xe=p(),pe=u("ul"),pe.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>simplerule_password.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - Wordlist</li> 
<li><code>-r labrule.rule</code> - Use rule list</li>`,Te=p(),K(ie.$$.fragment),ve=p(),me=u("p"),me.innerHTML="We can now see the password is <code>Friend$!</code>"},m(_,M){l(_,e,M),l(_,i,M),l(_,d,M),l(_,r,M),l(_,f,M),l(_,c,M),U(k,_,M),l(_,a,M),l(_,w,M),l(_,$,M),l(_,b,M),l(_,T,M),l(_,m,M),l(_,y,M),U(L,_,M),l(_,W,M),l(_,I,M),l(_,N,M),l(_,A,M),l(_,v,M),l(_,H,M),l(_,F,M),U(q,_,M),l(_,j,M),l(_,D,M),l(_,P,M),l(_,R,M),l(_,B,M),l(_,E,M),l(_,n,M),l(_,s,M),l(_,h,M),l(_,g,M),l(_,te,M),l(_,x,M),l(_,C,M),l(_,ae,M),l(_,$e,M),l(_,ue,M),l(_,xe,M),l(_,pe,M),l(_,Te,M),U(ie,_,M),l(_,ve,M),l(_,me,M),we=!0},p:O,i(_){we||(S(k.$$.fragment,_),S(L.$$.fragment,_),S(q.$$.fragment,_),S(ie.$$.fragment,_),we=!0)},o(_){X(k.$$.fragment,_),X(L.$$.fragment,_),X(q.$$.fragment,_),X(ie.$$.fragment,_),we=!1},d(_){_&&t(e),_&&t(i),_&&t(d),_&&t(r),_&&t(f),_&&t(c),z(k,_),_&&t(a),_&&t(w),_&&t($),_&&t(b),_&&t(T),_&&t(m),_&&t(y),z(L,_),_&&t(W),_&&t(I),_&&t(N),_&&t(A),_&&t(v),_&&t(H),_&&t(F),z(q,_),_&&t(j),_&&t(D),_&&t(P),_&&t(R),_&&t(B),_&&t(E),_&&t(n),_&&t(s),_&&t(h),_&&t(g),_&&t(te),_&&t(x),_&&t(C),_&&t(ae),_&&t($e),_&&t(ue),_&&t(xe),_&&t(pe),_&&t(Te),z(ie,_),_&&t(ve),_&&t(me)}}}class wt extends Y{constructor(e){super(),V(this,e,null,mt,G,{})}}function ht(o){let e,i,d,r,f,c,k;return{c(){e=u("h2"),e.textContent="Remark",i=p(),d=u("blockquote"),d.innerHTML="<p>🔥 This completes the main section on password cracking 🔥</p>",r=p(),f=u("p"),f.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",c=p(),k=u("p"),k.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(a,w){l(a,e,w),l(a,i,w),l(a,d,w),l(a,r,w),l(a,f,w),l(a,c,w),l(a,k,w)},p:O,i:O,o:O,d(a){a&&t(e),a&&t(i),a&&t(d),a&&t(r),a&&t(f),a&&t(c),a&&t(k)}}}class _t extends Y{constructor(e){super(),V(this,e,null,ht,G,{})}}function kt(o){let e,i,d,r,f,c,k,a,w,$,b,T,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E,n;return b=new Q({props:{path:"office2john_demo.cast"}}),q=new Q({props:{path:"office2john_prepare.cast"}}),E=new Q({props:{path:"office2john_crack.cast"}}),{c(){e=u("h2"),e.textContent="Cracking other hashes",i=p(),d=u("p"),d.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",r=p(),f=u("p"),f.textContent="We will now learn how to extract a password from a password-protected Word document file.",c=p(),k=u("p"),k.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",a=p(),w=u("blockquote"),w.innerHTML="<p>$&gt; <code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",$=p(),K(b.$$.fragment),T=p(),m=u("p"),m.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",y=p(),L=u("p"),L.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',W=p(),I=u("table"),I.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
<th align="center">Hash-Name</th> 
<th align="left">Example</th></tr></thead> 
<tbody><tr><td align="center">9500</td> 
<td align="center">…</td> 
<td align="left">…</td></tr> 
<tr><td align="center">9600</td> 
<td align="center">MS Office 2013</td> 
<td align="left"><code>$office$*2013*100000*256*16*7dd611d...</code></td></tr> 
<tr><td align="center">9700</td> 
<td align="center">…</td> 
<td align="left">…</td></tr></tbody>`,N=p(),A=u("hr"),v=p(),H=u("p"),H.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,F=p(),K(q.$$.fragment),j=p(),D=u("p"),D.textContent="Now we can crack the hash",P=p(),R=u("blockquote"),R.innerHTML="<p>$&gt; <code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",B=p(),K(E.$$.fragment)},m(s,h){l(s,e,h),l(s,i,h),l(s,d,h),l(s,r,h),l(s,f,h),l(s,c,h),l(s,k,h),l(s,a,h),l(s,w,h),l(s,$,h),U(b,s,h),l(s,T,h),l(s,m,h),l(s,y,h),l(s,L,h),l(s,W,h),l(s,I,h),l(s,N,h),l(s,A,h),l(s,v,h),l(s,H,h),l(s,F,h),U(q,s,h),l(s,j,h),l(s,D,h),l(s,P,h),l(s,R,h),l(s,B,h),U(E,s,h),n=!0},p:O,i(s){n||(S(b.$$.fragment,s),S(q.$$.fragment,s),S(E.$$.fragment,s),n=!0)},o(s){X(b.$$.fragment,s),X(q.$$.fragment,s),X(E.$$.fragment,s),n=!1},d(s){s&&t(e),s&&t(i),s&&t(d),s&&t(r),s&&t(f),s&&t(c),s&&t(k),s&&t(a),s&&t(w),s&&t($),z(b,s),s&&t(T),s&&t(m),s&&t(y),s&&t(L),s&&t(W),s&&t(I),s&&t(N),s&&t(A),s&&t(v),s&&t(H),s&&t(F),z(q,s),s&&t(j),s&&t(D),s&&t(P),s&&t(R),s&&t(B),z(E,s)}}}class bt extends Y{constructor(e){super(),V(this,e,null,kt,G,{})}}function yt(o){let e,i,d,r,f,c,k,a,w,$,b,T,m,y,L,W,I,N,A,v,H,F,q,j,D,P,R,B,E;return{c(){e=u("h2"),e.textContent="Exercises",i=p(),d=u("h3"),d.textContent="Exercise 1",r=p(),f=u("p"),f.textContent="Write a rule list that will",c=p(),k=u("ul"),k.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,a=p(),w=u("p"),w.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",$=p(),b=u("h3"),b.textContent="Exercise 2",T=p(),m=u("blockquote"),m.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",y=p(),L=u("p"),L.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",W=p(),I=u("h3"),I.textContent="Exercise 3",N=p(),A=u("blockquote"),A.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",v=p(),H=u("p"),H.textContent="Hint: Have you been watching your lectures?",F=p(),q=u("h3"),q.textContent="Exercise 4 (Optional)",j=p(),D=u("blockquote"),D.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",P=p(),R=u("p"),R.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',B=p(),E=u("p"),E.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(n,s){l(n,e,s),l(n,i,s),l(n,d,s),l(n,r,s),l(n,f,s),l(n,c,s),l(n,k,s),l(n,a,s),l(n,w,s),l(n,$,s),l(n,b,s),l(n,T,s),l(n,m,s),l(n,y,s),l(n,L,s),l(n,W,s),l(n,I,s),l(n,N,s),l(n,A,s),l(n,v,s),l(n,H,s),l(n,F,s),l(n,q,s),l(n,j,s),l(n,D,s),l(n,P,s),l(n,R,s),l(n,B,s),l(n,E,s)},p:O,i:O,o:O,d(n){n&&t(e),n&&t(i),n&&t(d),n&&t(r),n&&t(f),n&&t(c),n&&t(k),n&&t(a),n&&t(w),n&&t($),n&&t(b),n&&t(T),n&&t(m),n&&t(y),n&&t(L),n&&t(W),n&&t(I),n&&t(N),n&&t(A),n&&t(v),n&&t(H),n&&t(F),n&&t(q),n&&t(j),n&&t(D),n&&t(P),n&&t(R),n&&t(B),n&&t(E)}}}class $t extends Y{constructor(e){super(),V(this,e,null,yt,G,{})}}function xt(o){let e,i,d,r=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,f,c,k='<code class="language-undefined">Special thanks to Wesley Lacy for providing the lesson plan and resources</code>',a,w;return{c(){e=u("h1"),e.textContent="COMP6845 | Password Cracking",i=p(),d=u("pre"),f=p(),c=u("pre"),a=p(),w=u("p"),w.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",J(d,"class","language-undefined"),J(c,"class","language-undefined")},m($,b){l($,e,b),l($,i,b),l($,d,b),d.innerHTML=r,l($,f,b),l($,c,b),c.innerHTML=k,l($,a,b),l($,w,b)},p:O,i:O,o:O,d($){$&&t(e),$&&t(i),$&&t(d),$&&t(f),$&&t(c),$&&t(a),$&&t(w)}}}class Tt extends Y{constructor(e){super(),V(this,e,null,xt,G,{})}}function qe(o){let e,i,d=o[0][o[1]-1][0]+"",r,f,c,k;return{c(){e=u("button"),i=ee("« "),r=ee(d),f=ee(" «")},m(a,w){l(a,e,w),Z(e,i),Z(e,r),Z(e,f),c||(k=Ne(e,"click",o[7]),c=!0)},p(a,w){w&3&&d!==(d=a[0][a[1]-1][0]+"")&&Ie(r,d)},d(a){a&&t(e),c=!1,k()}}}function Ee(o){let e,i,d=o[0][o[1]+1][0]+"",r,f,c,k;return{c(){e=u("button"),i=ee("» "),r=ee(d),f=ee(" »")},m(a,w){l(a,e,w),Z(e,i),Z(e,r),Z(e,f),c||(k=Ne(e,"click",o[8]),c=!0)},p(a,w){w&3&&d!==(d=a[0][a[1]+1][0]+"")&&Ie(r,d)},d(a){a&&t(e),c=!1,k()}}}function vt(o){let e,i,d,r,f,c,k=o[0][o[1]][0]+"",a,w,$,b,T,m=o[1]>0&&qe(o),y=o[1]<o[0].length-1&&Ee(o);return{c(){e=u("div"),i=u("div"),d=u("div"),m&&m.c(),r=p(),f=u("div"),c=u("h4"),a=ee(k),w=p(),$=u("div"),y&&y.c(),b=p(),T=u("hr"),J(d,"class","svelte-14sokvu"),J(f,"class","svelte-14sokvu"),J($,"class","svelte-14sokvu"),J(i,"class","navigation svelte-14sokvu"),J(T,"class","svelte-14sokvu"),_e(T,"wide",o[3]),J(e,"class","container svelte-14sokvu")},m(L,W){l(L,e,W),Z(e,i),Z(i,d),m&&m.m(d,null),Z(i,r),Z(i,f),Z(f,c),Z(c,a),Z(i,w),Z(i,$),y&&y.m($,null),Z(e,b),Z(e,T),o[9](e)},p(L,[W]){L[1]>0?m?m.p(L,W):(m=qe(L),m.c(),m.m(d,null)):m&&(m.d(1),m=null),W&3&&k!==(k=L[0][L[1]][0]+"")&&Ie(a,k),L[1]<L[0].length-1?y?y.p(L,W):(y=Ee(L),y.c(),y.m($,null)):y&&(y.d(1),y=null),W&8&&_e(T,"wide",L[3])},i:O,o:O,d(L){L&&t(e),m&&m.d(),y&&y.d(),o[9](null)}}}function Lt(o,e,i){let{items:d=[]}=e,{activeItem:r}=e,f=0,c,k,a,w;Oe(()=>{new IntersectionObserver(([m])=>i(3,w=m.intersectionRatio<1),{threshold:[1]}).observe(a)});const $=()=>{i(1,f--,f)},b=()=>{i(1,f++,f)};function T(m){oe[m?"unshift":"push"](()=>{a=m,i(2,a)})}return o.$$set=m=>{"items"in m&&i(0,d=m.items),"activeItem"in m&&i(4,r=m.activeItem)},o.$$.update=()=>{o.$$.dirty&115&&(c!==r&&(i(5,c=r),i(1,f=d.findIndex(([m,y])=>y===r))),k!==f&&(i(6,k=f),i(4,r=d[f][1])))},[d,f,a,w,r,c,k,$,b,T]}class Ht extends Y{constructor(e){super(),V(this,e,Lt,vt,G,{items:0,activeItem:4})}}const{window:Mt}=Be;function De(o,e,i){const d=o.slice();return d[10]=e[i][0],d[11]=e[i][1],d}function Wt(o){let e,i,d,r,f,c;function k(b){o[7](b)}let a={items:o[4]};o[1]!==void 0&&(a.activeItem=o[1]),e=new Ht({props:a}),oe.push(()=>Je(e,"activeItem",k));var w=o[1];function $(b){return{props:{}}}return w&&(f=ke(w,$()),o[8](f)),{c(){K(e.$$.fragment),d=p(),r=u("main"),f&&K(f.$$.fragment),J(r,"class","svelte-ck21ns")},m(b,T){U(e,b,T),l(b,d,T),l(b,r,T),f&&U(f,r,null),o[9](r),c=!0},p(b,T){const m={};!i&&T&2&&(i=!0,m.activeItem=b[1],Ge(()=>i=!1)),e.$set(m);const y={};if(T&2&&w!==(w=b[1])){if(f){be();const L=f;X(L.$$.fragment,1,0,()=>{z(L,1)}),ye()}w?(f=ke(w,$()),b[8](f),K(f.$$.fragment),S(f.$$.fragment,1),U(f,r,null)):f=null}else w&&f.$set(y)},i(b){c||(S(e.$$.fragment,b),f&&S(f.$$.fragment,b),c=!0)},o(b){X(e.$$.fragment,b),f&&X(f.$$.fragment,b),c=!1},d(b){z(e,b),b&&t(d),b&&t(r),o[8](null),f&&z(f),o[9](null)}}}function gt(o){let e,i,d=o[4],r=[];for(let c=0;c<d.length;c+=1)r[c]=Pe(De(o,d,c));const f=c=>X(r[c],1,1,()=>{r[c]=null});return{c(){for(let c=0;c<r.length;c+=1)r[c].c();e=Ce()},m(c,k){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(c,k);l(c,e,k),i=!0},p(c,k){if(k&16){d=c[4];let a;for(a=0;a<d.length;a+=1){const w=De(c,d,a);r[a]?(r[a].p(w,k),S(r[a],1)):(r[a]=Pe(w),r[a].c(),S(r[a],1),r[a].m(e.parentNode,e))}for(be(),a=d.length;a<r.length;a+=1)f(a);ye()}},i(c){if(!i){for(let k=0;k<d.length;k+=1)S(r[k]);i=!0}},o(c){r=r.filter(Boolean);for(let k=0;k<r.length;k+=1)X(r[k]);i=!1},d(c){Xe(r,c),c&&t(e)}}}function Pe(o){let e,i,d;var r=o[11];function f(c){return{}}return r&&(e=ke(r,f())),{c(){e&&K(e.$$.fragment),i=Ce()},m(c,k){e&&U(e,c,k),l(c,i,k),d=!0},p(c,k){if(r!==(r=c[11])){if(e){be();const a=e;X(a.$$.fragment,1,0,()=>{z(a,1)}),ye()}r?(e=ke(r,f()),K(e.$$.fragment),S(e.$$.fragment,1),U(e,i.parentNode,i)):e=null}},i(c){d||(e&&S(e.$$.fragment,c),d=!0)},o(c){e&&X(e.$$.fragment,c),d=!1},d(c){c&&t(i),e&&z(e,c)}}}function Ct(o){let e,i,d,r,f,c,k,a,w,$;e=new Tt({});const b=[gt,Wt],T=[];function m(y,L){return y[0]?0:1}return f=m(o),c=T[f]=b[f](o),{c(){K(e.$$.fragment),i=p(),d=u("hr"),r=p(),c.c(),k=Ce()},m(y,L){U(e,y,L),l(y,i,L),l(y,d,L),l(y,r,L),T[f].m(y,L),l(y,k,L),a=!0,w||($=Ne(Mt,"hashchange",o[5]),w=!0)},p(y,[L]){let W=f;f=m(y),f===W?T[f].p(y,L):(be(),X(T[W],1,1,()=>{T[W]=null}),ye(),c=T[f],c?c.p(y,L):(c=T[f]=b[f](y),c.c()),S(c,1),c.m(k.parentNode,k))},i(y){a||(S(e.$$.fragment,y),S(c),a=!0)},o(y){X(e.$$.fragment,y),X(c),a=!1},d(y){z(e,y),y&&t(i),y&&t(d),y&&t(r),T[f].d(y),y&&t(k),w=!1,$()}}}function Nt(o,e,i){let d=!1,r=[["Getting Started",He],["Wordlist Attack",dt],["Hybrid Attack",nt],["Bruteforce Attack",ft],["Combination Attack",at],["Rules",wt],["Remark",_t],["Office Cracking",bt],["Exercise",$t]],f=He;function c(){var m;i(0,d=location.hash=="#all"),i(1,f=((m=r[Number(location.hash.slice(1))])==null?void 0:m[1])||He)}c();let k,a,w=!0;function $(m){f=m,i(1,f)}function b(m){oe[m?"unshift":"push"](()=>{a=m,i(3,a)})}function T(m){oe[m?"unshift":"push"](()=>{k=m,i(2,k)})}return o.$$.update=()=>{o.$$.dirty&3&&!d&&(location.hash=String(r.findIndex(([m,y])=>y===f))),o.$$.dirty&77&&a&&k&&(k.querySelectorAll("blockquote").forEach(m=>{m.textContent.startsWith("$> ")&&(m.style.userSelect="none",m.style.setProperty("--leftLineColour","#21b0d7"))}),d||(w?i(6,w=!1):setTimeout(()=>window.scrollTo(0,k.offsetTop-50),0)))},[d,f,k,a,r,c,w,$,b,T]}class It extends Y{constructor(e){super(),V(this,e,Nt,Ct,G,{})}}new It({target:document.getElementById("app")});
