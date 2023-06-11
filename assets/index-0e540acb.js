(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const a of u)if(a.type==="childList")for(const k of a.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&n(k)}).observe(document,{childList:!0,subtree:!0});function s(u){const a={};return u.integrity&&(a.integrity=u.integrity),u.referrerPolicy&&(a.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?a.credentials="include":u.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(u){if(u.ep)return;u.ep=!0;const a=s(u);fetch(u.href,a)}})();function O(){}function Ae(o){return o()}function ge(){return Object.create(null)}function ce(o){o.forEach(Ae)}function qe(o){return typeof o=="function"}function G(o,l){return o!=o?l==l:o!==l||o&&typeof o=="object"||typeof o=="function"}function Pe(o){return Object.keys(o).length===0}const Re=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Z(o,l){o.appendChild(l)}function t(o,l,s){o.insertBefore(l,s||null)}function e(o){o.parentNode&&o.parentNode.removeChild(o)}function r(o){return document.createElement(o)}function te(o){return document.createTextNode(o)}function f(){return te(" ")}function Me(o,l,s,n){return o.addEventListener(l,s,n),()=>o.removeEventListener(l,s,n)}function J(o,l,s){s==null?o.removeAttribute(l):o.getAttribute(l)!==s&&o.setAttribute(l,s)}function Oe(o){return Array.from(o.childNodes)}function We(o,l){l=""+l,o.data!==l&&(o.data=l)}function ke(o,l,s){o.classList[s?"add":"remove"](l)}function Ce(o,l){return new o(l)}let fe;function re(o){fe=o}function Se(){if(!fe)throw new Error("Function called outside component initialization");return fe}function Ee(o){Se().$$.on_mount.push(o)}const se=[],oe=[];let ne=[];const ve=[],Fe=Promise.resolve();let Le=!1;function je(){Le||(Le=!0,Fe.then(De))}function He(o){ne.push(o)}function Be(o){ve.push(o)}const $e=new Set;let de=0;function De(){if(de!==0)return;const o=fe;do{try{for(;de<se.length;){const l=se[de];de++,re(l),Xe(l.$$)}}catch(l){throw se.length=0,de=0,l}for(re(null),se.length=0,de=0;oe.length;)oe.pop()();for(let l=0;l<ne.length;l+=1){const s=ne[l];$e.has(s)||($e.add(s),s())}ne.length=0}while(se.length);for(;ve.length;)ve.pop()();Le=!1,$e.clear(),re(o)}function Xe(o){if(o.fragment!==null){o.update(),ce(o.before_update);const l=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,l),o.after_update.forEach(He)}}function Ue(o){const l=[],s=[];ne.forEach(n=>o.indexOf(n)===-1?l.push(n):s.push(n)),s.forEach(n=>n()),ne=l}const he=new Set;let le;function ze(){le={r:0,c:[],p:le}}function Ke(){le.r||ce(le.c),le=le.p}function B(o,l){o&&o.i&&(he.delete(o),o.i(l))}function z(o,l,s,n){if(o&&o.o){if(he.has(o))return;he.add(o),le.c.push(()=>{he.delete(o),n&&(s&&o.d(1),n())}),o.o(l)}else n&&n()}function Ze(o,l,s){const n=o.$$.props[l];n!==void 0&&(o.$$.bound[n]=s,s(o.$$.ctx[n]))}function K(o){o&&o.c()}function X(o,l,s,n){const{fragment:u,after_update:a}=o.$$;u&&u.m(l,s),n||He(()=>{const k=o.$$.on_mount.map(Ae).filter(qe);o.$$.on_destroy?o.$$.on_destroy.push(...k):ce(k),o.$$.on_mount=[]}),a.forEach(He)}function U(o,l){const s=o.$$;s.fragment!==null&&(Ue(s.after_update),ce(s.on_destroy),s.fragment&&s.fragment.d(l),s.on_destroy=s.fragment=null,s.ctx=[])}function Ge(o,l){o.$$.dirty[0]===-1&&(se.push(o),je(),o.$$.dirty.fill(0)),o.$$.dirty[l/31|0]|=1<<l%31}function V(o,l,s,n,u,a,k,y=[-1]){const h=fe;re(o);const c=o.$$={fragment:null,ctx:[],props:a,update:O,not_equal:u,bound:ge(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(h?h.$$.context:[])),callbacks:ge(),dirty:y,skip_bound:!1,root:l.target||h.$$.root};k&&k(c.root);let b=!1;if(c.ctx=s?s(o,l.props||{},(x,T,...w)=>{const v=w.length?w[0]:T;return c.ctx&&u(c.ctx[x],c.ctx[x]=v)&&(!c.skip_bound&&c.bound[x]&&c.bound[x](v),b&&Ge(o,x)),T}):[],c.update(),b=!0,ce(c.before_update),c.fragment=n?n(c.ctx):!1,l.target){if(l.hydrate){const x=Oe(l.target);c.fragment&&c.fragment.l(x),x.forEach(e)}else c.fragment&&c.fragment.c();l.intro&&B(o.$$.fragment),X(o,l.target,l.anchor,l.customElement),De()}re(h)}class Y{$destroy(){U(this,1),this.$destroy=O}$on(l,s){if(!qe(s))return O;const n=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return n.push(s),()=>{const u=n.indexOf(s);u!==-1&&n.splice(u,1)}}$set(l){this.$$set&&!Pe(l)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}function Ve(o){let l;return{c(){l=r("div"),J(l,"class","svelte-1h5ldsd"),ke(l,"hover",!o[0])},m(s,n){t(s,l,n),o[5](l)},p(s,[n]){n&1&&ke(l,"hover",!s[0])},i:O,o:O,d(s){s&&e(l),o[5](null)}}}function Ye(o){const l=o.getBoundingClientRect(),s=window.innerHeight||document.documentElement.clientHeight;return l.top*1.05<=s&&l.left>=0&&l.right<=(window.innerWidth||document.documentElement.clientWidth)}function Je(o,l,s){let{path:n}=l,{options:u={}}=l,{fixed:a=!1}=l,{loopDelay:k=2e3}=l,y={preload:!0,poster:"npt:10:10",autoPlay:!0},h;Ee(()=>{let b={...y,...u},x=!1;b.autoPlay&&(b.autoPlay=!1,x=!0);let T=window.AsciinemaPlayer.create("asciinema/recordings/"+n,h,b);const w=function(){h&&Ye(h)&&x&&(console.debug("Scroll event triggered for "+n),document.removeEventListener("scroll",w),x=!1,T.play())};setTimeout(()=>(k&&(console.debug("Attaching end-listener for "+n),T.addEventListener("ended",()=>{setTimeout(()=>T.getCurrentTime()==T.getDuration()&&T.play(),k)})),x&&(console.debug("Attaching scroll-listener for "+n),document.addEventListener("scroll",w,{passive:!0}),w()),()=>{document.removeEventListener("scroll",w),T.dispose()}),0)});function c(b){oe[b?"unshift":"push"](()=>{h=b,s(1,h)})}return o.$$set=b=>{"path"in b&&s(2,n=b.path),"options"in b&&s(3,u=b.options),"fixed"in b&&s(0,a=b.fixed),"loopDelay"in b&&s(4,k=b.loopDelay)},[a,h,n,u,k,c]}class Q extends Y{constructor(l){super(),V(this,l,Je,Ve,G,{path:2,options:3,fixed:0,loopDelay:4})}}function Qe(o){let l,s,n,u,a,k,y,h,c,b,x,T,w,v,H,C=`<code class="language-sh"><span class="token builtin class-name">cd</span> /usr/share/wordlists
<span class="token function">ls</span> <span class="token comment"># Note that there is a rockyou.txt.gz file</span>
<span class="token function">sudo</span> gunzip rockyou.txt.gz
<span class="token function">ls</span> <span class="token comment"># You should now see a rockyou.txt</span></code>`,L,g,A;return g=new Q({props:{path:"start.cast",options:{rows:10},fixed:!0}}),{c(){l=r("h2"),l.textContent="Getting Started",s=f(),n=r("p"),n.innerHTML='The resources required for this activity is <a href="https://github.com/featherbear/UNSW-COMP6845-password-cracking/archive/refs/heads/files.zip" rel="nofollow">available for download here</a>',u=f(),a=r("p"),a.innerHTML=`This activity assumes you are running Kali Linux, which already contains the required tools and wordlists to complete the activities.<br/>
If you are not using Kali Linux, ensure you have <a href="https://github.com/hashcat/hashcat" rel="nofollow">Hashcat</a> and <a href="https://sourceforge.net/projects/crunch-wordlist/" rel="nofollow">Crunch</a> installed, as well as a copy of the <a href="https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt" rel="nofollow"><code>rockyou.txt</code></a> wordlist.`,k=f(),y=r("h3"),y.textContent="Hashcat",h=f(),c=r("p"),c.innerHTML=`One of the first things we will do is to run <code>hashcat --help</code> to review the help page as required.<br/>
We will be working our way through the different attack modes of Hashcat.`,b=f(),x=r("h3"),x.textContent="Kali Linux - Prepare the rockyou.txt wordlist",T=f(),w=r("p"),w.innerHTML="An archived copy of <code>rockyou.txt</code> is available on Kali Linux, we must first extract it.",v=f(),H=r("pre"),L=f(),K(g.$$.fragment),J(H,"class","language-sh")},m($,M){t($,l,M),t($,s,M),t($,n,M),t($,u,M),t($,a,M),t($,k,M),t($,y,M),t($,h,M),t($,c,M),t($,b,M),t($,x,M),t($,T,M),t($,w,M),t($,v,M),t($,H,M),H.innerHTML=C,t($,L,M),X(g,$,M),A=!0},p:O,i($){A||(B(g.$$.fragment,$),A=!0)},o($){z(g.$$.fragment,$),A=!1},d($){$&&e(l),$&&e(s),$&&e(n),$&&e(u),$&&e(a),$&&e(k),$&&e(y),$&&e(h),$&&e(c),$&&e(b),$&&e(x),$&&e(T),$&&e(w),$&&e(v),$&&e(H),$&&e(L),U(g,$)}}}class Te extends Y{constructor(l){super(),V(this,l,null,Qe,G,{})}}function et(o){let l,s,n,u,a,k,y,h,c,b,x,T;return c=new Q({props:{path:"ntlm.cast"}}),{c(){l=r("h2"),l.textContent="Wordlist Attack",s=f(),n=r("p"),n.textContent="For this first exercise we will use a wordlist attack to crack an NTLM hash using Hashcat.",u=f(),a=r("blockquote"),a.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm.txt /usr/share/wordlists/rockyou.txt</code></p>",k=f(),y=r("ul"),y.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li>`,h=f(),K(c.$$.fragment),b=f(),x=r("p"),x.innerHTML="Once complete we can see that for the hash in <code>ntlm.txt</code>, the password is <code>password1</code>"},m(w,v){t(w,l,v),t(w,s,v),t(w,n,v),t(w,u,v),t(w,a,v),t(w,k,v),t(w,y,v),t(w,h,v),X(c,w,v),t(w,b,v),t(w,x,v),T=!0},p:O,i(w){T||(B(c.$$.fragment,w),T=!0)},o(w){z(c.$$.fragment,w),T=!1},d(w){w&&e(l),w&&e(s),w&&e(n),w&&e(u),w&&e(a),w&&e(k),w&&e(y),w&&e(h),U(c,w),w&&e(b),w&&e(x)}}}class tt extends Y{constructor(l){super(),V(this,l,null,et,G,{})}}function lt(o){let l,s,n,u,a,k,y,h,c,b=`<code class="language-undefined">?l = abcdefghijklmnopqrstuvwxyz
?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ
?d = 0123456789
?h = 0123456789abcdef
?H = 0123456789ABCDEF
?s = «space»!&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[]^_&#96;&#123;|&#125;~
?a = ?l?u?d?s
?b = 0x00 - 0xff
</code>`,x,T,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E,d,i;return $=new Q({props:{path:"ntlm_password1111.cast"}}),{c(){l=r("h2"),l.textContent="Hybrid Attack",s=f(),n=r("h3"),n.textContent="Introduction",u=f(),a=r("p"),a.innerHTML='Now let’s use a <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">hybrid attack</a> where we will use the <code>rockyou.txt</code> wordlist alongside a <em>mask</em> to append 4 digits after each password.',k=f(),y=r("p"),y.innerHTML='If we look at <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">Hashcat documentation</a> you will see we use <code>?d</code> to add a number to the end of each word.',h=f(),c=r("pre"),x=f(),T=r("h3"),T.textContent="Hybrid Wordlist + Brute-force Attack",w=f(),v=r("p"),v.textContent="Run the following in Hashcat",H=f(),C=r("blockquote"),C.innerHTML="<p>$&gt; <code>hashcat -a 6 -m 1000 ntlm_password1111.txt /usr/share/wordlists/rockyou.txt ?d?d?d?d</code></p>",L=f(),g=r("ul"),g.innerHTML=`<li><code>-a 6</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 6 (hybrid attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_password1111.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The wordlist to use</li> 
<li><code>?d?d?d?d</code> - The character mask to append</li>`,A=f(),K($.$$.fragment),M=f(),S=r("p"),S.innerHTML="We can now see the password is <code>password1111</code>",q=f(),F=r("h3"),F.textContent="Hybrid Mask + Wordlist Attack",D=f(),P=r("p"),P.innerHTML="Let’s say we want to crack for a password like <code>1111password</code>. We can instead use attack mode <code>7</code> - a hybrid mask + wordlist attack.",R=f(),j=r("p"),j.innerHTML="e.g. for an NTLM password (<code>-m 1000</code>), we will perform a hybrid mask + wordlist attack (<code>-a 7</code>) with a mask of <code>?d?d?d?d</code> and the <code>rockyou.txt</code> dictionary",E=f(),d=r("blockquote"),d.innerHTML="<p>$&gt; <code>hashcat -a 7 -m 1000 &lt;your_NTLM_hash_file&gt; ?d?d?d?d /usr/share/wordlists/rockyou.txt</code></p>",J(c,"class","language-undefined")},m(p,N){t(p,l,N),t(p,s,N),t(p,n,N),t(p,u,N),t(p,a,N),t(p,k,N),t(p,y,N),t(p,h,N),t(p,c,N),c.innerHTML=b,t(p,x,N),t(p,T,N),t(p,w,N),t(p,v,N),t(p,H,N),t(p,C,N),t(p,L,N),t(p,g,N),t(p,A,N),X($,p,N),t(p,M,N),t(p,S,N),t(p,q,N),t(p,F,N),t(p,D,N),t(p,P,N),t(p,R,N),t(p,j,N),t(p,E,N),t(p,d,N),i=!0},p:O,i(p){i||(B($.$$.fragment,p),i=!0)},o(p){z($.$$.fragment,p),i=!1},d(p){p&&e(l),p&&e(s),p&&e(n),p&&e(u),p&&e(a),p&&e(k),p&&e(y),p&&e(h),p&&e(c),p&&e(x),p&&e(T),p&&e(w),p&&e(v),p&&e(H),p&&e(C),p&&e(L),p&&e(g),p&&e(A),U($,p),p&&e(M),p&&e(S),p&&e(q),p&&e(F),p&&e(D),p&&e(P),p&&e(R),p&&e(j),p&&e(E),p&&e(d)}}}class ot extends Y{constructor(l){super(),V(this,l,null,lt,G,{})}}function it(o){let l,s,n,u,a,k,y,h,c,b,x,T,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E,d,i,p,N,ee;return w=new Q({props:{path:"ntlm_bruteforce.cast"}}),i=new Q({props:{path:"ntlm_bruteforce_2.cast"}}),{c(){l=r("h2"),l.textContent="Brute-force-best-force",s=f(),n=r("p"),n.textContent="What if the previous methods didn’t successfully crack the password? We can brute-force the password, but this is generally a last resort given the time it takes (we are trying every possible combination).",u=f(),a=r("blockquote"),a.innerHTML="<p>For this example, we will assume the password is 4 characters long and contains only ASCII characters.</p>",k=f(),y=r("p"),y.innerHTML='We tell Hashcat a password mask to follow when generating inputs. Providing <code>?a</code> (refer to the <a href="https://hashcat.net/wiki/doku.php?id=mask_attack" rel="nofollow">character sets</a>), we provide a combination of lowercase, uppercase, number and special characters from the ASCII character set. <code>?a?a</code> would be a 2-character ASCII password, <code>?a?a?a?a</code> would be a 4-character ASCII password and so on.',h=f(),c=r("blockquote"),c.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce.txt -a 3 ?a?a?a?a</code></p>",b=f(),x=r("ul"),x.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_bruteforce.txt</code> - The hash file to crack</li> 
<li><code>-a 3</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 3 (brute-force attack)</li> 
<li><code>?a?a?a?a</code> - Password mask</li>`,T=f(),K(w.$$.fragment),v=f(),H=r("p"),H.innerHTML="We can now see the password is <code>pass</code>",C=f(),L=r("h3"),L.textContent="Brute-force with unknown length",g=f(),A=r("p"),A.textContent="In the previous example (where the password was 4 characters long), if a mask of 8 characters was provided, then Hashcrack wouldn’t (read: will never) successfully crack the password, as the mask provides an explicit length.",$=f(),M=r("p"),M.innerHTML="Now in the scenario where you don’t know the exact length but know that it is at most 5 characters long. To get around this we add the <code>--increment</code> flag which tells Hashcat to start at one character, then keep adding more until we’ve reached our final mask.",S=f(),q=r("blockquote"),q.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment</code></p>",F=f(),D=r("ul"),D.innerHTML="<li>How many passwords does this mask generate? How do you calculate it?</li>",P=f(),R=r("p"),R.innerHTML="We can go a step further and tell Hashcat a minimum password length using <code>--increment-min=N</code>, which tells Hashcat to start at <code>N</code>-character passwords. For our test we will add <code>--increment-min=2</code>  which tell Hashcat to start with 2-character passwords.",j=f(),E=r("blockquote"),E.innerHTML="<p>$&gt; <code>hashcat -m 1000 ntlm_bruteforce_2.txt -a 3 ?a?a?a?a?a --increment --increment-min=2</code></p>",d=f(),K(i.$$.fragment),p=f(),N=r("p"),N.innerHTML="We can now see the password is <code>p@s</code>"},m(_,I){t(_,l,I),t(_,s,I),t(_,n,I),t(_,u,I),t(_,a,I),t(_,k,I),t(_,y,I),t(_,h,I),t(_,c,I),t(_,b,I),t(_,x,I),t(_,T,I),X(w,_,I),t(_,v,I),t(_,H,I),t(_,C,I),t(_,L,I),t(_,g,I),t(_,A,I),t(_,$,I),t(_,M,I),t(_,S,I),t(_,q,I),t(_,F,I),t(_,D,I),t(_,P,I),t(_,R,I),t(_,j,I),t(_,E,I),t(_,d,I),X(i,_,I),t(_,p,I),t(_,N,I),ee=!0},p:O,i(_){ee||(B(w.$$.fragment,_),B(i.$$.fragment,_),ee=!0)},o(_){z(w.$$.fragment,_),z(i.$$.fragment,_),ee=!1},d(_){_&&e(l),_&&e(s),_&&e(n),_&&e(u),_&&e(a),_&&e(k),_&&e(y),_&&e(h),_&&e(c),_&&e(b),_&&e(x),_&&e(T),U(w,_),_&&e(v),_&&e(H),_&&e(C),_&&e(L),_&&e(g),_&&e(A),_&&e($),_&&e(M),_&&e(S),_&&e(q),_&&e(F),_&&e(D),_&&e(P),_&&e(R),_&&e(j),_&&e(E),_&&e(d),U(i,_),_&&e(p),_&&e(N)}}}class dt extends Y{constructor(l){super(),V(this,l,null,it,G,{})}}function st(o){let l,s,n,u,a,k,y,h,c,b,x,T=`<code class="language-undefined">crunch version 3.6

Crunch can create a wordlist based on criteria you specify.  The output from crunch can be sent to the screen, file, or to another program.

Usage: crunch &lt;min&gt; &lt;max&gt; [options]
where min and max are numbers

Please refer to the man page for instructions and examples on how to use crunch.</code>`,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E;return C=new Q({props:{path:"crunch.cast",options:{rows:15}}}),P=new Q({props:{path:"ntlm_rockyou2801.cast"}}),{c(){l=r("h2"),l.textContent="Combination Attacks",s=f(),n=r("p"),n.textContent="For the next attack we are going to try a combination attack using a wordlist and our custom-built wordlist.",u=f(),a=r("p"),a.textContent="In this scenario let’s say we know the password is an English word and the last 4 characters of a password are a digit.",k=f(),y=r("p"),y.textContent="First, we will create a wordlist which has every possible number combination for 4 digits.",h=f(),c=r("p"),c.innerHTML="We will use <code>crunch</code> to do this (already installed in Kali Linux).",b=f(),x=r("pre"),w=f(),v=r("blockquote"),v.innerHTML="<p>$&gt; <code>crunch 4 4 0123456789 -o 4_numbers.txt</code></p>",H=f(),K(C.$$.fragment),L=f(),g=r("p"),g.innerHTML="Once we have created our extra wordlist (<code>4_numbers.txt</code>) we can run the attack with the <code>rockyou.txt</code> wordlist.",A=f(),$=r("p"),$.innerHTML="We will change use attack mode <code>-a 1</code> (combination attack).",M=f(),S=r("blockquote"),S.innerHTML="<p>$&gt; <code>hashcat -a 1 -m 1000 ntlm_rockyou2801.txt /usr/share/wordlists/rockyou.txt 4_numbers.txt</code></p>",q=f(),F=r("ul"),F.innerHTML=`<li><code>-a 1</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=hybrid_attack" rel="nofollow">attack mode</a> 1 (combination attack)</li> 
<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>ntlm_rockyou2801.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - The first part of the combination</li> 
<li><code>4_numbers.txt</code> - The second part of the combination</li>`,D=f(),K(P.$$.fragment),R=f(),j=r("p"),j.innerHTML="We can now see the password is <code>rockyou2801</code>",J(x,"class","language-undefined")},m(d,i){t(d,l,i),t(d,s,i),t(d,n,i),t(d,u,i),t(d,a,i),t(d,k,i),t(d,y,i),t(d,h,i),t(d,c,i),t(d,b,i),t(d,x,i),x.innerHTML=T,t(d,w,i),t(d,v,i),t(d,H,i),X(C,d,i),t(d,L,i),t(d,g,i),t(d,A,i),t(d,$,i),t(d,M,i),t(d,S,i),t(d,q,i),t(d,F,i),t(d,D,i),X(P,d,i),t(d,R,i),t(d,j,i),E=!0},p:O,i(d){E||(B(C.$$.fragment,d),B(P.$$.fragment,d),E=!0)},o(d){z(C.$$.fragment,d),z(P.$$.fragment,d),E=!1},d(d){d&&e(l),d&&e(s),d&&e(n),d&&e(u),d&&e(a),d&&e(k),d&&e(y),d&&e(h),d&&e(c),d&&e(b),d&&e(x),d&&e(w),d&&e(v),d&&e(H),U(C,d),d&&e(L),d&&e(g),d&&e(A),d&&e($),d&&e(M),d&&e(S),d&&e(q),d&&e(F),d&&e(D),U(P,d),d&&e(R),d&&e(j)}}}class nt extends Y{constructor(l){super(),V(this,l,null,st,G,{})}}function rt(o){let l,s,n;return{c(){l=r("table"),l.innerHTML=`<thead><tr><th align="left">Name</th> 
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
<td align="left"></td></tr></tbody>`,s=f(),n=r("p"),n.innerHTML="<em>*: Indicates that N starts at 0. For character positions other than 0-9 use A-Z (A=10)</em>"},m(u,a){t(u,l,a),t(u,s,a),t(u,n,a)},p:O,i:O,o:O,d(u){u&&e(l),u&&e(s),u&&e(n)}}}class ft extends Y{constructor(l){super(),V(this,l,null,rt,G,{})}}function ct(o){let l,s,n,u,a,k,y,h,c,b,x,T,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E,d,i,p,N,ee,_,I,ae,be,ue,_e,pe,ye,ie,xe,me,we;return y=new ft({}),H=new Q({props:{path:"simplerule_head.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),q=new Q({props:{path:"simplerule_test.cast",options:{rows:15,autoPlay:!1},loopDelay:0}}),ie=new Q({props:{path:"simplerule_crack.cast"}}),{c(){l=r("h2"),l.textContent="Rules",s=f(),n=r("p"),n.textContent="Rules are a set of predefined rules which can perform mutations on a wordlist (e.g character to number substitutions, letter (de)capitalisation, character replacements). Each line is its own rule and will apply the rule to the password(s) supplied in a wordlist.",u=f(),a=r("p"),a.innerHTML='To understand the rules, we can review the <a href="https://hashcat.net/wiki/doku.php?id=rule_based_attack" rel="nofollow">Hashcat documentation</a>.',k=f(),K(y.$$.fragment),h=f(),c=r("hr"),b=f(),x=r("p"),x.innerHTML="We will use a sample wordlist <code>password.txt</code> which is a text file with one single line, <code>password</code>.",T=f(),w=r("p"),w.innerHTML="Consider the rule in <code>simplerule.rule</code>, we have some append rules, some capitalisation rules, and a substitution from <code>s</code> to <code>$</code>",v=f(),K(H.$$.fragment),C=f(),L=r("p"),L.innerHTML="Let’s run <code>simplerule.rule</code> and review the results",g=f(),A=r("blockquote"),A.innerHTML="<p>$&gt; <code>hashcat password.txt -r simplerule.rule --stdout</code></p>",$=f(),M=r("ul"),M.innerHTML=`<li><code>password.txt</code> - Wordlist</li> 
<li><code>-r simplerule.rule</code> - Use rule list</li> 
<li><code>--stdout</code> - Show password candidates instead of cracking</li>`,S=f(),K(q.$$.fragment),F=f(),D=r("p"),D.innerHTML="Based on the rule <code>$1$2$2</code> (append <code>123</code> at the end of a password), we see a generated password <code>password123</code>.",P=f(),R=r("hr"),j=f(),E=r("p"),E.innerHTML="Let’s create a new rule list <code>labrule.rule</code>, with the rules",d=f(),i=r("ul"),i.innerHTML=`<li>Capitalise the first letter</li> 
<li>Replace <code>s</code> with <code>$</code></li> 
<li>Add <code>!</code> to the end of the password</li>`,p=f(),N=r("blockquote"),N.innerHTML="<p>Solution: <code>c:ss$:$!</code></p>",ee=f(),_=r("hr"),I=f(),ae=r("p"),ae.innerHTML="Now let’s try out our new rule list <code>labrule.rule</code> against <code>rockyou.txt</code> to crack <code>simplerule_password.txt</code>",be=f(),ue=r("blockquote"),ue.innerHTML="<p>$&gt; <code>hashcat -m 1000 simplerule_password.txt /usr/share/wordlists/rockyou.txt -r labrule.rule</code></p>",_e=f(),pe=r("ul"),pe.innerHTML=`<li><code>-m 1000</code> - Use <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">hash mode</a> 1000 (NTLM)</li> 
<li><code>simplerule_password.txt</code> - The hash file to crack</li> 
<li><code>/usr/share/wordlists/rockyou.txt</code> - Wordlist</li> 
<li><code>-r labrule.rule</code> - Use rule list</li>`,ye=f(),K(ie.$$.fragment),xe=f(),me=r("p"),me.innerHTML="We can now see the password is <code>Friend$!</code>"},m(m,W){t(m,l,W),t(m,s,W),t(m,n,W),t(m,u,W),t(m,a,W),t(m,k,W),X(y,m,W),t(m,h,W),t(m,c,W),t(m,b,W),t(m,x,W),t(m,T,W),t(m,w,W),t(m,v,W),X(H,m,W),t(m,C,W),t(m,L,W),t(m,g,W),t(m,A,W),t(m,$,W),t(m,M,W),t(m,S,W),X(q,m,W),t(m,F,W),t(m,D,W),t(m,P,W),t(m,R,W),t(m,j,W),t(m,E,W),t(m,d,W),t(m,i,W),t(m,p,W),t(m,N,W),t(m,ee,W),t(m,_,W),t(m,I,W),t(m,ae,W),t(m,be,W),t(m,ue,W),t(m,_e,W),t(m,pe,W),t(m,ye,W),X(ie,m,W),t(m,xe,W),t(m,me,W),we=!0},p:O,i(m){we||(B(y.$$.fragment,m),B(H.$$.fragment,m),B(q.$$.fragment,m),B(ie.$$.fragment,m),we=!0)},o(m){z(y.$$.fragment,m),z(H.$$.fragment,m),z(q.$$.fragment,m),z(ie.$$.fragment,m),we=!1},d(m){m&&e(l),m&&e(s),m&&e(n),m&&e(u),m&&e(a),m&&e(k),U(y,m),m&&e(h),m&&e(c),m&&e(b),m&&e(x),m&&e(T),m&&e(w),m&&e(v),U(H,m),m&&e(C),m&&e(L),m&&e(g),m&&e(A),m&&e($),m&&e(M),m&&e(S),U(q,m),m&&e(F),m&&e(D),m&&e(P),m&&e(R),m&&e(j),m&&e(E),m&&e(d),m&&e(i),m&&e(p),m&&e(N),m&&e(ee),m&&e(_),m&&e(I),m&&e(ae),m&&e(be),m&&e(ue),m&&e(_e),m&&e(pe),m&&e(ye),U(ie,m),m&&e(xe),m&&e(me)}}}class at extends Y{constructor(l){super(),V(this,l,null,ct,G,{})}}function ut(o){let l,s,n,u,a,k,y;return{c(){l=r("h2"),l.textContent="Remark",s=f(),n=r("blockquote"),n.innerHTML="<p>🔥 This completes the main section on password cracking 🔥</p>",u=f(),a=r("p"),a.textContent="While we have spent the entire time focusing on cracking NTLM hashes, this type of hash would generally not be common during a forensic investigation.",k=f(),y=r("p"),y.innerHTML=`What is more common is breaking into password-protected ZIP files or Word documents, however the same principles apply.<br/>
We just need to change the <code>-m</code> flag to the correct hash format that we are trying to crack.`},m(h,c){t(h,l,c),t(h,s,c),t(h,n,c),t(h,u,c),t(h,a,c),t(h,k,c),t(h,y,c)},p:O,i:O,o:O,d(h){h&&e(l),h&&e(s),h&&e(n),h&&e(u),h&&e(a),h&&e(k),h&&e(y)}}}class pt extends Y{constructor(l){super(),V(this,l,null,ut,G,{})}}function mt(o){let l,s,n,u,a,k,y,h,c,b,x,T,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E,d;return x=new Q({props:{path:"office2john_demo.cast"}}),q=new Q({props:{path:"office2john_prepare.cast"}}),E=new Q({props:{path:"office2john_crack.cast"}}),{c(){l=r("h2"),l.textContent="Cracking other hashes",s=f(),n=r("p"),n.textContent="In order to password crack a ZIP file or a Word document we need to first extract the password hash to be provided to Hashcat.",u=f(),a=r("p"),a.textContent="We will now learn how to extract a password from a password-protected Word document file.",k=f(),y=r("p"),y.innerHTML="The Python script <code>office2john.py</code> is supplied in this tutorial, but is also already available in Kali Linux.",h=f(),c=r("blockquote"),c.innerHTML="<p>$&gt; <code>office2john CTF_Forensic.docx &gt; CTF_Forensic.docx.hash</code></p>",b=f(),K(x.$$.fragment),T=f(),w=r("p"),w.innerHTML="If we review the hash, we can see the hash begins after the filename: <code>$office$*2013*...</code>",v=f(),H=r("p"),H.innerHTML='Looking at the <a href="https://hashcat.net/wiki/doku.php?id=example_hashes" rel="nofollow">Hashcat documentation</a> for hash modes, we can see that we need to use <code>-m 9600</code> (MS Office 2013)',C=f(),L=r("table"),L.innerHTML=`<thead><tr><th align="center">Hash-Mode</th> 
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
<td align="left">…</td></tr></tbody>`,g=f(),A=r("hr"),$=f(),M=r("p"),M.innerHTML=`If you wondered what “john” means in <code>office2john</code>, this is referring to another hash-cracking tool called <a href="https://github.com/openwall/john" rel="nofollow">John the Ripper</a>.<br/>
Whilst both Hashcat and John the Ripper use the same hashes, the input format to provided to each tool is different. In order to crack the MS Office 2013 hash generated from the <code>office2john</code> tool in Hashcat, <strong>we must first remove the filename from the hash file</strong>.`,S=f(),K(q.$$.fragment),F=f(),D=r("p"),D.textContent="Now we can crack the hash",P=f(),R=r("blockquote"),R.innerHTML="<p>$&gt; <code>hashcat -m 9600 CTF_Forensic.docx.hash /usr/share/wordlists/rockyou.txt</code></p>",j=f(),K(E.$$.fragment)},m(i,p){t(i,l,p),t(i,s,p),t(i,n,p),t(i,u,p),t(i,a,p),t(i,k,p),t(i,y,p),t(i,h,p),t(i,c,p),t(i,b,p),X(x,i,p),t(i,T,p),t(i,w,p),t(i,v,p),t(i,H,p),t(i,C,p),t(i,L,p),t(i,g,p),t(i,A,p),t(i,$,p),t(i,M,p),t(i,S,p),X(q,i,p),t(i,F,p),t(i,D,p),t(i,P,p),t(i,R,p),t(i,j,p),X(E,i,p),d=!0},p:O,i(i){d||(B(x.$$.fragment,i),B(q.$$.fragment,i),B(E.$$.fragment,i),d=!0)},o(i){z(x.$$.fragment,i),z(q.$$.fragment,i),z(E.$$.fragment,i),d=!1},d(i){i&&e(l),i&&e(s),i&&e(n),i&&e(u),i&&e(a),i&&e(k),i&&e(y),i&&e(h),i&&e(c),i&&e(b),U(x,i),i&&e(T),i&&e(w),i&&e(v),i&&e(H),i&&e(C),i&&e(L),i&&e(g),i&&e(A),i&&e($),i&&e(M),i&&e(S),U(q,i),i&&e(F),i&&e(D),i&&e(P),i&&e(R),i&&e(j),U(E,i)}}}class wt extends Y{constructor(l){super(),V(this,l,null,mt,G,{})}}function ht(o){let l,s,n,u,a,k,y,h,c,b,x,T,w,v,H,C,L,g,A,$,M,S,q,F,D,P,R,j,E;return{c(){l=r("h2"),l.textContent="Exercises",s=f(),n=r("h3"),n.textContent="Exercise 1",u=f(),a=r("p"),a.textContent="Write a rule list that will",k=f(),y=r("ul"),y.innerHTML=`<li>Capitalise the first letter</li> 
<li>Append <code>1234</code> to the end</li> 
<li>Replace the letter <code>s</code> with <code>$</code></li> 
<li>Replace the letter <code>o</code> with <code>0</code></li>`,h=f(),c=r("p"),c.innerHTML="If the rules are written correctly, the rules applied on <code>password</code> should produce <code>Pa$$w0rd1234</code>",b=f(),x=r("h3"),x.textContent="Exercise 2",T=f(),w=r("blockquote"),w.innerHTML="<p>Crack this NTLM hash <code>B05564D517681DAB0FB8FA64CA97E7CB</code>.</p>",v=f(),H=r("p"),H.textContent="The password is made up (in order) of 1 capital letter, 2 lowercase letters, and 4 numbers.",C=f(),L=r("h3"),L.textContent="Exercise 3",g=f(),A=r("blockquote"),A.innerHTML="<p>Crack this NTLM hash <code>4A537119CEB6F51224DAD23D01CAA45C</code></p>",$=f(),M=r("p"),M.textContent="Hint: Have you been watching your lectures?",S=f(),q=r("h3"),q.textContent="Exercise 4 (Optional)",F=f(),D=r("blockquote"),D.innerHTML="<p>How secure is your own password? <strong>We don’t want your password, don’t submit this</strong></p>",P=f(),R=r("p"),R.innerHTML='Try and crack you own password using wordlist and/or rules, convert to any hash you want using <a href="https://codebeautify.org/ntlm-hash-generator" rel="nofollow">https://codebeautify.org/ntlm-hash-generator</a>',j=f(),E=r("p"),E.innerHTML='Perhaps try the pre-made rule list <a href="https://raw.githubusercontent.com/hashcat/hashcat/master/rules/rockyou-30000.rule" rel="nofollow"><code>rockyou-3000.rule</code></a>'},m(d,i){t(d,l,i),t(d,s,i),t(d,n,i),t(d,u,i),t(d,a,i),t(d,k,i),t(d,y,i),t(d,h,i),t(d,c,i),t(d,b,i),t(d,x,i),t(d,T,i),t(d,w,i),t(d,v,i),t(d,H,i),t(d,C,i),t(d,L,i),t(d,g,i),t(d,A,i),t(d,$,i),t(d,M,i),t(d,S,i),t(d,q,i),t(d,F,i),t(d,D,i),t(d,P,i),t(d,R,i),t(d,j,i),t(d,E,i)},p:O,i:O,o:O,d(d){d&&e(l),d&&e(s),d&&e(n),d&&e(u),d&&e(a),d&&e(k),d&&e(y),d&&e(h),d&&e(c),d&&e(b),d&&e(x),d&&e(T),d&&e(w),d&&e(v),d&&e(H),d&&e(C),d&&e(L),d&&e(g),d&&e(A),d&&e($),d&&e(M),d&&e(S),d&&e(q),d&&e(F),d&&e(D),d&&e(P),d&&e(R),d&&e(j),d&&e(E)}}}class kt extends Y{constructor(l){super(),V(this,l,null,ht,G,{})}}function bt(o){let l,s,n,u=`<code class="language-undefined">Version: 1.0 (20230611)
Maintainer: Andrew Wong (andrew.j.wong@unsw.edu.au)</code>`,a,k,y='<code class="language-undefined">Special thanks to Wesley Lacy for creating the activity resources</code>',h,c;return{c(){l=r("h1"),l.textContent="COMP6845 | Password Cracking",s=f(),n=r("pre"),a=f(),k=r("pre"),h=f(),c=r("p"),c.textContent="In this lab, we will use a combination of scripts to extract password hashes from files and various attacks to crack the password.",J(n,"class","language-undefined"),J(k,"class","language-undefined")},m(b,x){t(b,l,x),t(b,s,x),t(b,n,x),n.innerHTML=u,t(b,a,x),t(b,k,x),k.innerHTML=y,t(b,h,x),t(b,c,x)},p:O,i:O,o:O,d(b){b&&e(l),b&&e(s),b&&e(n),b&&e(a),b&&e(k),b&&e(h),b&&e(c)}}}class _t extends Y{constructor(l){super(),V(this,l,null,bt,G,{})}}function Ne(o){let l,s,n=o[0][o[1]-1][0]+"",u,a,k,y;return{c(){l=r("button"),s=te("« "),u=te(n),a=te(" «")},m(h,c){t(h,l,c),Z(l,s),Z(l,u),Z(l,a),k||(y=Me(l,"click",o[7]),k=!0)},p(h,c){c&3&&n!==(n=h[0][h[1]-1][0]+"")&&We(u,n)},d(h){h&&e(l),k=!1,y()}}}function Ie(o){let l,s,n=o[0][o[1]+1][0]+"",u,a,k,y;return{c(){l=r("button"),s=te("» "),u=te(n),a=te(" »")},m(h,c){t(h,l,c),Z(l,s),Z(l,u),Z(l,a),k||(y=Me(l,"click",o[8]),k=!0)},p(h,c){c&3&&n!==(n=h[0][h[1]+1][0]+"")&&We(u,n)},d(h){h&&e(l),k=!1,y()}}}function yt(o){let l,s,n,u,a,k,y=o[0][o[1]][0]+"",h,c,b,x,T,w=o[1]>0&&Ne(o),v=o[1]<o[0].length-1&&Ie(o);return{c(){l=r("div"),s=r("div"),n=r("div"),w&&w.c(),u=f(),a=r("div"),k=r("h4"),h=te(y),c=f(),b=r("div"),v&&v.c(),x=f(),T=r("hr"),J(n,"class","svelte-14sokvu"),J(a,"class","svelte-14sokvu"),J(b,"class","svelte-14sokvu"),J(s,"class","navigation svelte-14sokvu"),J(T,"class","svelte-14sokvu"),ke(T,"wide",o[3]),J(l,"class","container svelte-14sokvu")},m(H,C){t(H,l,C),Z(l,s),Z(s,n),w&&w.m(n,null),Z(s,u),Z(s,a),Z(a,k),Z(k,h),Z(s,c),Z(s,b),v&&v.m(b,null),Z(l,x),Z(l,T),o[9](l)},p(H,[C]){H[1]>0?w?w.p(H,C):(w=Ne(H),w.c(),w.m(n,null)):w&&(w.d(1),w=null),C&3&&y!==(y=H[0][H[1]][0]+"")&&We(h,y),H[1]<H[0].length-1?v?v.p(H,C):(v=Ie(H),v.c(),v.m(b,null)):v&&(v.d(1),v=null),C&8&&ke(T,"wide",H[3])},i:O,o:O,d(H){H&&e(l),w&&w.d(),v&&v.d(),o[9](null)}}}function xt(o,l,s){let{items:n=[]}=l,{activeItem:u}=l,a=0,k,y,h,c;Ee(()=>{new IntersectionObserver(([w])=>s(3,c=w.intersectionRatio<1),{threshold:[1]}).observe(h)});const b=()=>{s(1,a--,a)},x=()=>{s(1,a++,a)};function T(w){oe[w?"unshift":"push"](()=>{h=w,s(2,h)})}return o.$$set=w=>{"items"in w&&s(0,n=w.items),"activeItem"in w&&s(4,u=w.activeItem)},o.$$.update=()=>{o.$$.dirty&115&&(k!==u&&(s(5,k=u),s(1,a=n.findIndex(([w,v])=>v===u))),y!==a&&(s(6,y=a),s(4,u=n[a][1])))},[n,a,h,c,u,k,y,b,x,T]}class $t extends Y{constructor(l){super(),V(this,l,xt,yt,G,{items:0,activeItem:4})}}const{window:Tt}=Re;function vt(o){let l,s,n,u,a,k,y,h,c,b,x,T;l=new _t({});function w(L){o[6](L)}let v={items:o[3]};o[0]!==void 0&&(v.activeItem=o[0]),a=new $t({props:v}),oe.push(()=>Ze(a,"activeItem",w));var H=o[0];function C(L){return{props:{}}}return H&&(c=Ce(H,C()),o[7](c)),{c(){K(l.$$.fragment),s=f(),n=r("hr"),u=f(),K(a.$$.fragment),y=f(),h=r("main"),c&&K(c.$$.fragment),J(h,"class","svelte-ck21ns")},m(L,g){X(l,L,g),t(L,s,g),t(L,n,g),t(L,u,g),X(a,L,g),t(L,y,g),t(L,h,g),c&&X(c,h,null),o[8](h),b=!0,x||(T=Me(Tt,"hashchange",o[4]),x=!0)},p(L,[g]){const A={};!k&&g&1&&(k=!0,A.activeItem=L[0],Be(()=>k=!1)),a.$set(A);const $={};if(g&1&&H!==(H=L[0])){if(c){ze();const M=c;z(M.$$.fragment,1,0,()=>{U(M,1)}),Ke()}H?(c=Ce(H,C()),L[7](c),K(c.$$.fragment),B(c.$$.fragment,1),X(c,h,null)):c=null}else H&&c.$set($)},i(L){b||(B(l.$$.fragment,L),B(a.$$.fragment,L),c&&B(c.$$.fragment,L),b=!0)},o(L){z(l.$$.fragment,L),z(a.$$.fragment,L),c&&z(c.$$.fragment,L),b=!1},d(L){U(l,L),L&&e(s),L&&e(n),L&&e(u),U(a,L),L&&e(y),L&&e(h),o[7](null),c&&U(c),o[8](null),x=!1,T()}}}function Lt(o,l,s){let n=[["Getting Started",Te],["Wordlist Attack",tt],["Hybrid Attack",ot],["Bruteforce Attack",dt],["Combination Attack",nt],["Rules",at],["Remark",pt],["Office Cracking",wt],["Exercise",kt]],u=Te;function a(){s(0,u=n[Number(location.hash.slice(1))][1]||Te)}a();let k,y,h=!0;function c(T){u=T,s(0,u)}function b(T){oe[T?"unshift":"push"](()=>{y=T,s(2,y)})}function x(T){oe[T?"unshift":"push"](()=>{k=T,s(1,k)})}return o.$$.update=()=>{o.$$.dirty&1&&(location.hash=String(n.findIndex(([T,w])=>w===u))),o.$$.dirty&38&&y&&k&&(k.querySelectorAll("blockquote").forEach(T=>{T.textContent.startsWith("$> ")&&T.style.setProperty("--leftLineColour","#21b0d7")}),h?s(5,h=!1):setTimeout(()=>window.scrollTo(0,k.offsetTop-50),0))},[u,k,y,n,a,h,c,b,x]}class Ht extends Y{constructor(l){super(),V(this,l,Lt,vt,G,{})}}new Ht({target:document.getElementById("app")});
