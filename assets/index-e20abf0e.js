(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const w of u)if(w.type==="childList")for(const b of w.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&a(b)}).observe(document,{childList:!0,subtree:!0});function f(u){const w={};return u.integrity&&(w.integrity=u.integrity),u.referrerPolicy&&(w.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?w.credentials="include":u.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function a(u){if(u.ep)return;u.ep=!0;const w=f(u);fetch(u.href,w)}})();function K(){}function Le(s){return s()}function ye(){return Object.create(null)}function ue(s){s.forEach(Le)}function Me(s){return typeof s=="function"}function V(s,o){return s!=s?o==o:s!==o||s&&typeof s=="object"||typeof s=="function"}function Ce(s){return Object.keys(s).length===0}function t(s,o,f){s.insertBefore(o,f||null)}function e(s){s.parentNode&&s.parentNode.removeChild(s)}function r(s){return document.createElement(s)}function ve(s){return document.createTextNode(s)}function n(){return ve(" ")}function oe(s,o,f){f==null?s.removeAttribute(o):s.getAttribute(o)!==f&&s.setAttribute(o,f)}function Ne(s){return Array.from(s.childNodes)}function _e(s,o,f){s.classList[f?"add":"remove"](o)}let ie;function de(s){ie=s}function ge(){if(!ie)throw new Error("Function called outside component initialization");return ie}function We(s){ge().$$.on_mount.push(s)}const te=[],ke=[];let le=[];const Te=[],qe=Promise.resolve();let xe=!1;function Ae(){xe||(xe=!0,qe.then(He))}function be(s){le.push(s)}const $e=new Set;let ee=0;function He(){if(ee!==0)return;const s=ie;do{try{for(;ee<te.length;){const o=te[ee];ee++,de(o),De(o.$$)}}catch(o){throw te.length=0,ee=0,o}for(de(null),te.length=0,ee=0;ke.length;)ke.pop()();for(let o=0;o<le.length;o+=1){const f=le[o];$e.has(f)||($e.add(f),f())}le.length=0}while(te.length);for(;Te.length;)Te.pop()();xe=!1,$e.clear(),de(s)}function De(s){if(s.fragment!==null){s.update(),ue(s.before_update);const o=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,o),s.after_update.forEach(be)}}function Pe(s){const o=[],f=[];le.forEach(a=>s.indexOf(a)===-1?o.push(a):f.push(a)),f.forEach(a=>a()),le=o}const ae=new Set;let Ee;function j(s,o){s&&s.i&&(ae.delete(s),s.i(o))}function U(s,o,f,a){if(s&&s.o){if(ae.has(s))return;ae.add(s),Ee.c.push(()=>{ae.delete(s),a&&(f&&s.d(1),a())}),s.o(o)}else a&&a()}function z(s){s&&s.c()}function X(s,o,f,a){const{fragment:u,after_update:w}=s.$$;u&&u.m(o,f),a||be(()=>{const b=s.$$.on_mount.map(Le).filter(Me);s.$$.on_destroy?s.$$.on_destroy.push(...b):ue(b),s.$$.on_mount=[]}),w.forEach(be)}function B(s,o){const f=s.$$;f.fragment!==null&&(Pe(f.after_update),ue(f.on_destroy),f.fragment&&f.fragment.d(o),f.on_destroy=f.fragment=null,f.ctx=[])}function Ie(s,o){s.$$.dirty[0]===-1&&(te.push(s),Ae(),s.$$.dirty.fill(0)),s.$$.dirty[o/31|0]|=1<<o%31}function Y(s,o,f,a,u,w,b,y=[-1]){const k=ie;de(s);const h=s.$$={fragment:null,ctx:[],props:w,update:K,not_equal:u,bound:ye(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(k?k.$$.context:[])),callbacks:ye(),dirty:y,skip_bound:!1,root:o.target||k.$$.root};b&&b(h.root);let _=!1;if(h.ctx=f?f(s,o.props||{},(x,W,...m)=>{const L=m.length?m[0]:W;return h.ctx&&u(h.ctx[x],h.ctx[x]=L)&&(!h.skip_bound&&h.bound[x]&&h.bound[x](L),_&&Ie(s,x)),W}):[],h.update(),_=!0,ue(h.before_update),h.fragment=a?a(h.ctx):!1,o.target){if(o.hydrate){const x=Ne(o.target);h.fragment&&h.fragment.l(x),x.forEach(e)}else h.fragment&&h.fragment.c();o.intro&&j(s.$$.fragment),X(s,o.target,o.anchor,o.customElement),He()}de(k)}class G{$destroy(){B(this,1),this.$destroy=K}$on(o,f){if(!Me(f))return K;const a=this.$$.callbacks[o]||(this.$$.callbacks[o]=[]);return a.push(f),()=>{const u=a.indexOf(f);u!==-1&&a.splice(u,1)}}$set(o){this.$$set&&!Ce(o)&&(this.$$.skip_bound=!0,this.$$set(o),this.$$.skip_bound=!1)}}function Oe(s){let o;return{c(){o=r("div"),oe(o,"class","svelte-1h5ldsd"),_e(o,"hover",!s[0])},m(f,a){t(f,o,a),s[5](o)},p(f,[a]){a&1&&_e(o,"hover",!f[0])},i:K,o:K,d(f){f&&e(o),s[5](null)}}}function Se(s){const o=s.getBoundingClientRect(),f=window.innerHeight||document.documentElement.clientHeight;return o.top*1.05<=f&&o.left>=0&&o.right<=(window.innerWidth||document.documentElement.clientWidth)}function Re(s,o,f){let{path:a}=o,{options:u={}}=o,{fixed:w=!1}=o,{loopDelay:b=2e3}=o,y={preload:!0,poster:"npt:10:10",autoPlay:!0},k;We(()=>{let _={...y,...u},x=!1;_.autoPlay&&(_.autoPlay=!1,x=!0);let W=window.AsciinemaPlayer.create("asciinema/recordings/"+a,k,_);setTimeout(()=>{if(b&&(console.debug("Attaching end-listener for "+a),W.addEventListener("ended",()=>{setTimeout(()=>W.getCurrentTime()==W.getDuration()&&W.play(),b)})),x){console.debug("Attaching scroll-listener for "+a);const m=function(){Se(k)&&x&&(console.debug("Scroll event triggered for "+a),document.removeEventListener("scroll",m),x=!1,W.play())};document.addEventListener("scroll",m,{passive:!0}),m()}},0)});function h(_){ke[_?"unshift":"push"](()=>{k=_,f(1,k)})}return s.$$set=_=>{"path"in _&&f(2,a=_.path),"options"in _&&f(3,u=_.options),"fixed"in _&&f(0,w=_.fixed),"loopDelay"in _&&f(4,b=_.loopDelay)},[w,k,a,u,b,h]}class Z extends G{constructor(o){super(),Y(this,o,Re,Oe,V,{path:2,options:3,fixed:0,loopDelay:4})}}function Fe(s){let o,f,a,u,w,b,y,k,h,_,x,W,m,L,H,E=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,v,D,N;return D=new Z({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){o=r("h2"),o.textContent="Getting Started",f=n(),a=r("p"),a.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',u=n(),w=r("p"),w.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,b=n(),y=r("h3"),y.textContent="Hashcat",k=n(),h=r("p"),h.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,_=n(),x=r("h3"),x.textContent="Kali Linux - Prepare the rockyou.txt wordlist",W=n(),m=r("p"),m.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",L=n(),H=r("pre"),v=n(),z(D.$$.fragment),oe(H,"class","language-sh")},m($,T){t($,o,T),t($,f,T),t($,a,T),t($,u,T),t($,w,T),t($,b,T),t($,y,T),t($,k,T),t($,h,T),t($,_,T),t($,x,T),t($,W,T),t($,m,T),t($,L,T),t($,H,T),H.innerHTML=E,t($,v,T),X(D,$,T),N=!0},p:K,i($){N||(j(D.$$.fragment,$),N=!0)},o($){U(D.$$.fragment,$),N=!1},d($){$&&e(o),$&&e(f),$&&e(a),$&&e(u),$&&e(w),$&&e(b),$&&e(y),$&&e(k),$&&e(h),$&&e(_),$&&e(x),$&&e(W),$&&e(m),$&&e(L),$&&e(H),$&&e(v),B(D,$)}}}class je extends G{constructor(o){super(),Y(this,o,null,Fe,V,{})}}function Xe(s){let o,f,a,u,w,b,y,k,h,_,x,W;return h=new Z({props:{path:"ntlm.cast"}}),{c(){o=r("h2"),o.textContent="Wordlist Attack",f=n(),a=r("p"),a.textContent="For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.",u=n(),w=r("blockquote"),w.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code></p>",b=n(),y=r("ul"),y.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li>`,k=n(),z(h.$$.fragment),_=n(),x=r("p"),x.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password1</code>"},m(m,L){t(m,o,L),t(m,f,L),t(m,a,L),t(m,u,L),t(m,w,L),t(m,b,L),t(m,y,L),t(m,k,L),X(h,m,L),t(m,_,L),t(m,x,L),W=!0},p:K,i(m){W||(j(h.$$.fragment,m),W=!0)},o(m){U(h.$$.fragment,m),W=!1},d(m){m&&e(o),m&&e(f),m&&e(a),m&&e(u),m&&e(w),m&&e(b),m&&e(y),m&&e(k),B(h,m),m&&e(_),m&&e(x)}}}class Be extends G{constructor(o){super(),Y(this,o,null,Xe,V,{})}}function Ue(s){let o,f,a,u,w,b,y,k,h,_=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q,d,l;return $=new Z({props:{path:"ntlm_password1111.cast"}}),{c(){o=r("h2"),o.textContent="Hybrid Attack",f=n(),a=r("h3"),a.textContent="Introduction",u=n(),w=r("p"),w.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',b=n(),y=r("p"),y.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',k=n(),h=r("pre"),x=n(),W=r("h3"),W.textContent="Hybrid Wordlist + Brute-force Attack",m=n(),L=r("p"),L.textContent="Run the following in Hashcat",H=n(),E=r("blockquote"),E.innerHTML="<p>$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code></p>",v=n(),D=r("ul"),D.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li> 
<li><code>?d?d?d?d</code> - The character mask to append</li>`,N=n(),z($.$$.fragment),T=n(),S=r("p"),S.innerHTML="We can now see the password is <code>password1111</code>",g=n(),R=r("h3"),R.textContent="Hybrid Mask + Wordlist Attack",P=n(),O=r("p"),O.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",I=n(),F=r("p"),F.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",q=n(),d=r("blockquote"),d.innerHTML="<p>$&gt; <code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",oe(h,"class","language-undefined")},m(i,C){t(i,o,C),t(i,f,C),t(i,a,C),t(i,u,C),t(i,w,C),t(i,b,C),t(i,y,C),t(i,k,C),t(i,h,C),h.innerHTML=_,t(i,x,C),t(i,W,C),t(i,m,C),t(i,L,C),t(i,H,C),t(i,E,C),t(i,v,C),t(i,D,C),t(i,N,C),X($,i,C),t(i,T,C),t(i,S,C),t(i,g,C),t(i,R,C),t(i,P,C),t(i,O,C),t(i,I,C),t(i,F,C),t(i,q,C),t(i,d,C),l=!0},p:K,i(i){l||(j($.$$.fragment,i),l=!0)},o(i){U($.$$.fragment,i),l=!1},d(i){i&&e(o),i&&e(f),i&&e(a),i&&e(u),i&&e(w),i&&e(b),i&&e(y),i&&e(k),i&&e(h),i&&e(x),i&&e(W),i&&e(m),i&&e(L),i&&e(H),i&&e(E),i&&e(v),i&&e(D),i&&e(N),B($,i),i&&e(T),i&&e(S),i&&e(g),i&&e(R),i&&e(P),i&&e(O),i&&e(I),i&&e(F),i&&e(q),i&&e(d)}}}class ze extends G{constructor(o){super(),Y(this,o,null,Ue,V,{})}}function Ke(s){let o,f,a,u,w,b,y,k,h,_,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q,d,l,i,C,J;return m=new Z({props:{path:"ntlm_bruteforce.cast"}}),l=new Z({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){o=r("h2"),o.textContent="Brute-force-best-force",f=n(),a=r("p"),a.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",u=n(),w=r("blockquote"),w.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",b=n(),y=r("p"),y.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',k=n(),h=r("blockquote"),h.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",_=n(),x=r("ul"),x.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,W=n(),z(m.$$.fragment),L=n(),H=r("p"),H.innerHTML="We can now see the password is <code>pass</code>",E=n(),v=r("h3"),v.textContent="Brute-force with unknown length",D=n(),N=r("p"),N.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",$=n(),T=r("p"),T.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",S=n(),g=r("blockquote"),g.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",R=n(),P=r("ul"),P.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",O=n(),I=r("p"),I.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",F=n(),q=r("blockquote"),q.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",d=n(),z(l.$$.fragment),i=n(),C=r("p"),C.innerHTML="We can now see the password is <code>p@s</code>"},m(p,A){t(p,o,A),t(p,f,A),t(p,a,A),t(p,u,A),t(p,w,A),t(p,b,A),t(p,y,A),t(p,k,A),t(p,h,A),t(p,_,A),t(p,x,A),t(p,W,A),X(m,p,A),t(p,L,A),t(p,H,A),t(p,E,A),t(p,v,A),t(p,D,A),t(p,N,A),t(p,$,A),t(p,T,A),t(p,S,A),t(p,g,A),t(p,R,A),t(p,P,A),t(p,O,A),t(p,I,A),t(p,F,A),t(p,q,A),t(p,d,A),X(l,p,A),t(p,i,A),t(p,C,A),J=!0},p:K,i(p){J||(j(m.$$.fragment,p),j(l.$$.fragment,p),J=!0)},o(p){U(m.$$.fragment,p),U(l.$$.fragment,p),J=!1},d(p){p&&e(o),p&&e(f),p&&e(a),p&&e(u),p&&e(w),p&&e(b),p&&e(y),p&&e(k),p&&e(h),p&&e(_),p&&e(x),p&&e(W),B(m,p),p&&e(L),p&&e(H),p&&e(E),p&&e(v),p&&e(D),p&&e(N),p&&e($),p&&e(T),p&&e(S),p&&e(g),p&&e(R),p&&e(P),p&&e(O),p&&e(I),p&&e(F),p&&e(q),p&&e(d),B(l,p),p&&e(i),p&&e(C)}}}class Ze extends G{constructor(o){super(),Y(this,o,null,Ke,V,{})}}function Ve(s){let o,f,a,u,w,b,y,k,h,_,x,W=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q;return E=new Z({props:{path:"crunch.cast",options:{rows:15}}}),O=new Z({props:{path:"ntlm_rockyou2801.cast"}}),{c(){o=r("h2"),o.textContent="Combination Attacks",f=n(),a=r("p"),a.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",u=n(),w=r("p"),w.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",b=n(),y=r("p"),y.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",k=n(),h=r("p"),h.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",_=n(),x=r("pre"),m=n(),L=r("blockquote"),L.innerHTML="<p>$&gt; <code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",H=n(),z(E.$$.fragment),v=n(),D=r("p"),D.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",N=n(),$=r("p"),$.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",T=n(),S=r("blockquote"),S.innerHTML="<p>$&gt; <code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",g=n(),R=r("ul"),R.innerHTML=`<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,P=n(),z(O.$$.fragment),I=n(),F=r("p"),F.innerHTML="We can now see the password is <code>rockyou2801</code>",oe(x,"class","language-undefined")},m(d,l){t(d,o,l),t(d,f,l),t(d,a,l),t(d,u,l),t(d,w,l),t(d,b,l),t(d,y,l),t(d,k,l),t(d,h,l),t(d,_,l),t(d,x,l),x.innerHTML=W,t(d,m,l),t(d,L,l),t(d,H,l),X(E,d,l),t(d,v,l),t(d,D,l),t(d,N,l),t(d,$,l),t(d,T,l),t(d,S,l),t(d,g,l),t(d,R,l),t(d,P,l),X(O,d,l),t(d,I,l),t(d,F,l),q=!0},p:K,i(d){q||(j(E.$$.fragment,d),j(O.$$.fragment,d),q=!0)},o(d){U(E.$$.fragment,d),U(O.$$.fragment,d),q=!1},d(d){d&&e(o),d&&e(f),d&&e(a),d&&e(u),d&&e(w),d&&e(b),d&&e(y),d&&e(k),d&&e(h),d&&e(_),d&&e(x),d&&e(m),d&&e(L),d&&e(H),B(E,d),d&&e(v),d&&e(D),d&&e(N),d&&e($),d&&e(T),d&&e(S),d&&e(g),d&&e(R),d&&e(P),B(O,d),d&&e(I),d&&e(F)}}}class Ye extends G{constructor(o){super(),Y(this,o,null,Ve,V,{})}}function Ge(s){let o,f,a;return{c(){o=r("table"),o.innerHTML=`<thead><tr><th align="left">Name</th> 
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
<td align="left"></td></tr></tbody>`,f=n(),a=r("p"),a.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(u,w){t(u,o,w),t(u,f,w),t(u,a,w)},p:K,i:K,o:K,d(u){u&&e(o),u&&e(f),u&&e(a)}}}class Je extends G{constructor(o){super(),Y(this,o,null,Ge,V,{})}}function Qe(s){let o,f,a,u,w,b,y,k,h,_,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q,d,l,i,C,J,p,A,se,pe,ne,me,re,we,Q,he,fe,ce;return y=new Je({}),H=new Z({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),g=new Z({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),Q=new Z({props:{path:"simplerule_crack.cast"}}),{c(){o=r("h2"),o.textContent="Rules",f=n(),a=r("p"),a.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",u=n(),w=r("p"),w.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',b=n(),z(y.$$.fragment),k=n(),h=r("hr"),_=n(),x=r("p"),x.innerHTML="We will use a sample wordlist <code>password.txt</code> which is text file containing the password <code>password</code>.",W=n(),m=r("p"),m.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",L=n(),z(H.$$.fragment),E=n(),v=r("p"),v.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",D=n(),N=r("blockquote"),N.innerHTML="<p>$&gt; <code>hashcat password.txt -r simplerule.rule --stdout</code></p>",$=n(),T=r("ul"),T.innerHTML=`<li><code>password.txt</code> - Wordlist</li> 
<li><code>-r simplerule.rule</code> - Use rule list</li> 
<li><code>--stdout</code> - Show password candidates instead of cracking</li>`,S=n(),z(g.$$.fragment),R=n(),P=r("p"),P.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",O=n(),I=r("hr"),F=n(),q=r("p"),q.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",d=n(),l=r("ul"),l.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,i=n(),C=r("blockquote"),C.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",J=n(),p=r("hr"),A=n(),se=r("p"),se.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",pe=n(),ne=r("blockquote"),ne.innerHTML="<p>$&gt; <code>hashcat -m 1000 simplerule_password.txt /usr/share/wordlists/rockyou.txt -r labrule.rule</code></p>",me=n(),re=r("ul"),re.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>simplerule_password.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - Wordlist</li> 
<li><code>-r labrule.rule</code> - Use rule list</li>`,we=n(),z(Q.$$.fragment),he=n(),fe=r("p"),fe.innerHTML="We can now see the password is <code>Friend$!</code>"},m(c,M){t(c,o,M),t(c,f,M),t(c,a,M),t(c,u,M),t(c,w,M),t(c,b,M),X(y,c,M),t(c,k,M),t(c,h,M),t(c,_,M),t(c,x,M),t(c,W,M),t(c,m,M),t(c,L,M),X(H,c,M),t(c,E,M),t(c,v,M),t(c,D,M),t(c,N,M),t(c,$,M),t(c,T,M),t(c,S,M),X(g,c,M),t(c,R,M),t(c,P,M),t(c,O,M),t(c,I,M),t(c,F,M),t(c,q,M),t(c,d,M),t(c,l,M),t(c,i,M),t(c,C,M),t(c,J,M),t(c,p,M),t(c,A,M),t(c,se,M),t(c,pe,M),t(c,ne,M),t(c,me,M),t(c,re,M),t(c,we,M),X(Q,c,M),t(c,he,M),t(c,fe,M),ce=!0},p:K,i(c){ce||(j(y.$$.fragment,c),j(H.$$.fragment,c),j(g.$$.fragment,c),j(Q.$$.fragment,c),ce=!0)},o(c){U(y.$$.fragment,c),U(H.$$.fragment,c),U(g.$$.fragment,c),U(Q.$$.fragment,c),ce=!1},d(c){c&&e(o),c&&e(f),c&&e(a),c&&e(u),c&&e(w),c&&e(b),B(y,c),c&&e(k),c&&e(h),c&&e(_),c&&e(x),c&&e(W),c&&e(m),c&&e(L),B(H,c),c&&e(E),c&&e(v),c&&e(D),c&&e(N),c&&e($),c&&e(T),c&&e(S),B(g,c),c&&e(R),c&&e(P),c&&e(O),c&&e(I),c&&e(F),c&&e(q),c&&e(d),c&&e(l),c&&e(i),c&&e(C),c&&e(J),c&&e(p),c&&e(A),c&&e(se),c&&e(pe),c&&e(ne),c&&e(me),c&&e(re),c&&e(we),B(Q,c),c&&e(he),c&&e(fe)}}}class et extends G{constructor(o){super(),Y(this,o,null,Qe,V,{})}}function tt(s){let o,f,a,u,w,b,y;return{c(){o=r("hr"),f=n(),a=r("blockquote"),a.innerHTML="<h4>🔥 This completes the main section on password cracking 🔥</h4>",u=n(),w=r("p"),w.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",b=n(),y=r("p"),y.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(k,h){t(k,o,h),t(k,f,h),t(k,a,h),t(k,u,h),t(k,w,h),t(k,b,h),t(k,y,h)},p:K,i:K,o:K,d(k){k&&e(o),k&&e(f),k&&e(a),k&&e(u),k&&e(w),k&&e(b),k&&e(y)}}}class lt extends G{constructor(o){super(),Y(this,o,null,tt,V,{})}}function ot(s){let o,f,a,u,w,b,y,k,h,_,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q,d;return x=new Z({props:{path:"office2john_demo.cast"}}),g=new Z({props:{path:"office2john_prepare.cast"}}),q=new Z({props:{path:"office2john_crack.cast"}}),{c(){o=r("h2"),o.textContent="Cracking other hashes",f=n(),a=r("p"),a.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",u=n(),w=r("p"),w.textContent="We will now learn how to extract a password from a password-protected Word document file.",b=n(),y=r("p"),y.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",k=n(),h=r("blockquote"),h.innerHTML="<p>$&gt; <code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",_=n(),z(x.$$.fragment),W=n(),m=r("p"),m.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",L=n(),H=r("p"),H.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',E=n(),v=r("table"),v.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
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
<td align="left">…</td></tr></tbody>`,D=n(),N=r("hr"),$=n(),T=r("p"),T.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,S=n(),z(g.$$.fragment),R=n(),P=r("p"),P.textContent="Now we can crack the hash",O=n(),I=r("blockquote"),I.innerHTML="<p>$&gt; <code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",F=n(),z(q.$$.fragment)},m(l,i){t(l,o,i),t(l,f,i),t(l,a,i),t(l,u,i),t(l,w,i),t(l,b,i),t(l,y,i),t(l,k,i),t(l,h,i),t(l,_,i),X(x,l,i),t(l,W,i),t(l,m,i),t(l,L,i),t(l,H,i),t(l,E,i),t(l,v,i),t(l,D,i),t(l,N,i),t(l,$,i),t(l,T,i),t(l,S,i),X(g,l,i),t(l,R,i),t(l,P,i),t(l,O,i),t(l,I,i),t(l,F,i),X(q,l,i),d=!0},p:K,i(l){d||(j(x.$$.fragment,l),j(g.$$.fragment,l),j(q.$$.fragment,l),d=!0)},o(l){U(x.$$.fragment,l),U(g.$$.fragment,l),U(q.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(f),l&&e(a),l&&e(u),l&&e(w),l&&e(b),l&&e(y),l&&e(k),l&&e(h),l&&e(_),B(x,l),l&&e(W),l&&e(m),l&&e(L),l&&e(H),l&&e(E),l&&e(v),l&&e(D),l&&e(N),l&&e($),l&&e(T),l&&e(S),B(g,l),l&&e(R),l&&e(P),l&&e(O),l&&e(I),l&&e(F),B(q,l)}}}class dt extends G{constructor(o){super(),Y(this,o,null,ot,V,{})}}function it(s){let o,f,a,u,w,b,y,k,h,_,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q;return{c(){o=r("h2"),o.textContent="Exercises",f=n(),a=r("h3"),a.textContent="Exercise 1",u=n(),w=r("p"),w.textContent="Write a rule list that will",b=n(),y=r("ul"),y.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,k=n(),h=r("p"),h.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",_=n(),x=r("h3"),x.textContent="Exercise 2",W=n(),m=r("blockquote"),m.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",L=n(),H=r("p"),H.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",E=n(),v=r("h3"),v.textContent="Exercise 3",D=n(),N=r("blockquote"),N.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",$=n(),T=r("p"),T.textContent="Hint: Have you been watching your lectures?",S=n(),g=r("h3"),g.textContent="Exercise 4 (Optional)",R=n(),P=r("blockquote"),P.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",O=n(),I=r("p"),I.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',F=n(),q=r("p"),q.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(d,l){t(d,o,l),t(d,f,l),t(d,a,l),t(d,u,l),t(d,w,l),t(d,b,l),t(d,y,l),t(d,k,l),t(d,h,l),t(d,_,l),t(d,x,l),t(d,W,l),t(d,m,l),t(d,L,l),t(d,H,l),t(d,E,l),t(d,v,l),t(d,D,l),t(d,N,l),t(d,$,l),t(d,T,l),t(d,S,l),t(d,g,l),t(d,R,l),t(d,P,l),t(d,O,l),t(d,I,l),t(d,F,l),t(d,q,l)},p:K,i:K,o:K,d(d){d&&e(o),d&&e(f),d&&e(a),d&&e(u),d&&e(w),d&&e(b),d&&e(y),d&&e(k),d&&e(h),d&&e(_),d&&e(x),d&&e(W),d&&e(m),d&&e(L),d&&e(H),d&&e(E),d&&e(v),d&&e(D),d&&e(N),d&&e($),d&&e(T),d&&e(S),d&&e(g),d&&e(R),d&&e(P),d&&e(O),d&&e(I),d&&e(F),d&&e(q)}}}class st extends G{constructor(o){super(),Y(this,o,null,it,V,{})}}function nt(s){let o,f,a,u=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,w,b,y='<code class="language-undefined">Special thanks to Wesley Lacy for creating the activity resources</code>',k,h,_,x,W,m,L,H,E,v,D,N,$,T,S,g,R,P,O,I,F,q,d;return m=new je({}),H=new Be({}),v=new ze({}),N=new Ze({}),T=new Ye({}),g=new et({}),P=new lt({}),I=new dt({}),q=new st({}),{c(){o=r("h1"),o.textContent="COMP6845 | Password Cracking",f=n(),a=r("pre"),w=n(),b=r("pre"),k=n(),h=r("p"),h.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",_=n(),x=r("hr"),W=n(),z(m.$$.fragment),L=n(),z(H.$$.fragment),E=n(),z(v.$$.fragment),D=n(),z(N.$$.fragment),$=n(),z(T.$$.fragment),S=n(),z(g.$$.fragment),R=n(),z(P.$$.fragment),O=n(),z(I.$$.fragment),F=n(),z(q.$$.fragment),oe(a,"class","language-undefined"),oe(b,"class","language-undefined")},m(l,i){t(l,o,i),t(l,f,i),t(l,a,i),a.innerHTML=u,t(l,w,i),t(l,b,i),b.innerHTML=y,t(l,k,i),t(l,h,i),t(l,_,i),t(l,x,i),t(l,W,i),X(m,l,i),t(l,L,i),X(H,l,i),t(l,E,i),X(v,l,i),t(l,D,i),X(N,l,i),t(l,$,i),X(T,l,i),t(l,S,i),X(g,l,i),t(l,R,i),X(P,l,i),t(l,O,i),X(I,l,i),t(l,F,i),X(q,l,i),d=!0},p:K,i(l){d||(j(m.$$.fragment,l),j(H.$$.fragment,l),j(v.$$.fragment,l),j(N.$$.fragment,l),j(T.$$.fragment,l),j(g.$$.fragment,l),j(P.$$.fragment,l),j(I.$$.fragment,l),j(q.$$.fragment,l),d=!0)},o(l){U(m.$$.fragment,l),U(H.$$.fragment,l),U(v.$$.fragment,l),U(N.$$.fragment,l),U(T.$$.fragment,l),U(g.$$.fragment,l),U(P.$$.fragment,l),U(I.$$.fragment,l),U(q.$$.fragment,l),d=!1},d(l){l&&e(o),l&&e(f),l&&e(a),l&&e(w),l&&e(b),l&&e(k),l&&e(h),l&&e(_),l&&e(x),l&&e(W),B(m,l),l&&e(L),B(H,l),l&&e(E),B(v,l),l&&e(D),B(N,l),l&&e($),B(T,l),l&&e(S),B(g,l),l&&e(R),B(P,l),l&&e(O),B(I,l),l&&e(F),B(q,l)}}}function rt(s){return We(()=>{document.querySelectorAll("blockquote").forEach(o=>{o.textContent.startsWith("$> ")&&o.style.setProperty("--leftLineColour","#21b0d7")})}),[]}class ft extends G{constructor(o){super(),Y(this,o,rt,nt,V,{})}}function ct(s){let o,f,a;return f=new ft({}),{c(){o=r("main"),z(f.$$.fragment)},m(u,w){t(u,o,w),X(f,o,null),a=!0},p:K,i(u){a||(j(f.$$.fragment,u),a=!0)},o(u){U(f.$$.fragment,u),a=!1},d(u){u&&e(o),B(f)}}}class at extends G{constructor(o){super(),Y(this,o,null,ct,V,{})}}new at({target:document.getElementById("app")});
